import React from 'react';
import Navbar from '../components/home/Navbar';
import HeroSlider from '../components/home/HeroSlider';
import About from '../components/home/About';
import GalleryPreview from '../components/home/GalleryPreview';
import Banner from '../components/home/Banner';
import TestimonialSlider from '../components/home/TestimonialSlider';
import ContactMe from '../components/home/Contact';
import Footer from '../components/home/Footer';
function HomePage() {
  return (
    <div>
      <div>
        <Navbar/>
        <HeroSlider/>
        <About/>
        <GalleryPreview/>
        <Banner/>
        <TestimonialSlider/>
        <ContactMe/> 
        <Footer/>
    
      </div>
      

    </div>
    


  );
}
export default HomePage;
