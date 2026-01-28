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
      <div className="space-y-4">
        {question.options.map((option, index) => {
          const isSelected = selectedAnswer === option.id;

          return (
            <motion.button
              key={option.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              onClick={() => onAnswer(question.id, option.id)}
              className={cn(
                "w-full text-left p-6 border-2 transition-all duration-300 group",
                isSelected
                  ? "border-accent-500 bg-accent-50"
                  : "border-neutral-200 bg-white hover:border-accent-300 hover:shadow-md"
              )}
            >
              <div className="flex items-start gap-4">
                {/* Option Image Placeholder */}
                <div
                  className={cn(
                    "w-16 h-16 flex-shrink-0 flex items-center justify-center transition-colors duration-300",
                    isSelected
                      ? "bg-accent-100"
                      : "bg-neutral-100 group-hover:bg-accent-50"
                  )}
                >
                  {isSelected ? (
                    <Check className="w-6 h-6 text-accent-500" />
                  ) : (
                    <span className="font-display text-2xl text-neutral-400 group-hover:text-accent-400">
                      {String.fromCharCode(65 + index)}
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h3
                    className={cn(
                      "font-display text-heading-md mb-1 transition-colors duration-300",
                      isSelected
                        ? "text-accent-500"
                        : "text-primary-900 group-hover:text-accent-500"
                    )}
                  >
                    {option.label}
                  </h3>
                  <p className="font-body text-body text-primary-600">
                    {option.description}
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
