import { createClient } from "../_libs/supabase__supabase-js.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/supabase-CIK0RTCb.js
var supabaseUrl = "";
var supabaseAnonKey = "";
console.error("Missing VITE_SUPABASE_URL or VITE_SUPABASE_ANON_KEY env variables");
var supabase = createClient(supabaseUrl, supabaseAnonKey);
//#endregion
export { supabase };
