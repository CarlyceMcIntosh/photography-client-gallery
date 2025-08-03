// src/pages/ContactPage.jsx
import React, { useState } from 'react';
import Navbar from '../components/home/Navbar';
import Footer from '../components/home/Footer';
import '../styles/ContactPage.css';

function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // ✅ You can later connect this to email backend or email service like EmailJS
    console.log('Form submitted:', formData);
    alert('Your message has been sent!');
  };

  return (
    <>
      <Navbar />
      <section className="contact-page">
        <div className="contact-form-container">
          <h2>Contact the Photographer</h2>
          <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} required />

            <label>Email</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />

            <label>Subject</label>
            <input type="text" name="subject" value={formData.subject} onChange={handleChange} />

            <label>Message</label>
            <textarea name="message" rows="5" value={formData.message} onChange={handleChange} required />

            <button type="submit">Send Message</button>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default ContactPage;
