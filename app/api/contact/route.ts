import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(req: Request) {
  const body = await req.json();

  const filePath = path.join(process.cwd(), "messages.json");

  let messages = [];

  if (fs.existsSync(filePath)) {
    messages = JSON.parse(fs.readFileSync(filePath, "utf-8"));
  }

  messages.push({
    id: Date.now(),
    ...body,
    date: new Date().toISOString()
  });

  fs.writeFileSync(filePath, JSON.stringify(messages, null, 2));

  return NextResponse.json({ success: true, message: "Message saved!" });
}
