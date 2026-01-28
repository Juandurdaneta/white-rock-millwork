import { Metadata } from "next";
import QuizContainer from "@/components/quiz/quiz-container";

export const metadata: Metadata = {
  title: "Discover Your Cabinet Style | White Rock Millwork",
  description:
    "Take our 3-minute quiz to discover the perfect cabinet style for your Texas home. Get personalized recommendations for door styles, finishes, and colors.",
  openGraph: {
    title: "Discover Your Cabinet Style | White Rock Millwork",
    description:
      "Take our 3-minute quiz to discover the perfect cabinet style for your Texas home.",
    type: "website",
  },
};

export default function QuizPage() {
  return <QuizContainer />;
}
