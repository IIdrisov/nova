import { NextResponse } from "next/server";
import { createLead } from "@/modules/leads/service";
import { createLeadSchema } from "@/modules/leads/validation";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = createLeadSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        {
          error: {
            code: "VALIDATION_ERROR",
            message: parsed.error.issues[0]?.message ?? "Некорректные данные",
          },
        },
        { status: 400 },
      );
    }

    await createLead(parsed.data);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Lead creation failed", {
      error: error instanceof Error ? error.message : "Unknown error",
    });

    return NextResponse.json(
      {
        error: {
          code: "INTERNAL_ERROR",
          message: "Не удалось отправить заявку. Попробуйте позже.",
        },
      },
      { status: 500 },
    );
  }
}
