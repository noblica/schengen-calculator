import { db } from "@/db/dbConnection";
import { users } from "@/db/schema";
import z from "zod";
import { eq } from "drizzle-orm";
import { NextResponse, NextRequest } from "next/server";

export async function DELETE(_: NextRequest, { params }: { params: { id: string } }) {
  const userId = z.number().parse(Number(params.id))
  try {
    await db.delete(users).where(eq(users.id, userId));
    return NextResponse.json({id: userId});
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