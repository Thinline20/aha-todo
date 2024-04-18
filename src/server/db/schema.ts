import {
  bigserial,
  pgTableCreator,
  text,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";
import { number } from "zod";

export const createTable = pgTableCreator((name) => `aha-todo_${name}`);

export const users = createTable("users", {
  id: varchar("id", { length: 255 }).primaryKey(),
  email: text("email").notNull(),
  password: text("password").notNull(),
  name: varchar("name", { length: 256 }).notNull(),
});

export const sessions = createTable("sessions", {
  id: varchar("id", { length: 255 }).primaryKey(),
  userId: varchar("user_id", { length: 255 })
    .notNull()
    .references(() => users.id),
  expiresAt: timestamp("expires_at", {
    withTimezone: true,
    mode: "date",
  }).notNull(),
});
