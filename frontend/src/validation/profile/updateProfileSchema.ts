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
  .regex(/^\d{3}\s\d{3}\s\d{2}\s\d{2}$/g, "Telephone number is invalid");

export const updateProfileSchema = z.object({
  name: requiredStringName,
  email: z.string().email(),
  phoneNo: requiredStringPhoneNo,
});

export type createUpdateProfileSchema = z.infer<typeof updateProfileSchema>;
