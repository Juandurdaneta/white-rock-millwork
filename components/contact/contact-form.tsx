"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import { contactFormSchema, ContactFormData } from "@/lib/validations";
import { submitContactForm } from "@/lib/ghl";
import Input from "@/components/ui/input";
import Select from "@/components/ui/select";
import Button from "@/components/ui/button";

interface ContactFormProps {
  type?: "homeowner" | "professional";
}

const projectTypeOptions = [
  { value: "", label: "Select project type" },
  { value: "kitchen", label: "Kitchen" },
  { value: "bathroom", label: "Bathroom" },
  { value: "closet", label: "Closet" },
  { value: "pantry", label: "Pantry" },
  { value: "laundry", label: "Laundry Room" },
  { value: "office", label: "Home Office" },
  { value: "other", label: "Other" },
];

const timelineOptions = [
  { value: "", label: "Select timeline" },
  { value: "within-3-months", label: "Within 3 months" },
  { value: "3-6-months", label: "3-6 months" },
  { value: "6-12-months", label: "6-12 months" },
  { value: "just-researching", label: "Just researching" },
];

const howHeardOptions = [
  { value: "", label: "How did you hear about us?" },
  { value: "google", label: "Google Search" },
  { value: "referral", label: "Friend/Family Referral" },
  { value: "social-media", label: "Social Media" },
  { value: "houzz", label: "Houzz" },
  { value: "home-show", label: "Home Show/Event" },
  { value: "other", label: "Other" },
];

export default function ContactForm({ type = "homeowner" }: ContactFormProps) {
  const [submitStatus, setSubmitStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      zipCode: "",
      projectType: "",
      timeline: "",
      message: "",
      howHeard: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setSubmitStatus("loading");
    setErrorMessage("");

    try {
      const result = await submitContactForm({
        ...data,
        contactType: type,
      });

      if (result.success) {
        setSubmitStatus("success");
        reset();
      } else {
        throw new Error(result.message || "Failed to submit form");
      }
    } catch (error) {
      setSubmitStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "Something went wrong. Please try again."
      );
    }
  };

  if (submitStatus === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-12"
      >
        <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-6" />
        <h3 className="font-display text-heading-lg text-primary-900 mb-4">
          Thank You!
        </h3>
        <p className="font-body text-body text-primary-600 max-w-md mx-auto mb-6">
          We&apos;ve received your message and will be in touch within 24 hours 
          to discuss your project.
        </p>
        <button
          onClick={() => setSubmitStatus("idle")}
          className="font-body text-small text-accent-500 hover:text-accent-600 underline"
        >
          Send another message
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Name Fields */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <Input
          label="First Name"
          placeholder="John"
          error={errors.firstName?.message}
          {...register("firstName")}
        />
        <Input
          label="Last Name"
          placeholder="Smith"
          error={errors.lastName?.message}
          {...register("lastName")}
        />
      </div>

      {/* Contact Fields */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <Input
          label="Email"
          type="email"
          placeholder="john@example.com"
          error={errors.email?.message}
          {...register("email")}
        />
        <Input
          label="Phone"
          type="tel"
          placeholder="(830) 555-1234"
          error={errors.phone?.message}
          {...register("phone")}
        />
      </div>

      {/* Zip Code */}
      <Input
        label="Zip Code"
        placeholder="78606"
        error={errors.zipCode?.message}
        {...register("zipCode")}
      />

      {/* Project Details */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <Select
          label="Project Type"
          options={projectTypeOptions}
          error={errors.projectType?.message}
          {...register("projectType")}
        />
        <Select
          label="Timeline"
          options={timelineOptions}
          error={errors.timeline?.message}
          {...register("timeline")}
        />
      </div>

      {/* How Heard */}
      <Select
        label="How did you hear about us?"
        options={howHeardOptions}
        error={errors.howHeard?.message}
        {...register("howHeard")}
      />

      {/* Message */}
      <div>
        <label className="block font-body text-small text-primary-700 mb-2">
          Message (Optional)
        </label>
        <textarea
          placeholder="Tell us about your project vision..."
          rows={4}
          className="w-full px-4 py-3 border border-neutral-300 bg-white font-body text-body text-primary-900 placeholder:text-neutral-400 focus:outline-none focus:border-accent-500 focus:ring-1 focus:ring-accent-500 transition-colors resize-none rounded-lg"
          {...register("message")}
        />
      </div>

      {/* Error Message */}
      {submitStatus === "error" && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-3 p-4 bg-red-50 border border-red-200 rounded-lg"
        >
          <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
          <p className="font-body text-small text-red-700">{errorMessage}</p>
        </motion.div>
      )}

      {/* Submit Button */}
      <Button
        type="submit"
        variant="primary"
        size="lg"
        className="w-full"
        disabled={submitStatus === "loading"}
      >
        {submitStatus === "loading" ? (
          <>
            <svg
              className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            Sending...
          </>
        ) : (
          <>
            <Send className="w-4 h-4 mr-2" />
            Send Message
          </>
        )}
      </Button>

      {/* Privacy Note */}
      <p className="font-body text-xs text-neutral-500 text-center">
        We respect your privacy. Your information is never shared or sold.
      </p>
    </form>
  );
}
