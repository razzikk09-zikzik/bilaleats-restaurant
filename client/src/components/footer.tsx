import { SiInstagram, SiFacebook, SiX, SiYoutube } from 'react-icons/si';

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-brand-dark-brown text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* About Column */}
          <div>
            <h3 className="text-2xl font-poppins font-bold mb-4">Mount Road Bilal</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Serving authentic kebabs and biriyani since 1985. Experience the rich flavors of
              tradition.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-poppins font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('home')}
                  className="text-gray-300 hover:text-brand-light-brown transition-colors"
                  data-testid="footer-link-home"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-gray-300 hover:text-brand-light-brown transition-colors"
                  data-testid="footer-link-about"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('menu')}
                  className="text-gray-300 hover:text-brand-light-brown transition-colors"
                  data-testid="footer-link-menu"
                >
                  Menu
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('branches')}
                  className="text-gray-300 hover:text-brand-light-brown transition-colors"
                  data-testid="footer-link-branches"
                >
                  Branches
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-poppins font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>
                <a
                  href="mailto:info@mountroadbilal.com"
                  className="hover:text-brand-light-brown transition-colors"
                  data-testid="footer-email"
                >
                  info@mountroadbilal.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+914412345678"
                  className="hover:text-brand-light-brown transition-colors"
                  data-testid="footer-phone"
                >
                  +91 44 1234 5678
                </a>
              </li>
              <li data-testid="footer-address">123 Mount Road, Chennai</li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-poppins font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-brand-light-brown rounded-full flex items-center justify-center hover:bg-white hover:text-brand-brown transition-colors"
                data-testid="social-instagram"
              >
                <SiInstagram size={20} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-brand-light-brown rounded-full flex items-center justify-center hover:bg-white hover:text-brand-brown transition-colors"
                data-testid="social-facebook"
              >
                <SiFacebook size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-brand-light-brown rounded-full flex items-center justify-center hover:bg-white hover:text-brand-brown transition-colors"
                data-testid="social-twitter"
              >
                <SiX size={20} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-brand-light-brown rounded-full flex items-center justify-center hover:bg-white hover:text-brand-brown transition-colors"
                data-testid="social-youtube"
              >
                <SiYoutube size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-brand-medium-brown pt-8 text-center">
          <p className="text-gray-400 text-sm" data-testid="copyright">
            &copy; 2024 Mount Road Bilal - Kebabs & Biriyani. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
