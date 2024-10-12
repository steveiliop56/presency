import { z } from "zod";

export const FormSchema = z.object({
  state: z.string(),
  details: z.string(),
  largeImageKey: z.string(),
  largeImageText: z.string(),
  smallImageKey: z.string(),
  smallImageText: z.string(),
});
