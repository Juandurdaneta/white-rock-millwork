"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { QuizQuestion as QuizQuestionType } from "@/data/quiz-questions";
import { ArrowLeft, Check } from "lucide-react";

interface QuizQuestionProps {
  question: QuizQuestionType;
  selectedAnswer: string;
  onAnswer: (questionId: string, answerId: string) => void;
  onBack: () => void;
  isFirst: boolean;
}

export default function QuizQuestion({
  question,
  selectedAnswer,
  onAnswer,
  onBack,
  isFirst,
}: QuizQuestionProps) {
  return (
    <div>
      {/* Back Button */}
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-neutral-500 hover:text-primary-900 transition-colors mb-6"
      >
        <ArrowLeft className="w-4 h-4" />
        <span className="font-body text-small">
          {isFirst ? "Back to intro" : "Previous question"}
        </span>
      </button>

      {/* Question */}
      <h2 className="font-display text-display-md text-primary-950 mb-8 text-center">
        {question.question}
      </h2>

      {/* Options */}
      <div className="space-y-3">
        {question.options.map((option, index) => {
          const isSelected = selectedAnswer === option.id;

          return (
            <motion.button
              key={option.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.3 }}
              onClick={() => onAnswer(question.id, option.id)}
              className={cn(
                "w-full text-left p-4 border-2 rounded-lg transition-all duration-300 group",
                isSelected
                  ? "border-accent-500 bg-accent-50"
                  : "border-neutral-200 bg-white hover:border-accent-300 hover:shadow-md"
              )}
            >
              <div className="flex items-center gap-4">
                {/* Letter Indicator */}
                <div
                  className={cn(
                    "w-10 h-10 flex-shrink-0 rounded-full flex items-center justify-center font-display text-lg font-medium transition-colors duration-300",
                    isSelected
                      ? "bg-accent-500 text-white"
                      : "bg-neutral-100 text-neutral-500 group-hover:bg-accent-100 group-hover:text-accent-600"
                  )}
                >
                  {isSelected ? <Check className="w-5 h-5" /> : option.id}
                </div>

                {/* Option Text */}
                <div className="flex-1 min-w-0">
                  <p
                    className={cn(
                      "font-body text-body transition-colors duration-300",
                      isSelected
                        ? "text-accent-900 font-medium"
                        : "text-primary-700 group-hover:text-accent-700"
                    )}
                  >
                    {option.text}
                  </p>
                </div>
              </div>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
