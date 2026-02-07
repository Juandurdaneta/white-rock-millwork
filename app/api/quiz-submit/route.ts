import { NextRequest, NextResponse } from "next/server";
import { styleProfiles } from "@/data/quiz-results";
import { StyleType } from "@/lib/quiz-logic";

const GHL_API_BASE = "https://services.leadconnectorhq.com";
const GHL_API_KEY = process.env.GHL_API_KEY;
const GHL_LOCATION_ID = process.env.GHL_LOCATION_ID;
const GHL_PIPELINE_ID = process.env.GHL_PIPELINE_ID;
const GHL_PIPELINE_STAGE_ID = process.env.GHL_PIPELINE_STAGE_ID;
const GHL_EMAIL_FROM = process.env.GHL_EMAIL_FROM;
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://wrmtx.com";

interface QuizSubmitPayload {
  firstName: string;
  email: string;
  cabinetChecklistOptIn: boolean;
  quizAnswers: Record<string, string>;
  resultStyle: StyleType;
  movieResult: string;
}

function ghlHeaders() {
  return {
    Authorization: `Bearer ${GHL_API_KEY}`,
    "Content-Type": "application/json",
    Version: "2021-07-28",
  };
}

async function createContact(data: QuizSubmitPayload): Promise<string> {
  const response = await fetch(`${GHL_API_BASE}/contacts/`, {
    method: "POST",
    headers: ghlHeaders(),
    body: JSON.stringify({
      firstName: data.firstName,
      email: data.email,
      locationId: GHL_LOCATION_ID,
      tags: [
        "quiz-lead",
        `style-${data.resultStyle}`,
        ...(data.cabinetChecklistOptIn ? ["cabinet-checklist-optin"] : []),
      ],
      source: "Cabinet Style Quiz",
    }),
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Failed to create contact: ${response.status} - ${error}`);
  }

  const result = await response.json();
  return result.contact.id;
}

async function createOpportunity(
  contactId: string,
  data: QuizSubmitPayload
): Promise<string> {
  const profile = styleProfiles[data.resultStyle];

  const response = await fetch(`${GHL_API_BASE}/opportunities/`, {
    method: "POST",
    headers: ghlHeaders(),
    body: JSON.stringify({
      pipelineId: GHL_PIPELINE_ID,
      pipelineStageId: GHL_PIPELINE_STAGE_ID,
      locationId: GHL_LOCATION_ID,
      contactId,
      name: `${data.firstName} - ${profile?.name || data.resultStyle} Style Quiz`,
      status: "open",
      source: "Cabinet Style Quiz",
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

function buildResultsEmail(data: QuizSubmitPayload): string {
  const profile = styleProfiles[data.resultStyle];
  if (!profile) {
    return `<p>Thank you for completing our quiz, ${data.firstName}! Your style: ${data.resultStyle}.</p>`;
  }

  const resultsUrl = `${SITE_URL}/quiz/results/${data.resultStyle}`;

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin:0;padding:0;background-color:#f5f5f4;font-family:Georgia,'Times New Roman',serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f5f5f4;padding:40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color:#ffffff;border-radius:8px;overflow:hidden;">

          <!-- Header -->
          <tr>
            <td style="background-color:#1c1917;padding:40px 40px 30px;text-align:center;">
              <p style="color:#d4a574;font-size:12px;letter-spacing:2px;text-transform:uppercase;margin:0 0 12px;">
                Your Cabinet Style Results
              </p>
              <h1 style="color:#ffffff;font-size:28px;margin:0 0 8px;font-weight:normal;">
                ${data.firstName}, You're
              </h1>
              <h2 style="color:#d4a574;font-size:32px;margin:0 0 8px;font-style:italic;font-weight:normal;">
                "${profile.movieTitle}"
              </h2>
              <p style="color:#a8a29e;font-size:14px;margin:0;">
                ${profile.name}
              </p>
            </td>
          </tr>

          <!-- Tagline -->
          <tr>
            <td style="padding:30px 40px 10px;text-align:center;">
              <p style="color:#44403c;font-size:18px;font-style:italic;margin:0;">
                "${profile.tagline}"
              </p>
            </td>
          </tr>

          <!-- Description -->
          <tr>
            <td style="padding:20px 40px 30px;">
              ${profile.description
                .map(
                  (p) =>
                    `<p style="color:#57534e;font-size:15px;line-height:1.7;margin:0 0 14px;">${p}</p>`
                )
                .join("")}
            </td>
          </tr>

          <!-- Features -->
          <tr>
            <td style="padding:0 40px 30px;">
              <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#fafaf9;border-radius:8px;padding:24px;">
                <tr>
                  <td style="padding:24px;">
                    <h3 style="color:#1c1917;font-size:18px;margin:0 0 16px;">Your Style Profile</h3>

                    <p style="margin:0 0 8px;">
                      <strong style="color:#1c1917;">Door Style:</strong>
                      <span style="color:#57534e;"> ${profile.features.doorStyle}</span>
                    </p>
                    <p style="margin:0 0 8px;">
                      <strong style="color:#1c1917;">Finish:</strong>
                      <span style="color:#57534e;"> ${profile.features.finish}</span>
                    </p>
                    <p style="margin:0 0 8px;">
                      <strong style="color:#1c1917;">Hardware:</strong>
                      <span style="color:#57534e;"> ${profile.features.hardware}</span>
                    </p>
                    <p style="margin:0 0 8px;">
                      <strong style="color:#1c1917;">Details:</strong>
                      <span style="color:#57534e;"> ${profile.features.details}</span>
                    </p>
                    <p style="margin:0;">
                      <strong style="color:#1c1917;">Special Features:</strong>
                      <span style="color:#57534e;"> ${profile.features.specialFeatures}</span>
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- CTA -->
          <tr>
            <td style="padding:0 40px 20px;text-align:center;">
              <a href="${resultsUrl}"
                 style="display:inline-block;background-color:#1c1917;color:#ffffff;text-decoration:none;padding:14px 32px;border-radius:6px;font-size:15px;letter-spacing:0.5px;">
                View Your Full Results
              </a>
            </td>
          </tr>

          <!-- Consultation CTA -->
          <tr>
            <td style="padding:10px 40px 30px;text-align:center;">
              <p style="color:#57534e;font-size:14px;margin:0 0 12px;">
                Ready to bring your style to life?
              </p>
              <a href="${SITE_URL}/contact"
                 style="color:#d4a574;font-size:14px;text-decoration:underline;">
                Schedule Your Free Consultation
              </a>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color:#fafaf9;padding:24px 40px;text-align:center;border-top:1px solid #e7e5e4;">
              <p style="color:#a8a29e;font-size:12px;margin:0 0 4px;">
                White Rock Millwork &bull; Dallas, TX
              </p>
              <p style="color:#a8a29e;font-size:12px;margin:0;">
                You received this email because you completed our Cabinet Style Quiz.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`.trim();
}

async function sendResultsEmail(
  contactId: string,
  data: QuizSubmitPayload
): Promise<void> {
  const profile = styleProfiles[data.resultStyle];
  const subject = `${data.firstName}, your cabinet style is "${profile?.movieTitle || data.resultStyle}"!`;
  const html = buildResultsEmail(data);

  const response = await fetch(`${GHL_API_BASE}/conversations/messages`, {
    method: "POST",
    headers: ghlHeaders(),
    body: JSON.stringify({
      type: "Email",
      contactId,
      locationId: GHL_LOCATION_ID,
      subject,
      message: html,
      emailFrom: GHL_EMAIL_FROM,
    }),
  });

  if (!response.ok) {
    const error = await response.text();
    console.error(`Failed to send email: ${response.status} - ${error}`);
    // Don't throw - email failure shouldn't block the quiz flow
  }
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

    const data: QuizSubmitPayload = await request.json();

    // 1. Create contact in GHL
    const contactId = await createContact(data);

    // 2. Create opportunity in pipeline
    if (GHL_PIPELINE_ID && GHL_PIPELINE_STAGE_ID) {
      await createOpportunity(contactId, data);
    }

    // 3. Send results email
    if (GHL_EMAIL_FROM) {
      await sendResultsEmail(contactId, data);
    }

    return NextResponse.json({
      success: true,
      message: "Quiz submitted successfully",
    });
  } catch (error) {
    console.error("Quiz submission error:", error);
    return NextResponse.json(
      {
        success: false,
        message:
          error instanceof Error ? error.message : "Failed to submit quiz",
      },
      { status: 500 }
    );
  }
}
