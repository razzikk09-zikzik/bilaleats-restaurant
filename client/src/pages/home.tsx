import Navbar from '@/components/navbar';
import Hero from '@/components/hero';
import About from '@/components/about';
import Menu from '@/components/menu';
import Branches from '@/components/branches';
import Contact from '@/components/contact';
import Footer from '@/components/footer';
import WhatsAppFloat from '@/components/whatsapp-float';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    // Dynamically load AOS library
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://unpkg.com/aos@2.3.1/dist/aos.css';
    document.head.appendChild(link);

    const script = document.createElement('script');
    script.src = 'https://unpkg.com/aos@2.3.1/dist/aos.js';
    script.onload = () => {
      if (window.AOS) {
        window.AOS.init({
          duration: 800,
          offset: 100,
          once: true,
        });
      }
    };
    document.body.appendChild(script);

    return () => {
      document.head.removeChild(link);
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <Branches />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

// Type declaration for AOS
declare global {
  interface Window {
    AOS?: {
      init: (options?: any) => void;
      refresh: () => void;
      refreshHard: () => void;
    };
  }
}
