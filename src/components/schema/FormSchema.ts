import * as z from "zod";

export const formSchema = z.object({
  name: z
    .string()
    .min(2, "Name is required")
    .max(50, "Name cannot exceed 50 characters"),
  company: z
    .string()
    .min(1, "Company name is required")
    .max(50, "Company name cannot exceed 50 characters"),
  phone: z
    .string()
    .regex(
      /^01\d{9}$/,
      "Phone number must start with 01 and be 11 digits long."
    ),
  email: z.string().email("Email must be valid"),
  country: z
    .string()
    .min(2, "Country is required")
    .max(50, "Country cannot exceed 50 characters"),
});

export type FormValues = z.infer<typeof formSchema>;
