import { Link } from "react-router-dom";
import { Menu, X, Facebook, Instagram, MessageCircle, Home, Briefcase, Award, Users, Phone, Calculator } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import BackToTop from "@/components/BackToTop";
import CookieNotification from "@/components/CookieNotification";
import Chatbot from "@/components/Chatbot";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation Header */}
      <header className="relative z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Fc8949a9c41674c51b868f14c9f5720b8%2F78846955ca544effb82359542fd12c89?format=webp&width=800"
                alt="AKTOMRADY Agencies Logo"
                className="w-10 h-10 object-contain"
              />
              <div className="flex flex-col">
                <span className="text-xl font-bold text-gray-900 leading-tight">AKTOMRADY</span>
                <span className="text-xs text-gray-500 hidden sm:inline leading-tight">AGENCIES (W.I.G)</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              <Link
                to="/"
                className="group flex items-center space-x-2 px-3 py-2 rounded-lg text-gray-700 hover:text-white transition-all duration-300 hover:bg-gradient-to-r hover:from-brand-cyan hover:to-brand-magenta font-medium"
              >
                <Home size={18} className="group-hover:text-white transition-colors" />
                <span>Home</span>
              </Link>
              <Link
                to="/services"
                className="group flex items-center space-x-2 px-3 py-2 rounded-lg text-gray-700 hover:text-white transition-all duration-300 hover:bg-gradient-to-r hover:from-brand-cyan hover:to-brand-magenta font-medium"
              >
                <Briefcase size={18} className="group-hover:text-white transition-colors" />
                <span>Services</span>
              </Link>
              <Link
                to="/portfolio"
                className="group flex items-center space-x-2 px-3 py-2 rounded-lg text-gray-700 hover:text-white transition-all duration-300 hover:bg-gradient-to-r hover:from-brand-cyan hover:to-brand-magenta font-medium"
              >
                <Award size={18} className="group-hover:text-white transition-colors" />
                <span>Portfolio</span>
              </Link>
              <Link
                to="/about"
                className="group flex items-center space-x-2 px-3 py-2 rounded-lg text-gray-700 hover:text-white transition-all duration-300 hover:bg-gradient-to-r hover:from-brand-cyan hover:to-brand-magenta font-medium"
              >
                <Users size={18} className="group-hover:text-white transition-colors" />
                <span>About</span>
              </Link>
              <Link
                to="/contact"
                className="group flex items-center space-x-2 px-3 py-2 rounded-lg text-gray-700 hover:text-white transition-all duration-300 hover:bg-gradient-to-r hover:from-brand-cyan hover:to-brand-magenta font-medium"
              >
                <Phone size={18} className="group-hover:text-white transition-colors" />
                <span>Contact</span>
              </Link>
              <Button
                className="bg-gradient-to-r from-brand-cyan via-brand-magenta to-brand-yellow hover:from-brand-cyan/90 hover:via-brand-magenta/90 hover:to-brand-yellow/90 text-white font-semibold shadow-lg transform hover:scale-105 transition-all duration-300"
                asChild
              >
                <Link to="/quote" className="flex items-center space-x-2">
                  <Calculator size={18} />
                  <span>Get Quote</span>
                </Link>
              </Button>
            </nav>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md text-gray-700 hover:text-brand-blue hover:bg-gray-100"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200 bg-white/95 backdrop-blur-sm">
              <div className="flex flex-col space-y-2">
                <Link
                  to="/"
                  className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-brand-cyan hover:to-brand-magenta transition-all duration-300 rounded-lg font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Home size={20} />
                  <span>Home</span>
                </Link>
                <Link
                  to="/services"
                  className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-brand-cyan hover:to-brand-magenta transition-all duration-300 rounded-lg font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Briefcase size={20} />
                  <span>Services</span>
                </Link>
                <Link
                  to="/portfolio"
                  className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-brand-cyan hover:to-brand-magenta transition-all duration-300 rounded-lg font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Award size={20} />
                  <span>Portfolio</span>
                </Link>
                <Link
                  to="/about"
                  className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-brand-cyan hover:to-brand-magenta transition-all duration-300 rounded-lg font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Users size={20} />
                  <span>About</span>
                </Link>
                <Link
                  to="/contact"
                  className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-brand-cyan hover:to-brand-magenta transition-all duration-300 rounded-lg font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Phone size={20} />
                  <span>Contact</span>
                </Link>
                <Button
                  className="bg-gradient-to-r from-brand-cyan via-brand-magenta to-brand-yellow hover:from-brand-cyan/90 hover:via-brand-magenta/90 hover:to-brand-yellow/90 w-fit mx-4 text-white font-semibold"
                  asChild
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Link to="/quote" className="flex items-center space-x-2">
                    <Calculator size={18} />
                    <span>Get Quote</span>
                  </Link>
                </Button>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Footer Content */}
          <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="col-span-1 lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Fc8949a9c41674c51b868f14c9f5720b8%2F78846955ca544effb82359542fd12c89?format=webp&width=800"
                  alt="AKTOMRADY Agencies Logo"
                  className="w-10 h-10 object-contain"
                />
                <div className="flex flex-col">
                  <span className="text-xl font-bold leading-tight">AKTOMRADY</span>
                  <span className="text-sm text-gray-400 leading-tight">AGENCIES (W.I.G)</span>
                </div>
              </div>
              <p className="text-gray-300 mb-6 max-w-md">
                Nigeria's trusted printing partner offering premium quality large format prints,
                custom branded items, business materials, and comprehensive printing solutions
                for government agencies, corporations, and individuals.
              </p>
              <div className="space-y-2 text-sm">
                <p className="flex items-center text-gray-300">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Trusted by Lagos State Government
                </p>
                <p className="flex items-center text-gray-300">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Serving Major Banks & Corporations
                </p>
                <p className="flex items-center text-gray-300">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  1000+ Happy Clients Nationwide
                </p>
              </div>
            </div>

            {/* Contact Information */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
              <div className="space-y-4 text-sm">
                <div>
                  <p className="text-gray-400 mb-1">Phone Numbers:</p>
                  <p className="text-white">
                    <a href="tel:+2348029477796" className="hover:text-brand-cyan transition-colors">
                      +234.8029477796
                    </a>
                  </p>
                </div>
                <div>
                  <p className="text-gray-400 mb-1">Email:</p>
                  <p className="text-white">
                    <a href="mailto:info@aktomrady.com" className="hover:text-brand-cyan transition-colors">
                      info@aktomrady.com
                    </a>
                  </p>
                  <p className="text-white">
                    <a href="mailto:aktomradyagencies@yahoo.com" className="hover:text-brand-cyan transition-colors">
                      aktomradyagencies@yahoo.com
                    </a>
                  </p>
                </div>
                <div>
                  <p className="text-gray-400 mb-1">Business Hours:</p>
                  <p className="text-white">Mon-Fri: 8:00 AM - 6:00 PM</p>
                  <p className="text-white">Sat: 9:00 AM - 4:00 PM</p>
                </div>
              </div>
            </div>

            {/* Office Locations */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Our Offices</h3>
              <div className="space-y-4 text-sm">
                <div>
                  <p className="text-gray-400 mb-1">Lagos Office:</p>
                  <p className="text-white">5, Kayode Street, Ogba</p>
                  <p className="text-white">Lagos Mainland, OGBA LAGOS</p>
                  <p className="text-white">Nigeria</p>
                </div>
                <div>
                  <p className="text-gray-400 mb-1">Abuja Office:</p>
                  <p className="text-white text-sm italic">Coming Soon</p>
                </div>
                <div>
                  <p className="text-gray-400 mb-1">Port Harcourt Office:</p>
                  <p className="text-white text-sm italic">Coming Soon</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="py-6 border-t border-gray-800">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div>
                <h4 className="text-sm font-semibold mb-3 text-gray-300">Services</h4>
                <ul className="space-y-2 text-sm">
                  <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">Large Format Prints</Link></li>
                  <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">Business Cards</Link></li>
                  <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">Wedding Invitations</Link></li>
                  <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">Custom Branded Items</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold mb-3 text-gray-300">Company</h4>
                <ul className="space-y-2 text-sm">
                  <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
                  <li><Link to="/portfolio" className="text-gray-400 hover:text-white transition-colors">Portfolio</Link></li>
                  <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold mb-3 text-gray-300">Support</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="tel:+2348134466334" className="text-gray-400 hover:text-white transition-colors">Call Support</a></li>
                  <li><a href="mailto:support@aktomrady.com" className="text-gray-400 hover:text-white transition-colors">Email Support</a></li>
                  <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Get Quote</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold mb-3 text-gray-300">Follow Us</h4>
                <div className="flex space-x-3">
                  <a
                    href="https://www.facebook.com/p/Aktomrady-100070072301601/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook size={16} />
                  </a>
                  <a
                    href="https://www.instagram.com/aktomradyagenciesnig/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram size={16} />
                  </a>
                  <a
                    href="https://wa.me/2348029477796"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-700 transition-colors"
                    aria-label="WhatsApp"
                  >
                    <MessageCircle size={16} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="py-6 border-t border-gray-800">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <p className="text-sm text-gray-400">
                  Copyright 2025 © AKTOMRADY Agencies. All Rights Reserved
                </p>
              </div>
              <div className="flex space-x-6 text-sm">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Sitemap</a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Interactive Components */}
      <BackToTop />
      <Chatbot />
      <CookieNotification />
    </div>
  );
}
