import { db } from "@/db/dbConnection";
import { users } from "@/db/schema";
import { eq } from "drizzle-orm";

export const ensureUser = async (email: string) => {
    const userAlreadyExists = await db.select().from(users).where(eq(users.email, email)).limit(1)
    if (userAlreadyExists.length > 0) {
      return userAlreadyExists[0];
    }

    await db.insert(users).values({email})
    const userData = await db.select().from(users).where(eq(users.email, email)).limit(1)
    return userData[0];
}