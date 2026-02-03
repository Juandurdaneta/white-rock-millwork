"use client";

import { useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import QuizIntro from "./quiz-intro";
import QuizQuestion from "./quiz-question";
import QuizProgress from "./quiz-progress";
import QuizLeadForm from "./quiz-lead-form";
import { quizQuestions } from "@/data/quiz-questions";
import { calculateQuizResult, QuizAnswers, getStyleDisplayName } from "@/lib/quiz-logic";
import { submitQuizToGHL, QuizSubmissionData } from "@/lib/ghl";
import { QuizEmailFormData } from "@/lib/validations";

type QuizStep = "intro" | "questions" | "lead-form";

export default function QuizContainer() {
  const router = useRouter();
  const [step, setStep] = useState<QuizStep>("intro");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswers>({
    q1: "",
    q2: "",
    q3: "",
    q4: "",
    q5: "",
    q6: "",
    q7: "",
    q8: "",
    q9: "",
    q10: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleStart = useCallback(() => {
    setStep("questions");
  }, []);

  const handleAnswer = useCallback(
    (questionId: string, answerId: string) => {
      setAnswers((prev) => ({
        ...prev,
        [questionId]: answerId,
      }));

      // Move to next question or lead form
      if (currentQuestion < quizQuestions.length - 1) {
        setTimeout(() => {
          setCurrentQuestion((prev) => prev + 1);
        }, 300);
      } else {
        setTimeout(() => {
          setStep("lead-form");
        }, 300);
      }
    },
    [currentQuestion]
  );

  const handleBack = useCallback(() => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1);
    } else {
      setStep("intro");
    }
  }, [currentQuestion]);

  const handleSubmit = useCallback(
    async (formData: QuizEmailFormData) => {
      setIsSubmitting(true);

      try {
        const resultStyle = calculateQuizResult(answers);
        const movieResult = getStyleDisplayName(resultStyle);

        const submissionData: QuizSubmissionData = {
          firstName: formData.firstName,
          email: formData.email,
          cabinetChecklistOptIn: formData.cabinetChecklistOptIn,
          quizAnswers: {
            q1: answers.q1,
            q2: answers.q2,
            q3: answers.q3,
            q4: answers.q4,
            q5: answers.q5,
            q6: answers.q6,
            q7: answers.q7,
            q8: answers.q8,
            q9: answers.q9,
            q10: answers.q10,
          },
          resultStyle,
          movieResult,
        };

        await submitQuizToGHL(submissionData);

        // Navigate to results page
        router.push(`/quiz/results/${resultStyle}`);
      } catch (error) {
        console.error("Error submitting quiz:", error);
        setIsSubmitting(false);
      }
    },
    [answers, router]
  );

  return (
    <div className="min-h-screen bg-neutral-50 pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatePresence mode="wait">
          {step === "intro" && (
            <motion.div
              key="intro"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <QuizIntro onStart={handleStart} />
            </motion.div>
          )}

          {step === "questions" && (
            <motion.div
              key={`question-${currentQuestion}`}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4 }}
            >
              <QuizProgress
                current={currentQuestion + 1}
                total={quizQuestions.length}
              />
              <QuizQuestion
                question={quizQuestions[currentQuestion]}
                selectedAnswer={
                  answers[
                    quizQuestions[currentQuestion].id as keyof QuizAnswers
                  ]
                }
                onAnswer={handleAnswer}
                onBack={handleBack}
                isFirst={currentQuestion === 0}
              />
            </motion.div>
          )}

          {step === "lead-form" && (
            <motion.div
              key="lead-form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <QuizLeadForm 
                onSubmit={handleSubmit} 
                onBack={() => setStep("questions")} 
                isSubmitting={isSubmitting} 
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
