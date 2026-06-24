import { z } from "zod";
import { normalizeRuPhone } from "@/shared/phone";

export const createLeadSchema = z.object({
  phone: z
    .string()
    .trim()
    .refine((value) => normalizeRuPhone(value) !== null, {
      message: "Введите корректный номер телефона",
    })
    .transform((value) => normalizeRuPhone(value)!),
});

export type CreateLeadInput = z.infer<typeof createLeadSchema>;
