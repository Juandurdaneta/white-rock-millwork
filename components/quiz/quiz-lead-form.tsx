"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { quizEmailFormSchema, QuizEmailFormData } from "@/lib/validations";
import Button from "@/components/ui/button";
import Input from "@/components/ui/input";
import { ArrowLeft, ArrowRight, Lock, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

interface QuizLeadFormProps {
  onSubmit: (data: QuizEmailFormData) => Promise<void>;
  onBack: () => void;
  isSubmitting: boolean;
}

export default function QuizLeadForm({
  onSubmit,
  onBack,
  isSubmitting,
}: QuizLeadFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<QuizEmailFormData>({
    resolver: zodResolver(quizEmailFormSchema),
    defaultValues: {
      cabinetChecklistOptIn: true,
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
            We Know Your Style
          </span>
        </div>

        <h2 className="font-display text-display-md text-primary-950 mb-4">
          (And It&apos;s Perfect)
        </h2>

        <p className="font-body text-body-lg text-primary-700 mb-4">
          We&apos;ve analyzed your answers and matched you with the iconic movie home that
          reflects your true cabinet style.
        </p>

        <p className="font-body text-body text-primary-900 font-medium">
          Discover which iconic movie matches your style and get your complete design guide.
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="bg-white border border-neutral-200 rounded-lg p-6 shadow-sm">
          <p className="font-body text-body-lg text-primary-900 font-medium mb-6">
            Enter your email to unlock your dream home:
          </p>

          <div className="space-y-4">
            <Input
              label="First Name"
              {...register("firstName")}
              error={errors.firstName?.message}
              placeholder="Your first name"
              required
            />

            <Input
              label="Email"
              type="email"
              {...register("email")}
              error={errors.email?.message}
              placeholder="your@email.com"
              required
            />

            {/* Checkbox */}
            <div className="flex items-start gap-3 pt-2">
              <input
                type="checkbox"
                id="cabinetChecklistOptIn"
                {...register("cabinetChecklistOptIn")}
                className="mt-1 w-4 h-4 text-accent-600 border-neutral-300 rounded focus:ring-accent-500"
              />
              <label
                htmlFor="cabinetChecklistOptIn"
                className="font-body text-body text-primary-700 cursor-pointer"
              >
                Yes! Also send me the Cabinet Quality Checklist (so I know what to look for
                when shopping)
              </label>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="pt-2">
          <Button
            type="submit"
            variant="primary"
            size="lg"
            className="w-full group"
            isLoading={isSubmitting}
          >
            Send Me My Results
            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>

        {/* Privacy Note */}
        <div className="flex items-center justify-center gap-2 text-neutral-500">
          <Lock className="w-3.5 h-3.5" />
          <span className="font-body text-small">
            We respect your inbox. Unsubscribe anytime.
          </span>
        </div>
      </form>
    </motion.div>
  );
}
