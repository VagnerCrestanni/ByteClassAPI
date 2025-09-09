import { defineConfig } from 'drizzle-kit';
import dotenv from 'dotenv';

// carrega variáveis do .env
dotenv.config();

if (!process.env.DATABASE_URL) {
  throw new Error('the DATABASE_URL env is required.');
}

export default defineConfig({
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DATABASE_URL,
  },
  out: './drizzle',
  schema: './src/database/schema.ts',
});
