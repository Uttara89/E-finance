const express = require('express');
const cors = require('cors');
const { configDotenv } = require('dotenv');
configDotenv();
const app = express();
const supabase = require('./config/db.config');

app.use(cors());
app.use(express.json());    

app.get('/api/data', async (req, res) => {
  console.log(`reached here`);
  
  const { data, error } = await supabase
    .from('users')
    .select('*');

  console.log('Data:', data);
  console.log('Error:', error);

  if (error) {
      console.error('Error:', error.message);
      return res.status(500).json({ error: error.message });
  }

  res.json(data);
});

const PORT = process.env.PORT || 5000;
// ,ade changes to the server.js file to use the PORT variable from .env file
app.listen(PORT, () =>{
    console.log(`Server is running on port ${PORT}`);
})