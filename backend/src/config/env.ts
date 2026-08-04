import dotenv from 'dotenv';
import { z } from 'zod';

dotenv.config();

const envSchema = z.object({
  PORT: z.string().default('5000').transform(val => parseInt(val, 10)),
  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
  DATABASE_URL: z.string().default('postgresql://postgres:password@db.lpnfwludlkygysxtohkw.supabase.co:5432/postgres'),
  DIRECT_URL: z.string().optional(),
  SUPABASE_URL: z.string().default('https://lpnfwludlkygysxtohkw.supabase.co'),
  SUPABASE_ANON_KEY: z.string().optional(),
  SUPABASE_SERVICE_ROLE_KEY: z.string().optional(),
  
  // JWT & Auth Settings
  JWT_SECRET: z.string().min(16).default('tanush-fitness-super-secret-jwt-key-32chars'),
  JWT_EXPIRES_IN: z.string().default('7d'),
  ACCESS_TOKEN_SECRET: z.string().min(16).default('tanush-fitness-access-token-secret-32chars-min'),
  REFRESH_TOKEN_SECRET: z.string().min(16).default('tanush-fitness-refresh-token-secret-32chars-min'),
  ACCESS_TOKEN_EXPIRES_IN: z.string().default('15m'),
  REFRESH_TOKEN_EXPIRES_IN: z.string().default('30d'),
  BCRYPT_ROUNDS: z.string().default('12').transform(val => parseInt(val, 10)),
  COOKIE_SECRET: z.string().default('tanush-fitness-cookie-secret-key-32chars'),
  FRONTEND_URL: z.string().default('http://localhost:5173'),

  CORS_ORIGIN: z.string().default('*'),
  CLOUDINARY_CLOUD_NAME: z.string().optional(),
  CLOUDINARY_API_KEY: z.string().optional(),
  CLOUDINARY_API_SECRET: z.string().optional(),
  RESEND_API_KEY: z.string().optional(),
  SENDER_EMAIL: z.string().optional().default('notifications@tanushfitness.com'),
});

const _env = envSchema.safeParse(process.env);

if (!_env.success) {
  console.error('❌ Invalid Environment Variables Configuration:', _env.error.format());
  throw new Error('Invalid Environment Variables Configuration');
}

export const env = _env.data;
