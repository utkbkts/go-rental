import { z } from "zod";

const requiredStringName = z
  .string({ required_error: "required" })
  .regex(/^[A-Za-z0-9@?!#%çÇğĞıİöÖşŞüÜ,^"\s]*$/, {
    message: "Invalid characters",
  });

export const detailMenuSchema = z.object({
  name: requiredStringName,
  email: z.string().email(),
  phoneNo: requiredStringName,
  bookingDates: z.number(),
  additionalNotes: requiredStringName,
});

export type createDetailSchema = z.infer<typeof detailMenuSchema>;
