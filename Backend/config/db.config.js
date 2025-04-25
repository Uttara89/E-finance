
const { createClient } = require('@supabase/supabase-js');
const { configDotenv } = require('dotenv');
configDotenv();

const supabaseUrl = 'https://sbavygdhjxsnwpragocq.supabase.co'
const supabaseKey = process.env.SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

module.exports  = supabase;