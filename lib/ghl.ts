import { LeadFormData, ContactFormData } from "./validations";

const GHL_WEBHOOK_URL = process.env.NEXT_PUBLIC_GHL_WEBHOOK_URL;

export interface QuizSubmissionData extends LeadFormData {
  quizAnswers: {
    q1_movie: string;
    q2_vacation: string;
    q3_hosting: string;
    q4_decisions: string;
    q5_details: string;
  };
  resultStyle: string;
}

export interface ContactSubmissionData extends ContactFormData {
  formType: "homeowner" | "professional";
}

export async function submitQuizToGHL(data: QuizSubmissionData) {
  if (!GHL_WEBHOOK_URL) {
    console.warn("GHL_WEBHOOK_URL not configured");
    // Return success in development
    return { success: true, message: "Form submitted (webhook not configured)" };
  }

  const payload = {
    firstName: data.firstName,
    lastName: data.lastName,
    email: data.email,
    phone: data.phone,
    zipCode: data.zipCode,
    projectTimeline: data.timeline,
    quizAnswers: data.quizAnswers,
    resultStyle: data.resultStyle,
    source: "cabinet-style-quiz",
    submittedAt: new Date().toISOString(),
  };

  try {
    const response = await fetch(GHL_WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error("Failed to submit form");
    }

    return { success: true, message: "Form submitted successfully" };
  } catch (error) {
    console.error("Error submitting to GHL:", error);
    return { success: false, message: "Failed to submit form" };
  }
}

export async function submitContactToGHL(data: ContactSubmissionData) {
  if (!GHL_WEBHOOK_URL) {
    console.warn("GHL_WEBHOOK_URL not configured");
    return { success: true, message: "Form submitted (webhook not configured)" };
  }

  const payload = {
    ...data,
    source: data.formType === "homeowner" ? "homeowner-contact" : "professional-contact",
    submittedAt: new Date().toISOString(),
  };

  try {
    const response = await fetch(GHL_WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error("Failed to submit form");
    }

    return { success: true, message: "Form submitted successfully" };
  } catch (error) {
    console.error("Error submitting to GHL:", error);
    return { success: false, message: "Failed to submit form" };
  }
}

// Wrapper function for contact form component
export async function submitContactForm(
  data: ContactFormData & { contactType: "homeowner" | "professional" }
) {
  const { contactType, ...formData } = data;
  return submitContactToGHL({
    ...formData,
    formType: contactType,
  });
}
