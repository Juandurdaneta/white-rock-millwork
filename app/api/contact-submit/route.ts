import { NextRequest, NextResponse } from "next/server";

const GHL_API_BASE = "https://services.leadconnectorhq.com";
const GHL_API_KEY = process.env.GHL_API_KEY;
const GHL_LOCATION_ID = process.env.GHL_LOCATION_ID;
const GHL_PIPELINE_ID = process.env.GHL_PIPELINE_ID;
const GHL_PIPELINE_STAGE_ID = process.env.GHL_PIPELINE_STAGE_ID;

interface ContactSubmitPayload {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  zipCode: string;
  projectType: string;
  timeline: string;
  message?: string;
  howHeard?: string;
  contactType: "homeowner" | "professional";
}

const PROJECT_TYPE_LABELS: Record<string, string> = {
  kitchen: "Kitchen",
  bathroom: "Bathroom",
  closet: "Closet",
  pantry: "Pantry",
  laundry: "Laundry Room",
  office: "Home Office",
  other: "Other",
};

const TIMELINE_LABELS: Record<string, string> = {
  "within-3-months": "Within 3 months",
  "3-6-months": "3-6 months",
  "6-12-months": "6-12 months",
  "just-researching": "Just researching",
};

function ghlHeaders() {
  return {
    Authorization: `Bearer ${GHL_API_KEY}`,
    "Content-Type": "application/json",
    Version: "2021-07-28",
  };
}

async function createOrUpdateContact(data: ContactSubmitPayload): Promise<string> {
  const tags = [
    "contact-form",
    data.contactType,
    `project-${data.projectType}`,
    `timeline-${data.timeline}`,
    ...(data.howHeard ? [`source-${data.howHeard}`] : []),
  ];

  const contactPayload = {
    firstName: data.firstName,
    lastName: data.lastName,
    email: data.email,
    phone: data.phone,
    postalCode: data.zipCode,
    locationId: GHL_LOCATION_ID,
    tags,
    source: data.contactType === "homeowner" ? "Homeowner Contact Form" : "Professional Contact Form",
  };

  const response = await fetch(`${GHL_API_BASE}/contacts/`, {
    method: "POST",
    headers: ghlHeaders(),
    body: JSON.stringify(contactPayload),
  });

  if (!response.ok) {
    const errorBody = await response.json().catch(() => null);

    // Contact already exists — update them instead
    if (response.status === 400 && errorBody?.meta?.contactId) {
      const existingId = errorBody.meta.contactId;
      const { locationId: _, ...updatePayload } = contactPayload;
      await fetch(`${GHL_API_BASE}/contacts/${existingId}`, {
        method: "PUT",
        headers: ghlHeaders(),
        body: JSON.stringify(updatePayload),
      });
      return existingId;
    }

    throw new Error(`Failed to create contact: ${response.status} - ${JSON.stringify(errorBody)}`);
  }

  const result = await response.json();
  return result.contact.id;
}

async function createOpportunity(
  contactId: string,
  data: ContactSubmitPayload
): Promise<string> {
  const projectLabel = PROJECT_TYPE_LABELS[data.projectType] || data.projectType;
  const timelineLabel = TIMELINE_LABELS[data.timeline] || data.timeline;

  const response = await fetch(`${GHL_API_BASE}/opportunities/`, {
    method: "POST",
    headers: ghlHeaders(),
    body: JSON.stringify({
      pipelineId: GHL_PIPELINE_ID,
      pipelineStageId: GHL_PIPELINE_STAGE_ID,
      locationId: GHL_LOCATION_ID,
      contactId,
      name: `${data.firstName} ${data.lastName} - ${projectLabel} (${timelineLabel})`,
      status: "open",
      source: data.contactType === "homeowner" ? "Homeowner Contact Form" : "Professional Contact Form",
    }),
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(
      `Failed to create opportunity: ${response.status} - ${error}`
    );
  }

  const result = await response.json();
  return result.opportunity?.id || result.id;
}

export async function POST(request: NextRequest) {
  try {
    if (!GHL_API_KEY || !GHL_LOCATION_ID) {
      console.warn("GHL API credentials not configured");
      return NextResponse.json(
        { success: true, message: "Submitted (GHL not configured)" },
        { status: 200 }
      );
    }

    const data: ContactSubmitPayload = await request.json();

    // 1. Create or update contact in GHL
    const contactId = await createOrUpdateContact(data);

    // 2. Create opportunity in pipeline
    if (GHL_PIPELINE_ID && GHL_PIPELINE_STAGE_ID) {
      await createOpportunity(contactId, data);
    }

    return NextResponse.json({
      success: true,
      message: "Contact submitted successfully",
    });
  } catch (error) {
    console.error("Contact submission error:", error);
    return NextResponse.json(
      {
        success: false,
        message:
          error instanceof Error ? error.message : "Failed to submit contact",
      },
      { status: 500 }
    );
  }
}
