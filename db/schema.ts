import { mysqlTable, mysqlSchema, AnyMySqlColumn, index, primaryKey, int, date, unique, varchar } from "drizzle-orm/mysql-core"
import { sql } from "drizzle-orm"
import { createInsertSchema, createSelectSchema } from "drizzle-zod";


export const trips = mysqlTable("trips", {
	id: int("id").autoincrement().notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	startDate: date("start_date", { mode: 'string' }).notNull(),
	// you can use { mode: 'date' }, if you want to have Date as type for this column
	endDate: date("end_date", { mode: 'string' }).notNull(),
	userId: int("user_id").notNull(),
},
(table) => {
	return {
		userIdIdx: index("user_id_idx").on(table.userId),
		tripsId: primaryKey(table.id),
	}
});

export const users = mysqlTable("users", {
	id: int("id").autoincrement().notNull(),
	email: varchar("email", { length: 255 }).notNull(),
},
(table) => {
	return {
		usersId: primaryKey(table.id),
		email: unique("email").on(table.email),
	}
});

export const insertUserSchema = createInsertSchema(users);
export const selectUserSchema = createSelectSchema(users);
