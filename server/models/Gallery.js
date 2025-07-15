
const mongoose = require('mongoose');

// Define a schema for the photo gallery
const gallerySchema = new mongoose.Schema({
  clientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // References the User model to know who this gallery belongs to
    required: true,
  },
  photos: [
    {
      url: String,       // The image URL (e.g., from Cloudinary or local storage)
      public_id: String, // Optional: image ID for deletion if using Cloudinary
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now, // Automatically set when the gallery is created
  },
});

// Create the Gallery model using the schema and export it
module.exports = mongoose.model('Gallery', gallerySchema);