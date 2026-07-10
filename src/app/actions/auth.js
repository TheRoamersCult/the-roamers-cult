"use server";

import { createClient } from "@supabase/supabase-js";

// Supabase client initialize karein
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY // Yeh secret key hai, sirf server-side pe use karein
);

export async function signUpUser(formData) {
  const data = Object.fromEntries(formData);
  const { name, email, phone, location, password } = data;

  try {
    // 1. Supabase Auth se user create karo
    const { data: authData, error: authError } = await supabase.auth.signUp({
      email,
      password,
    });

    if (authError) throw authError;

    // 2. "profiles" table mein user ka extra data save karo
    const { error: dbError } = await supabase.from("profiles").insert([
      {
        id: authData.user.id,
        name: name,
        email: email,
        phone: phone,
        location: location,
        created_at: new Date().toISOString(),
      },
    ]);

    if (dbError) throw dbError;

    return { success: true };
  } catch (error) {
    console.error("Supabase Error:", error.message);
    return { success: false, error: error.message };
  }
}