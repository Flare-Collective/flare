"use server";

import { cookies } from "next/headers";
import { createClient } from "~/lib/supabase/server";

export async function logout() {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  await supabase.auth.signOut();
}
