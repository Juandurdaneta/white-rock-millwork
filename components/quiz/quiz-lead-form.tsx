"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { leadFormSchema, LeadFormData } from "@/lib/validations";
import Button from "@/components/ui/button";
import Input from "@/components/ui/input";
import Select from "@/components/ui/select";
import { ArrowLeft, ArrowRight, Lock, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

interface QuizLeadFormProps {
  onSubmit: (data: LeadFormData) => Promise<void>;
  onBack: () => void;
  isSubmitting: boolean;
}

const timelineOptions = [
  { value: "within-3-months", label: "Within 3 months" },
  { value: "3-6-months", label: "3-6 months" },
  { value: "6-12-months", label: "6-12 months" },
  { value: "just-researching", label: "Just researching" },
];

export default function QuizLeadForm({
  onSubmit,
  onBack,
  isSubmitting,
}: QuizLeadFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LeadFormData>({
    resolver: zodResolver(leadFormSchema),
    defaultValues: {
      timeline: "within-3-months",
    },
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-lg mx-auto"
    >
      {/* Back Button */}
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-neutral-500 hover:text-primary-900 transition-colors mb-8"
      >
        <ArrowLeft className="w-4 h-4" />
        <span className="font-body text-small">Back to questions</span>
      </button>

      {/* Header */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 text-accent-500 mb-4">
          <Sparkles className="w-5 h-5" />
          <span className="font-body font-medium tracking-wide uppercase text-small">
            Results Ready
          </span>
        </div>

        <h2 className="font-display text-display-md text-primary-950 mb-4">
          Your personalized results are ready!
        </h2>

        <p className="font-body text-body-lg text-primary-700">
          Where should we send your Cabinet Style Guide?
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Input
            label="First Name"
            {...register("firstName")}
            error={errors.firstName?.message}
            placeholder="John"
            required
          />

          <Input
            label="Last Name"
            {...register("lastName")}
            error={errors.lastName?.message}
            placeholder="Smith"
            required
          />
        </div>

        <Input
          label="Email"
          type="email"
          {...register("email")}
          error={errors.email?.message}
          placeholder="john@example.com"
          required
        />

        <Input
          label="Phone"
          type="tel"
          {...register("phone")}
          error={errors.phone?.message}
          placeholder="(830) 555-1234"
          required
        />

        <Input
          label="Zip Code"
          {...register("zipCode")}
          error={errors.zipCode?.message}
          placeholder="78606"
          required
        />

        <Select
          label="When are you planning your cabinet project?"
          {...register("timeline")}
          error={errors.timeline?.message}
          options={timelineOptions}
          required
        />

        {/* Submit Button */}
        <div className="pt-4">
          <Button
            type="submit"
            variant="primary"
            size="lg"
            className="w-full group"
            isLoading={isSubmitting}
          >
            Get My Results
            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>

        {/* Privacy Note */}
        <div className="flex items-center justify-center gap-2 text-neutral-500">
          <Lock className="w-3.5 h-3.5" />
          <span className="font-body text-small">
            We respect your privacy. Your information is never shared.
          </span>
        </div>
      </form>

      {/* Value Reminder */}
      <div className="mt-10 p-6 bg-neutral-100 border-l-4 border-accent-500">
        <h3 className="font-display text-heading-md text-primary-900 mb-3">
          Your Style Guide includes:
        </h3>
        <ul className="space-y-2">
          <li className="flex items-start gap-3">
            <span className="text-accent-500 font-semibold">✓</span>
            <span className="font-body text-body text-primary-700">
              Your personalized cabinet style profile
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-accent-500 font-semibold">✓</span>
            <span className="font-body text-body text-primary-700">
              Door styles & finishes matched to you
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-accent-500 font-semibold">✓</span>
            <span className="font-body text-body text-primary-700">
              Color palette recommendations
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-accent-500 font-semibold">✓</span>
            <span className="font-body text-body text-primary-700">
              Common mistakes to avoid
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-accent-500 font-semibold">✓</span>
            <span className="font-body text-body text-primary-700">
              BONUS: Cabinet Quality Checklist
            </span>
          </li>
        </ul>
      </div>
    </motion.div>
  );
}
