/**
 * Environment variables.
 * Exporting destructured `process.env` does not work in Next.js without hacking:
 * @see https://nextjs.org/docs/api-reference/next.config.js/environment-variables
 * @see https://github.com/vercel/next.js/issues/15574
 */

export const NEXT_PUBLIC_SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!
export const NEXT_PUBLIC_SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
export const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY!
export const NEXT_PUBLIC_STEPZEN_KEY = process.env.NEXT_PUBLIC_STEPZEN_KEY!
export const REVALIDATE_SECRET = process.env.REVALIDATE_SECRET
export const NEXT_PUBLIC_API_URL = process.env.NEXT_PUBLIC_API_URL
