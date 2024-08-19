import { type NextRequest, NextResponse } from "next/server";

import { env } from "../../env"; // Can't import from "~/env" or "src/env"

export async function GET(request: NextRequest) {
  if (env.NODE_ENV === "development") {
    return NextResponse.json({ data: "development response data" });
  }

  return NextResponse.json({ data: "response data" });
}
