const express = require('express');
const router = express.Router();
const axios = require('axios');

const NEWS_API_KEY = process.env.NEWS_API_KEY; // Store your API key in .env for security

// Fetch news by category or query
router.get('/', async (req, res) => {
  try {
    const { category, q } = req.query;

    // Base URL for NewsAPI top headlines
    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${NEWS_API_KEY}`;

    if (category) {
      url += `&category=${category}`;
    }

    if (q) {
      url += `&q=${encodeURIComponent(q)}`;
    }

    const response = await axios.get(url);
    res.json(response.data);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: 'Failed to fetch news' });
  }
});

module.exports = router;
