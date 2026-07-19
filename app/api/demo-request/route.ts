import { NextRequest, NextResponse } from "next/server";

export type DemoRequestPayload = {
  name: string;
  company: string;
  role: string;
  careType: "domiciliary" | "residential" | "both";
  clientCount: string;
  email: string;
  phone?: string;
  interestedInAddOns: boolean;
};

function isDemoRequestPayload(value: unknown): value is DemoRequestPayload {
  if (typeof value !== "object" || value === null) return false;
  const v = value as Record<string, unknown>;
  return (
    typeof v.name === "string" &&
    typeof v.company === "string" &&
    typeof v.role === "string" &&
    (v.careType === "domiciliary" || v.careType === "residential" || v.careType === "both") &&
    typeof v.clientCount === "string" &&
    typeof v.email === "string" &&
    typeof v.interestedInAddOns === "boolean"
  );
}

export async function POST(request: NextRequest) {
  const body: unknown = await request.json();

  if (!isDemoRequestPayload(body)) {
    return NextResponse.json({ error: "Missing or invalid fields." }, { status: 400 });
  }

  // TODO: connect to email/CRM. For now, log so requests aren't silently dropped.
  console.log("[demo-request]", body);

  return NextResponse.json({ ok: true });
}
