import { z } from "zod";

export const itemSearchSchema = z.object({
  q: z.string().optional(),
});
