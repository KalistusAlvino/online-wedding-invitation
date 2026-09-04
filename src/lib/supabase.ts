import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string

export const supabase = createClient(
  supabaseUrl ?? 'https://fgtkusducqyaretrhvub.supabase.co',
  supabaseAnonKey ?? 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZndGt1c2R1Y3F5YXJldHJodnViIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODg1NDA5NTMsImV4cCI6MjEwNDExNjk1M30.INRg_kJfgLKaRXcp8OZsQFW3gRJRSv2tLABxhA3rCgs',
)
