import { NextResponse } from "next/server";

const items = [
  { id: "item_1", title: "Sample item A", updatedAt: new Date().toISOString() },
  { id: "item_2", title: "Sample item B", updatedAt: new Date().toISOString() },
];

export async function GET() {
  return NextResponse.json(items);
}
