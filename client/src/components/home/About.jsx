import React from "react";
import '../../styles/About.css'

function About(){
  return (
    <section id="about-section" className="about-section">
      <div className="about-content">
        <div className="about-image"> 
          <img src="src/assets/images/mike.png" alt="Photographer portrait" className="portrait-img"/>
        </div>


        <div className="about-text">
          <p className="about-subtitle">Get to Know the Woman Behind the Lens</p>
          <h3 className="about-intro"> Hi, I am Crystal McIntosh </h3>
          <div className="about-paragraph">
            <p> I believe that memories are an amazing gift that everyone should cherish. Everyone should have a chance to record their favorite memories and tell the story associated.</p>
          </div>
        </div>
      </div>
    </section>

  )
}
export default About