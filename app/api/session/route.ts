import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET(req: Request) {
  const cookie = req.headers.get("cookie") || "";
  const sessionId = cookie
    .split("; ")
    .find((row) => row.startsWith("session_id="))
    ?.split("=")[1];

  if (!sessionId) return NextResponse.json({ user: null });

  const sessionsPath = path.join(process.cwd(), "app/data/sessions.json");
  const sessions = fs.existsSync(sessionsPath)
    ? JSON.parse(fs.readFileSync(sessionsPath, "utf8"))
    : [];

  const session = sessions.find((s: any) => s.sessionId === sessionId);

  return NextResponse.json({ user: session || null });
}
