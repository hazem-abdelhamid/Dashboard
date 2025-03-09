import * as z from "zod";

export const editFormSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name cannot exceed 50 characters"),
  company: z
    .string()
    .min(1, "Company name must be at least 1 character")
    .max(50, "Company name cannot exceed 50 characters"),
  phone: z
    .string()
    .min(10, { message: "Must be a valid mobile number" })
    .max(14, { message: "Must be a valid mobile number" }),
  email: z.string().email("Email must be valid").optional().or(z.literal("")),
  country: z
    .string()
    .min(2, "Country must be at least 2 character")
    .max(50, "Country cannot exceed 50 characters")
    .refine((value) => !/^\d+$/.test(value), {
      message: "Country name cannot contain only numbers",
    }),
});

export type editFormValues = z.infer<typeof editFormSchema>;
