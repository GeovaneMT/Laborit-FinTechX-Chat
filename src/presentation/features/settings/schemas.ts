import { z } from "zod";

export const settingsFormSchema = z.object({
  displayName: z.string().min(1),
});
