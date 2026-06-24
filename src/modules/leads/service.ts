import { createLeadInNotion } from "@/infrastructure/notion/create-lead";
import { type CreateLeadInput } from "@/modules/leads/validation";

export async function createLead(input: CreateLeadInput): Promise<void> {
  await createLeadInNotion({ phone: input.phone });
}
