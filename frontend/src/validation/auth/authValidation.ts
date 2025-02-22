import { z } from "zod";

const requiredStringName = z
  .string({ required_error: "required" })
  .min(3, "min length should be 3")
  .regex(/^[A-Za-z0-9@?!#%çÇğĞıİöÖşŞüÜ,^"\s]*$/, {
    message: "Invalid characters",
  });

const requiredStringPassword = z
  .string({ required_error: "required" })
  .min(3, "min length should be 6")
  .regex(/^[A-Za-z0-9@?!#%çÇğĞıİöÖşŞüÜ,^"\s]*$/, {
    message: "Invalid characters",
  });

const requiredStringPhoneNo = z
  .string({ required_error: "required" })
  .min(11, "min length should be 11")
  .regex(/^\+?[1-9]\d{1,14}$/, {
    message: "Without the leading 0",
  });

export const createFormSchema = z.object({
  name: requiredStringName,
  email: z.string().email(),
  password: requiredStringPassword,
  phoneNo: requiredStringPhoneNo,
});

export type createFormData = z.infer<typeof createFormSchema>;

export const loginFormSchema = z.object({
  email: z.string().email(),
  password: requiredStringPassword,
});

export type createLoginData = z.infer<typeof loginFormSchema>;
