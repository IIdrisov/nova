import { z } from "zod";

export const createLeadSchema = z.object({
  phone: z
    .string()
    .trim()
    .min(10, "Введите корректный номер телефона")
    .max(20, "Слишком длинный номер"),
});

export type CreateLeadInput = z.infer<typeof createLeadSchema>;
