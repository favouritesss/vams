import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import crypto from "crypto";

type User = {
  email: string;
  password: string;
  userType: "volunteer" | "organization" | "admin";
  name: string;
};

export async function POST(req: Request) {
  const { email, password, userType, name }: User = await req.json();

  if (!email || !password || !userType || !name) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  const filePath = path.join(process.cwd(), "app/data/users.json");
  const users: User[] = fs.existsSync(filePath)
    ? JSON.parse(fs.readFileSync(filePath, "utf8"))
    : [];

  // Check for duplicate email
  if (users.find((u) => u.email === email)) {
    return NextResponse.json({ error: "Email already exists" }, { status: 409 });
  }

  const newUser: User = { email, password, userType, name };
  users.push(newUser);
  fs.writeFileSync(filePath, JSON.stringify(users, null, 2));

  // Create session
  const sessionId = crypto.randomUUID();
  const sessionsPath = path.join(process.cwd(), "app/data/sessions.json");
  const sessions = fs.existsSync(sessionsPath)
    ? JSON.parse(fs.readFileSync(sessionsPath, "utf8"))
    : [];

  sessions.push({ sessionId, email, name, userType });
  fs.writeFileSync(sessionsPath, JSON.stringify(sessions, null, 2));

  const response = NextResponse.json({
    success: true,
    redirect:
      userType === "admin"
        ? "/admin"
        : userType === "organization"
        ? "/organization"
        : "/volunteer",
  });

  // Set session cookie (just the ID)
  response.cookies.set("session_id", sessionId, {
    httpOnly: true,
    path: "/",
    sameSite: "strict",
    secure: process.env.NODE_ENV === "production",
  });

  return response;
}
