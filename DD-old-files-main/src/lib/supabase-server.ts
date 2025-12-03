import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';

const SUPABASE_URL = "https://cgizicrrzdbzvfniffhw.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNnaXppY3JyemRienZmbmlmZmh3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDYwMzU1NjgsImV4cCI6MjA2MTYxMTU2OH0.eng3nYcSl6Voz7VcYE0P4flgKqlhrw2hf7DPBpG96Cc";

export async function createServerSupabaseClient() {
  const cookieStore = await cookies();
  
  return createServerClient(
    SUPABASE_URL,
    SUPABASE_PUBLISHABLE_KEY,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options)
            );
          } catch {
          }
        },
      },
    }
  );
}
