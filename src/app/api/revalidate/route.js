import { NextResponse } from "next/server";

export async function GET() {
  // TODO: Add your own revalidation logic here
  return NextResponse.json({ revalidated: true, now: Date.now() });
}
