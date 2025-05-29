const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');

// Example: get user preferences
router.get('/preferences', authMiddleware, (req, res) => {
  // For now, just respond with a sample object or fetch from DB
  res.json({
    userId: req.userId,
    preferences: {
      categories: ['technology', 'sports'],
      language: 'en'
    }
  });
});

// Example: save/update user preferences
router.post('/preferences', authMiddleware, (req, res) => {
  // You would save preferences to DB here
  const preferences = req.body;
  // For now, just echo back
  res.json({
    userId: req.userId,
    savedPreferences: preferences,
    message: 'Preferences saved successfully'
  });
});

module.exports = router;
