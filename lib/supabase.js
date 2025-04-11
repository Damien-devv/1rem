import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://fvdvfkrzpvrdxylxzieq.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ2ZHZma3J6cHZyZHh5bHh6aWVxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQzODkxMDUsImV4cCI6MjA1OTk2NTEwNX0.lYWEsa8JUIQz1qYiAxDGW9h2CwLW60Pk1v3ybPOCQcI'

export const supabase = createClient(supabaseUrl, supabaseKey)
