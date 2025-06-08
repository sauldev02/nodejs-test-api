import dotenv from "dotenv";
import { z } from "zod";

dotenv.config();

const envSchema = z.object({
  NODE_ENV: z.enum(["development", "production", "test"]),
  PORT: z.string().regex(/^\d+$/, "PORT debe ser un número").transform(Number),
  DATABASE_URL: z.string().url("DATABASE_URL debe ser una URL válida"),
});

const result = envSchema.safeParse(process.env);

if (!result.success) {
  console.error("Variables de entorno inválidas:", result.error.flatten().fieldErrors);
  process.exit(1);
}

export const env = result.data;
