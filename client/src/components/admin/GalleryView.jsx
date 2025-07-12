import React from 'react'

// This component receives selectedClient as a prop
const GalleryView = ({selectedClient}) => {
  return(
    <div>
      <h3>Gallery</h3>
      {/* Show which client is selected */}
      <p><strong>Selected Client:</strong> {selectedClient || 'None selected'}</p>
      {/* Placeholder message or real data later */}
      {selectedClient ? (
        <p>(Gallery images for {selectedClient} would go here)</p>
      ) : (
        <p>Please select a client to view their gallery.</p>
      )}
    </div>

  );
};
export default GalleryView;