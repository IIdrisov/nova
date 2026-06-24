import { env } from "@/shared/env";

const NOTION_VERSION = "2022-06-28";

interface CreateLeadInput {
  phone: string;
  source?: string;
}

export async function createLeadInNotion({
  phone,
  source = "nova-landing",
}: CreateLeadInput): Promise<void> {
  const response = await fetch("https://api.notion.com/v1/pages", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${env.notionApiKey()}`,
      "Notion-Version": NOTION_VERSION,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      parent: {
        database_id: env.notionDatabaseId(),
      },
      properties: {
        Name: {
          title: [{ text: { content: phone } }],
        },
        Телефон: {
          phone_number: phone,
        },
        Источник: {
          rich_text: [{ text: { content: source } }],
        },
      },
    }),
  });

  if (!response.ok) {
    const errorBody = await response.text();
    throw new Error(`Notion API error: ${response.status} ${errorBody}`);
  }
}
