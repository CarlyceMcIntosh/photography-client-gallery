const express = require('express');
const router = express.Router();
const multer = require('multer');
const cloudinary = require('../config/cloudinary');
const streamifier = require('streamifier');

// Multer setup
const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post('/', upload.single('photo'), async (req, res) => {
  console.log('📩 POST /api/upload received');

  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    console.log('📦 Uploading file:', {
      mimetype: req.file.mimetype,
      size: req.file.size,
    });

    // Streaming upload to Cloudinary
    const streamUpload = () => {
      return new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
          { folder: 'client_galleries' },
          (error, result) => {
            if (result) {
              resolve(result);
            } else {
              reject(error);
            }
          }
        );
        streamifier.createReadStream(req.file.buffer).pipe(stream);
      });
    };

    const result = await streamUpload();

    res.status(200).json({
      message: 'Upload successful',
      url: result.secure_url,
      public_id: result.public_id,
    });
  } catch (err) {
    console.error('❌ Upload error:', err);
    res.status(500).json({ error: err.message || 'Server error during upload' });
  }
});

module.exports = router;
