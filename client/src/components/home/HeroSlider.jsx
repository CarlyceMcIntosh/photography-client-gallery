import React, { useState } from 'react';
import '../../styles/HeroSlider.css'; // Keep your styling separate and organized

function HeroSlider() {
  // Store all slide content in one array (cleaner + scalable)
  const slides = [
    {
      subtitle: 'Special Occasions Photos',
      title: 'Every Moment, Beautifully Captured',
    },
    {
      subtitle: 'Prom Photos',
      title: 'Glamour, Style, and Unforgettable Nights',
    },
    {
      subtitle: 'Graduation Photos',
      title: 'Celebrate Your Success With Stunning Portraits',
    },
  ];

  // Track the index of the current slide
  const [currentSlide, setCurrentSlide] = useState(0);

  // Show next slide (loop back to first after last)
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  // Show previous slide (loop from first to last)
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="hero-slider">
      <div className="slide-underlay">
        <div className="slide-container"
          style={{
          backgroundImage: `url(${slides[currentSlide].image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',}}>

          <div className="slide-overlay">
            <div className="slide-text">
              <h5 className="subtitle">{slides[currentSlide].subtitle}</h5>
              <h1 className="title">{slides[currentSlide].title}</h1>
            </div>

            <div className="hero-navigation">
              <button className="arrow left" onClick={prevSlide}>&lt;</button>
                <span className="slide-counter">
                  {currentSlide + 1} / {slides.length}
                  </span>
              <button className="arrow right" onClick={nextSlide}>&gt;</button>
            </div>
          </div>
        </div>
      </div>

    </section>

  );
}

export default HeroSlider;
