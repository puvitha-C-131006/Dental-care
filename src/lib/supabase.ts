import { createClient } from '@supabase/supabase-js';

// WARNING: This is a temporary solution for development.
// For production, use environment variables to keep your keys secure.
const supabaseUrl = "https://ggvhsajcuyafmiiwkgut.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdndmhzYWpjdXlhZm1paXdrZ3V0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTgwNzYzMDYsImV4cCI6MjA3MzY1MjMwNn0.rf0zFN0tznxkq5krYJBZ5-gt2_bWWi3Zkqe92WsBzgI";

if (!supabaseUrl || !supabaseAnonKey) {
  // This check is kept in case the hardcoded values are removed later.
  throw new Error("Supabase URL and Anon Key are required.");
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);