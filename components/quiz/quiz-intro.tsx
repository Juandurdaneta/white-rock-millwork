"use client";

import Button from "@/components/ui/button";
import Badge from "@/components/ui/badge";
import { ArrowRight, Clock, Sparkles } from "lucide-react";

interface QuizIntroProps {
  onStart: () => void;
}

export default function QuizIntro({ onStart }: QuizIntroProps) {
  return (
    <div className="text-center py-12">
      <Badge variant="gold" className="mb-8">
        <Sparkles className="w-3 h-3 mr-2" />
        Cabinet Style Quiz
      </Badge>

      <h1 className="font-display text-display-lg text-primary-950 mb-6">
        Discover Your{" "}
        <span className="italic text-accent-500">Perfect Cabinet Style</span>
      </h1>

      <p className="font-body text-body-lg text-primary-700 mb-4 max-w-xl mx-auto">
        Answer 5 quick questions to reveal the cabinet aesthetic that matches
        your personality
      </p>

      <div className="flex items-center justify-center gap-2 text-neutral-500 mb-10">
        <Clock className="w-4 h-4" />
        <span className="font-body text-small">Takes about 3 minutes</span>
      </div>

      {/* Decorative Line */}
      <div className="w-px h-12 bg-accent-500 mx-auto mb-10" />

      {/* Preview of what they'll get */}
      <div className="bg-neutral-100 p-6 max-w-md mx-auto mb-10">
        <h3 className="font-body font-medium text-primary-900 mb-4">
          You'll discover:
        </h3>
        <ul className="space-y-2 text-left">
          <li className="flex items-start gap-3">
            <span className="text-accent-500 font-semibold">✓</span>
            <span className="font-body text-body text-primary-700">
              Your true cabinet aesthetic
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-accent-500 font-semibold">✓</span>
            <span className="font-body text-body text-primary-700">
              Door styles & finishes that match you
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-accent-500 font-semibold">✓</span>
            <span className="font-body text-body text-primary-700">
              Color palettes for your home
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-accent-500 font-semibold">✓</span>
            <span className="font-body text-body text-primary-700">
              Common mistakes to avoid
            </span>
          </li>
        </ul>
      </div>

      <Button onClick={onStart} variant="primary" size="lg" className="group">
        Start the Quiz
        <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
      </Button>
    </div>
  );
}
