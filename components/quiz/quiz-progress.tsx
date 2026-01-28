"use client";

import { motion } from "framer-motion";

interface QuizProgressProps {
  current: number;
  total: number;
}

export default function QuizProgress({ current, total }: QuizProgressProps) {
  const progress = (current / total) * 100;

  return (
    <div className="mb-8">
      {/* Step indicator */}
      <div className="flex items-center justify-between mb-3">
        <span className="font-body text-small text-neutral-500 uppercase tracking-wider">
          Question {current} of {total}
        </span>
        <span className="font-body text-small text-accent-500 font-medium">
          {Math.round(progress)}% Complete
        </span>
      </div>

      {/* Progress bar */}
      <div className="h-1 bg-neutral-200 overflow-hidden">
        <motion.div
          className="h-full bg-accent-500"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
        />
      </div>
    </div>
  );
}
