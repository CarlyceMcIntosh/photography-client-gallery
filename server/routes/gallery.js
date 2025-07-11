//protected route
const express = require('express');
const router = express.Router();
const authenticateToken = require('../middleware/authMiddleware');

// Example route for testing token protection
router.get('/private', authenticateToken, (req, res) => {
  res.json({
    message: `Hello, user ${req.user.userId}, role: ${req.user.role}. This is your private gallery.`,
  });
});

module.exports = router;

