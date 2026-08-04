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
  JWT_SECRET: z.string({ required_error: 'JWT_SECRET is required' }).min(16).default('tanush-fitness-super-secret-jwt-key-32chars'),
  JWT_EXPIRES_IN: z.string().default('7d'),
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
