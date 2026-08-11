// import { createClient } from '@supabase/supabase-js';

// const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
// const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// if (!supabaseUrl || !supabaseAnonKey) {
//   throw new Error("Missing Supabase environment variables!");
// }

// export const supabase = createClient(supabaseUrl, supabaseAnonKey );






// import { createClient } from '@supabase/supabase-js';

// const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
// const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// console.log("SUPABASE URL CHECK:", supabaseUrl); 

// export const supabase = createClient(
//   supabaseUrl || '', 
//   supabaseAnonKey || ''
// );



import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://jscpbyvmtvoqtsrmefth.supabase.co";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpzY3BieXZtdHZvcXRzcm1lZnRoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODMwNjczNjAsImV4cCI6MjA5ODY0MzM2MH0.5urieh_vJQ06yC4k0fydujSwxXkUO9Etw-BxLe_vCRM" ;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);