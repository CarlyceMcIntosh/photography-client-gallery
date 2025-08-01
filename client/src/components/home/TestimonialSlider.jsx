import React, { useState } from "react";
import "../../styles/TestimonialSlider.css";

const testimonials = [
  {
    name: "Maria & Gabriel",
    text: "Lorem ipsum dolor sit amet, et amet wisi suspendisse eu vestibulum vel, malesuada magna...",
    image: "https://via.placeholder.com/500x400",
  },
  {
    name: "Luna & Kai",
    text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque...",
    image: "https://via.placeholder.com/500x400",
  },
  {
    name: "Isabella & Eli",
    text: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium...",
    image: "https://via.placeholder.com/500x400",
  },
];

function TestimonialSlider() {
  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const { name, text, image } = testimonials[index];

  return (
    <section className="testimonial-section">
      <div className="testimonial-container">
        <div className="testimonial-content">
          <p className="testimonial-label">Testimonials</p>
          <p className="testimonial-counter">{index + 1} / {testimonials.length}</p>
          <h3 className="testimonial-name">{name}</h3>
          <p className="testimonial-text">{text}</p>
        </div>

        <div className="testimonial-image placeholder-box">
          <div className="placeholder-inner">Photo</div>
        </div>


        <div className="testimonial-arrows">
          <button onClick={prevSlide}>&larr;</button>
          <button onClick={nextSlide}>&rarr;</button>
        </div>
      </div>
    </section>
  );
}

export default TestimonialSlider;
