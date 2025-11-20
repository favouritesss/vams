import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import crypto from "crypto";

export async function POST(req: Request) {
  const { email, password, userType } = await req.json();

  const filePath = path.join(process.cwd(), "app/data/users.json");
  const users = fs.existsSync(filePath)
    ? JSON.parse(fs.readFileSync(filePath, "utf8"))
    : [];

  const user = users.find(
    (u: any) => u.email === email && u.password === password && u.userType === userType
  );

  if (!user) {
    return NextResponse.json(
      { success: false, message: "Invalid credentials" },
      { status: 401 }
    );
  }

  // Create session
  const sessionId = crypto.randomUUID();
  const sessionsPath = path.join(process.cwd(), "app/data/sessions.json");
  const sessions = fs.existsSync(sessionsPath)
    ? JSON.parse(fs.readFileSync(sessionsPath, "utf8"))
    : [];

  sessions.push({ sessionId, email: user.email, name: user.name, userType: user.userType });
  fs.writeFileSync(sessionsPath, JSON.stringify(sessions, null, 2));

  const response = NextResponse.json({
    success: true,
    redirect: `/${user.userType}`,
  });

  response.cookies.set("session_id", sessionId, {
    httpOnly: true,
    path: "/",
    sameSite: "strict",
    secure: process.env.NODE_ENV === "production",
  });

  return response;
}
