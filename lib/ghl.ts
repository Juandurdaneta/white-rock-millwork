import { LeadFormData, ContactFormData } from "./validations";

const GHL_WEBHOOK_URL = process.env.NEXT_PUBLIC_GHL_WEBHOOK_URL;

export interface QuizSubmissionData {
  firstName: string;
  email: string;
  cabinetChecklistOptIn: boolean;
  quizAnswers: {
    q1: string;
    q2: string;
    q3: string;
    q4: string;
    q5: string;
    q6: string;
    q7: string;
    q8: string;
    q9: string;
    q10: string;
  };
  resultStyle: string;
  movieResult: string;
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
    email: data.email,
    cabinetChecklistOptIn: data.cabinetChecklistOptIn,
    quizAnswers: data.quizAnswers,
    resultStyle: data.resultStyle,
    movieResult: data.movieResult,
    source: "cabinet-style-quiz-movie",
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
