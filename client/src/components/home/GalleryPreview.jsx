import React from "react";
import '../../styles/GalleryPreview.css'

function GalleryPreview(){

  return(
    <section id="gallery-preview" className="gallery-preview-section">
      <div className="gallery-preview-container"> 

        <div className="gallery-preview-card">
          <img src="https://via.placeholder.com/400x500" alt="Special Occasions" className="gallery-preview-image"/>
          <p className="view-gallery-label">VIEW GALLERY</p>
          <h3 className="gallery-category">SPECIAL OCCASIONS</h3>
        </div>
        
        <div className="gallery-preview-card">
          <img src="https://via.placeholder.com/400x500" alt="Prom" className="gallery-preview-image"/>
          <p className="view-gallery-label">VIEW GALLERY</p>
          <h3 className="gallery-category">PROM</h3>
        </div>
      </div>
    </section>


  )


}
export default GalleryPreview;