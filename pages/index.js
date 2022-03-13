import { useState } from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar';
import AboutSection from '../components/sections/About';
import HeroSection from '../components/sections/Hero';
import ArtGallerySection from '../components/sections/ArtGallery';
import ContactSection from '../components/sections/Contact';
import Footer from '../components/Footer';

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  }
  return (
    <>
      <Navbar toggle={toggleSidebar} />
      <Sidebar isOpen={isOpen} toggle={toggleSidebar} />
        <HeroSection />
        <AboutSection />
        <ArtGallerySection />
        <ContactSection />
        <Footer />
    </>
  )
}
