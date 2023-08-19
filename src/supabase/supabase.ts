import { createClient } from '@supabase/supabase-js';

const supabaseURL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

const SupabaseDB = createClient(supabaseURL as string, supabaseKey as string);

export default SupabaseDB;


