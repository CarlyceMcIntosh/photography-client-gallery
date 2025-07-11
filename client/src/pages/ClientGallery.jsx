import { useEffect, useState } from 'react';
import axios from 'axios';

export default function ClientGallery() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const token = localStorage.getItem('token');

        const res = await axios.get('http://localhost:5000/api/gallery/private', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setImages(res.data.images); // assuming backend sends { images: [...] }
      } catch (err) {
        console.error('Failed to fetch gallery:', err.response?.data?.message);
      }
    };

    fetchGallery();
  }, []);

  return (
    <div>
      <h1>Your Private Gallery</h1>
      {images.length > 0 ? (
        <div className="gallery">
          {images.map((img, idx) => (
            <img key={idx} src={img.url} alt={`Photo ${idx}`} />
          ))}
        </div>
      ) : (
        <p>No images yet.</p>
      )}
    </div>
  );
}

