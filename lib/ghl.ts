import { ContactFormData } from "./validations";

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

export async function submitQuizToGHL(data: QuizSubmissionData) {
  try {
    const response = await fetch("/api/quiz-submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (!response.ok) {
      console.error("Quiz submission failed:", result.message);
      return { success: false, message: result.message || "Failed to submit quiz" };
    }

    return { success: true, message: result.message };
  } catch (error) {
    console.error("Error submitting quiz:", error);
    return { success: false, message: "Failed to submit quiz" };
  }
}

export async function submitContactForm(
  data: ContactFormData & { contactType: "homeowner" | "professional" }
) {
  try {
    const response = await fetch("/api/contact-submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (!response.ok) {
      console.error("Contact submission failed:", result.message);
      return { success: false, message: result.message || "Failed to submit contact" };
    }

    return { success: true, message: result.message };
  } catch (error) {
    console.error("Error submitting contact:", error);
    return { success: false, message: "Failed to submit contact" };
  }
}
