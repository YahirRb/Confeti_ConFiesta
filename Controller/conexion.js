import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'
const SUPABASE_URL = 'https://ffuouzkyvmxyyywgfrgn.supabase.co';
const SUAPABASE_KEY ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZmdW91emt5dm14eXl5d2dmcmduIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY3OTI3NDU2MCwiZXhwIjoxOTk0ODUwNTYwfQ.ay8tUCzEC3AYYq3FZArW_dZE-HJqvoFgGOAXw0QRQF8';
export const supabase = createClient(SUPABASE_URL,SUAPABASE_KEY);