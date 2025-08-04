import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());

// Simple test endpoint
app.get('/api/test', (req, res) => {
  console.log('Test endpoint hit!');
  res.json({ message: "Backend is working!" });
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
});