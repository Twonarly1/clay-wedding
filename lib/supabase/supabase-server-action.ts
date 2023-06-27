import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import "server-only";

export const createClient = () =>
  createServerActionClient<Database>({
    cookies,
  });
