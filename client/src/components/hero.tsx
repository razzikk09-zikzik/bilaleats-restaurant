import { ChevronDown } from 'lucide-react';
import { useEffect, useState } from 'react';
import logoImage from '@assets/cropped_circle_image_1759337596200.png';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="wood-texture min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <img
            src={logoImage}
            alt="Mount Road Bilal Logo"
            className="w-32 h-32 mx-auto mb-6 rounded-full"
          />
        </div>
        <h1
          className={`text-5xl md:text-7xl font-poppins font-bold text-white mb-4 transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          Mount Road Bilal
        </h1>
        <p
          className={`text-2xl md:text-3xl text-brand-light-brown font-poppins font-light mb-8 transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          Authentic Kebabs & Biriyani Since 1985
        </p>
        <p
          className={`text-lg text-white mb-10 max-w-2xl mx-auto transition-all duration-1000 delay-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          Experience the rich flavors of traditional Indian cuisine crafted with love and
          served with passion
        </p>
        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-800 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <button
            onClick={() => scrollToSection('menu')}
            className="btn-hover bg-white text-brand-brown px-8 py-4 rounded-full font-poppins font-semibold text-lg"
            data-testid="button-view-menu"
          >
            View Menu
          </button>
          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-hover bg-brand-light-brown text-white px-8 py-4 rounded-full font-poppins font-semibold text-lg inline-block"
            data-testid="button-order-now"
          >
            Order Now
          </a>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
        <button
          onClick={() => scrollToSection('about')}
          className="text-white text-4xl"
          data-testid="button-scroll-down"
        >
          <ChevronDown />
        </button>
      </div>
    </section>
  );
}
