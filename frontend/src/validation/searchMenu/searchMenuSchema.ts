import { z } from "zod";

const requiredStringName = z.string({ required_error: "required" });
export const searchMenuSchema = z.object({
  year: requiredStringName,
  name:requiredStringName,
  doors:requiredStringName,
  seats:requiredStringName,
  power:requiredStringName,
  transmission:requiredStringName,
  fuelType:requiredStringName,
  category:requiredStringName
});

export type createSearchSchema = z.infer<typeof searchMenuSchema>