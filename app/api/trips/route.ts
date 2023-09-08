import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db/dbConnection";
import { insertUserSchema, users, trips } from "@/db/schema";
import z from "zod";

export async function GET() {
  const allTrips = await db.select().from(trips);
  return NextResponse.json(allTrips)
}

export async function POST(request: NextRequest) {
  try {
    const requestData = insertUserSchema.parse(await request.json())
    const newUser = await db.insert(users).values({email: requestData.email})
    return NextResponse.json(newUser);
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
