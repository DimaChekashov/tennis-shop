import { revalidateTag } from "next/cache";
import { NextResponse } from "next/server";

export function GET() {
  revalidateTag("fetchTopTenRackets");

  return NextResponse.json({
    status: 200,
    revalidated: true,
    timestamp: new Date().toISOString(),
  });
}
