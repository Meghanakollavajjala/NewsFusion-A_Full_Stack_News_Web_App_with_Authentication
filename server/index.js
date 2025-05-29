const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const authRoutes = require('./routes/auth'); // ⬅️ New line
const userRoutes = require('./routes/user');
const newsRoutes = require('./routes/news');
const app = express();
app.use(express.json());
app.use(cors());

app.use('/api/auth', authRoutes); // ⬅️ Mount the auth routes
app.use('/api/user', userRoutes);
app.use('/api/news', newsRoutes);

// Sample test route
app.get('/', (req, res) => {
  res.send("NewsFusion Backend is working!");
});

// Connect to MongoDB
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
})
.catch(err => console.log("❌ MongoDB connection error:", err));
