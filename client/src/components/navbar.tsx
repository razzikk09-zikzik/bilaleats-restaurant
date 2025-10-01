import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logoImage from '@assets/cropped_circle_image_1759337596200.png';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-brand-brown/98 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img
              src={logoImage}
              alt="Mount Road Bilal Logo"
              className="w-12 h-12 rounded-full"
            />
            <span className="text-white font-poppins font-bold text-xl hidden sm:block">
              Mount Road Bilal
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-white hover:text-brand-light-brown transition-colors duration-200 font-medium"
              data-testid="nav-home"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-white hover:text-brand-light-brown transition-colors duration-200 font-medium"
              data-testid="nav-about"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('menu')}
              className="text-white hover:text-brand-light-brown transition-colors duration-200 font-medium"
              data-testid="nav-menu"
            >
              Menu
            </button>
            <button
              onClick={() => scrollToSection('branches')}
              className="text-white hover:text-brand-light-brown transition-colors duration-200 font-medium"
              data-testid="nav-branches"
            >
              Branches
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-white hover:text-brand-light-brown transition-colors duration-200 font-medium"
              data-testid="nav-contact"
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white focus:outline-none"
            data-testid="button-mobile-menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-brand-brown/95 backdrop-blur-sm">
          <div className="px-4 pt-2 pb-4 space-y-2">
            <button
              onClick={() => scrollToSection('home')}
              className="block w-full text-left text-white hover:text-brand-light-brown transition-colors duration-200 py-2 font-medium"
              data-testid="mobile-nav-home"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left text-white hover:text-brand-light-brown transition-colors duration-200 py-2 font-medium"
              data-testid="mobile-nav-about"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('menu')}
              className="block w-full text-left text-white hover:text-brand-light-brown transition-colors duration-200 py-2 font-medium"
              data-testid="mobile-nav-menu"
            >
              Menu
            </button>
            <button
              onClick={() => scrollToSection('branches')}
              className="block w-full text-left text-white hover:text-brand-light-brown transition-colors duration-200 py-2 font-medium"
              data-testid="mobile-nav-branches"
            >
              Branches
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left text-white hover:text-brand-light-brown transition-colors duration-200 py-2 font-medium"
              data-testid="mobile-nav-contact"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
