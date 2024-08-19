import { type NextRequest, NextResponse } from "next/server";

import { IS_DEVELOPMENT } from "../../constants"; // Can't import from "~/constants" or "src/constants"

export async function GET(_request: NextRequest) {
  if (IS_DEVELOPMENT) {
    return NextResponse.json({ data: "development response data" });
  }

  return NextResponse.json({ data: "response data" });
}
