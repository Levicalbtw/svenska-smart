import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://qiyxilczdtikbyeglgjn.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFpeXhpbGN6ZHRpa2J5ZWdsZ2puIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzE5NjQ5NTMsImV4cCI6MjA4NzU0MDk1M30.YGVjUEod25fMrchj-5oalPTb8xz1Gb50JvqGNeENGKU'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
