const cloudinary = require('cloudinary').v2;
const dotenv = require('dotenv');

dotenv.config(); // Load your .env file

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,  // Your cloud name from dashboard
  api_key: process.env.CLOUDINARY_API_KEY,        // Your API key
  api_secret: process.env.CLOUDINARY_API_SECRET,  // Your API secret
});
console.log('🌍 Cloudinary Config:', {
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: 'HIDDEN' // never log secret in full
});


module.exports = cloudinary;
