import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db/dbConnection";
import { insertUserSchema, users } from "@/db/schema";
import z from "zod";
import { eq } from "drizzle-orm";

export async function GET() {
  const allUsers = await db.select().from(users);
  return NextResponse.json(allUsers)
}

export async function POST(request: NextRequest) {
  try {
    const requestData = insertUserSchema.parse(await request.json())

    await db.insert(users).values({email: requestData.email})
    const userData = await db.select().from(users).where(eq(users.email, requestData.email)).limit(1)
    return NextResponse.json(userData[0]);

  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.message }, { status: 400 })
    }
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 400 })
    }
    return NextResponse.json({ error: "Something went wrong!"}, {status: 500})
  }
}
