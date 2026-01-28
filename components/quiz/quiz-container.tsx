"use client";

import { useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import QuizIntro from "./quiz-intro";
import QuizQuestion from "./quiz-question";
import QuizProgress from "./quiz-progress";
import QuizLeadForm from "./quiz-lead-form";
import { quizQuestions } from "@/data/quiz-questions";
import { calculateQuizResult, QuizAnswers } from "@/lib/quiz-logic";
import { submitQuizToGHL, QuizSubmissionData } from "@/lib/ghl";
import { LeadFormData } from "@/lib/validations";

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
    async (formData: LeadFormData) => {
      setIsSubmitting(true);

      try {
        const resultStyle = calculateQuizResult(answers);

        const submissionData: QuizSubmissionData = {
          ...formData,
          quizAnswers: {
            q1_movie: answers.q1,
            q2_vacation: answers.q2,
            q3_hosting: answers.q3,
            q4_decisions: answers.q4,
            q5_details: answers.q5,
          },
          resultStyle,
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
