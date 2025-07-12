import React, { useState } from 'react';
import axios from 'axios'; // Axios is used to make HTTP requests

const UploadForm = ({ selectedClient }) => {
  const [files, setFiles] = useState([]);           // Holds selected files
  const [status, setStatus] = useState('');          // Status message (success or error)

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page refresh

    if (!selectedClient || files.length === 0) {
      setStatus('Please select a client and at least one file.');
      return;
    }

    // Create a FormData object to send files in "multipart/form-data" format
    const formData = new FormData();
    formData.append('photo', files[0]); // Add the first file — backend handles one photo for now

    try {
      // Send POST request to your backend API
      const response = await axios.post('http://localhost:5001/api/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      // If upload is successful, show success message and file URL
      setStatus(`✅ Upload successful! Image URL: ${response.data.url}`);
    } catch (error) {
      console.error('❌ Upload error:', error);
      setStatus(`❌ Upload failed: ${error.response?.data?.error || error.message}`);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <p><strong>Selected Client:</strong> {selectedClient || 'None selected'}</p>

      {/* File Input */}
      <div style={{ marginBottom: '1rem' }}>
        <label>Upload Photo:</label>
        <br />
        <input
          type="file"
          onChange={(e) => setFiles(e.target.files)}
          required
        />
      </div>

      {/* Submit Button */}
      <button type="submit" disabled={!selectedClient}>
        Upload
      </button>

      {/* Status Message */}
      {status && (
        <p style={{ marginTop: '1rem' }}>{status}</p>
      )}
    </form>
  );
};

export default UploadForm;
