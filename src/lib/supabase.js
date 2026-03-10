import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://vvatvfctvzqkruokbunp.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ2YXR2ZmN0dnpxa3J1b2tidW5wIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzMxMDMwMDcsImV4cCI6MjA4ODY3OTAwN30.PNxmRkPewq8GuTyA0Sa29RDP1NO-Qg1kWA6dG5H4r1Q'

export const supabase = createClient(supabaseUrl, supabaseKey)
