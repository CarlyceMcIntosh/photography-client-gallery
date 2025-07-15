//protected route
const express = require('express');
const router = express.Router();
const authenticateToken = require('../middleware/authMiddleware');
const Gallery = require('./models/Gallery'); // Make sure this is at the top if not already

// Example route for testing token protection
router.get('/private', authenticateToken, (req, res) => {
  res.json({
    message: `Hello, user ${req.user.userId}, role: ${req.user.role}. This is your private gallery.`,
  });
});

// Route: GET /api/gallery/my-gallery
// Description: Get the gallery of the logged-in client
router.get('/my-gallery', authenticateToken, async (req, res) => {
  try {
    // Look for a gallery in the database that belongs to the current user
    const gallery = await Gallery.findOne({ clientId: req.user.userId });

    if (!gallery) {
      return res.status(404).json({ message: 'No gallery found for this user.' });
    }

    // Send back the gallery data
    res.json(gallery);
  } catch (error) {
    console.error('Failed to fetch gallery:', error);
    res.status(500).json({ error: 'Server error' });
  }
});


module.exports = router;

