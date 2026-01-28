import { z } from "zod";

export const leadFormSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Please enter a valid email"),
  phone: z
    .string()
    .min(10, "Please enter a valid phone number")
    .regex(/^[\d\s\-\(\)\+]+$/, "Please enter a valid phone number"),
  zipCode: z
    .string()
    .min(5, "Please enter a valid zip code")
    .regex(/^\d{5}(-\d{4})?$/, "Please enter a valid zip code"),
  timeline: z.string().min(1, "Please select a timeline"),
});

export const contactFormSchema = leadFormSchema.extend({
  projectType: z.string().min(1, "Please select a project type"),
  message: z.string().optional(),
  howHeard: z.string().optional(),
});

export type LeadFormData = z.infer<typeof leadFormSchema>;
export type ContactFormData = z.infer<typeof contactFormSchema>;
