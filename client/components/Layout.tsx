import { Link, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  Facebook,
  Instagram,
  MessageCircle,
  Home,
  Briefcase,
  Award,
  Users,
  Phone,
  Calculator,
  Music,
} from "lucide-react";
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
  const location = useLocation();

  const isActiveLink = (path: string) => {
    return location.pathname === path;
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation Header */}
      <header className="relative z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-full">
          <div className="flex items-center justify-between h-14 sm:h-16">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center space-x-2 sm:space-x-3 flex-shrink-0"
            >
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Fc8949a9c41674c51b868f14c9f5720b8%2F78846955ca544effb82359542fd12c89?format=webp&width=800"
                alt="AKTOMRADY Agencies Logo"
                className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
              />
              <div className="flex flex-col min-w-0">
                <span className="text-lg sm:text-xl font-bold text-gray-900 leading-tight truncate">
                  AKTOMRADY
                </span>
                <span className="text-xs text-gray-500 hidden sm:inline leading-tight">
                  AGENCIES (NIG.)
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              <Link
                to="/"
                className={`group flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-300 font-medium ${
                  isActiveLink("/")
                    ? "bg-gradient-to-r from-brand-cyan to-brand-magenta text-white"
                    : "text-gray-700 visited:text-blue-600 hover:text-white hover:bg-gradient-to-r hover:from-brand-cyan hover:to-brand-magenta"
                }`}
              >
                <Home
                  size={18}
                  className={`transition-colors ${
                    isActiveLink("/") ? "text-white" : "group-hover:text-white"
                  }`}
                />
                <span>Home</span>
              </Link>
              <Link
                to="/services"
                className={`group flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-300 font-medium ${
                  isActiveLink("/services")
                    ? "bg-gradient-to-r from-brand-cyan to-brand-magenta text-white"
                    : "text-gray-700 visited:text-blue-600 hover:text-white hover:bg-gradient-to-r hover:from-brand-cyan hover:to-brand-magenta"
                }`}
              >
                <Briefcase
                  size={18}
                  className={`transition-colors ${
                    isActiveLink("/services")
                      ? "text-white"
                      : "group-hover:text-white"
                  }`}
                />
                <span>Services</span>
              </Link>
              <Link
                to="/portfolio"
                className={`group flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-300 font-medium ${
                  isActiveLink("/portfolio")
                    ? "bg-gradient-to-r from-brand-cyan to-brand-magenta text-white"
                    : "text-gray-700 visited:text-blue-600 hover:text-white hover:bg-gradient-to-r hover:from-brand-cyan hover:to-brand-magenta"
                }`}
              >
                <Award
                  size={18}
                  className={`transition-colors ${
                    isActiveLink("/portfolio")
                      ? "text-white"
                      : "group-hover:text-white"
                  }`}
                />
                <span>Portfolio</span>
              </Link>
              <Link
                to="/about"
                className={`group flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-300 font-medium ${
                  isActiveLink("/about")
                    ? "bg-gradient-to-r from-brand-cyan to-brand-magenta text-white"
                    : "text-gray-700 visited:text-blue-600 hover:text-white hover:bg-gradient-to-r hover:from-brand-cyan hover:to-brand-magenta"
                }`}
              >
                <Users
                  size={18}
                  className={`transition-colors ${
                    isActiveLink("/about")
                      ? "text-white"
                      : "group-hover:text-white"
                  }`}
                />
                <span>About</span>
              </Link>
              <Link
                to="/contact"
                className={`group flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-300 font-medium ${
                  isActiveLink("/contact")
                    ? "bg-gradient-to-r from-brand-cyan to-brand-magenta text-white"
                    : "text-gray-700 visited:text-blue-600 hover:text-white hover:bg-gradient-to-r hover:from-brand-cyan hover:to-brand-magenta"
                }`}
              >
                <Phone
                  size={18}
                  className="group-hover:text-white transition-colors"
                />
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
            <div className="md:hidden py-3 sm:py-4 border-t border-gray-200 bg-white/95 backdrop-blur-sm max-w-full overflow-hidden">
              <div className="flex flex-col space-y-1 sm:space-y-2">
                <Link
                  to="/"
                  className="flex items-center space-x-3 px-3 sm:px-4 py-2 sm:py-3 text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-brand-cyan hover:to-brand-magenta transition-all duration-300 rounded-lg font-medium text-sm sm:text-base"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Home size={18} className="flex-shrink-0" />
                  <span className="truncate">Home</span>
                </Link>
                <Link
                  to="/services"
                  className="flex items-center space-x-3 px-3 sm:px-4 py-2 sm:py-3 text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-brand-cyan hover:to-brand-magenta transition-all duration-300 rounded-lg font-medium text-sm sm:text-base"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Briefcase size={18} className="flex-shrink-0" />
                  <span className="truncate">Services</span>
                </Link>
                <Link
                  to="/portfolio"
                  className="flex items-center space-x-3 px-3 sm:px-4 py-2 sm:py-3 text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-brand-cyan hover:to-brand-magenta transition-all duration-300 rounded-lg font-medium text-sm sm:text-base"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Award size={18} className="flex-shrink-0" />
                  <span className="truncate">Portfolio</span>
                </Link>
                <Link
                  to="/about"
                  className="flex items-center space-x-3 px-3 sm:px-4 py-2 sm:py-3 text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-brand-cyan hover:to-brand-magenta transition-all duration-300 rounded-lg font-medium text-sm sm:text-base"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Users size={18} className="flex-shrink-0" />
                  <span className="truncate">About</span>
                </Link>
                <Link
                  to="/contact"
                  className="flex items-center space-x-3 px-3 sm:px-4 py-2 sm:py-3 text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-brand-cyan hover:to-brand-magenta transition-all duration-300 rounded-lg font-medium text-sm sm:text-base"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Phone size={18} className="flex-shrink-0" />
                  <span className="truncate">Contact</span>
                </Link>
                <div className="px-3 sm:px-4 pt-2">
                  <Button
                    className="bg-gradient-to-r from-brand-cyan via-brand-magenta to-brand-yellow hover:from-brand-cyan/90 hover:via-brand-magenta/90 hover:to-brand-yellow/90 w-full text-white font-semibold text-sm sm:text-base"
                    asChild
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Link
                      to="/quote"
                      className="flex items-center justify-center space-x-2"
                    >
                      <Calculator
                        size={16}
                        className="sm:w-[18px] sm:h-[18px]"
                      />
                      <span>Get Quote</span>
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">{children}</main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-full">
          {/* Main Footer Content */}
          <div className="py-8 sm:py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {/* Company Info */}
            <div className="col-span-1 sm:col-span-2 lg:col-span-2">
              <div className="flex items-center space-x-3 mb-4 sm:mb-6">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Fc8949a9c41674c51b868f14c9f5720b8%2F78846955ca544effb82359542fd12c89?format=webp&width=800"
                  alt="AKTOMRADY Agencies Logo"
                  className="w-8 h-8 sm:w-10 sm:h-10 object-contain flex-shrink-0"
                />
                <div className="flex flex-col min-w-0">
                  <span className="text-lg sm:text-xl font-bold leading-tight truncate">
                    AKTOMRADY
                  </span>
                  <span className="text-xs sm:text-sm text-gray-400 leading-tight">
                    AGENCIES (NIG.)
                  </span>
                </div>
              </div>
              <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed">
                Nigeria's trusted printing partner offering premium quality
                large format prints, custom branded items, business materials,
                and comprehensive printing solutions for government agencies,
                corporations, and individuals.
              </p>
              <div className="space-y-2 text-xs sm:text-sm">
                <p className="flex items-center text-gray-300">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3 flex-shrink-0"></span>
                  <span className="truncate">
                    Trusted by Lagos State Government
                  </span>
                </p>
                <p className="flex items-center text-gray-300">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3 flex-shrink-0"></span>
                  <span className="truncate">
                    Serving Major Banks & Corporations
                  </span>
                </p>
                <p className="flex items-center text-gray-300">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3 flex-shrink-0"></span>
                  <span className="truncate">
                    3000+ Happy Clients Nationwide
                  </span>
                </p>
              </div>
            </div>

            {/* Contact Information */}
            <div className="min-w-0">
              <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">
                Contact Info
              </h3>
              <div className="space-y-3 sm:space-y-4 text-xs sm:text-sm">
                <div>
                  <p className="text-gray-400 mb-1">Phone Numbers:</p>
                  <p className="text-white">
                    <a
                      href="tel:+2348029477796"
                      className="hover:text-brand-cyan transition-colors break-all"
                    >
                      +234.8029477796
                    </a>
                  </p>
                </div>
                <div>
                  <p className="text-gray-400 mb-1">Email:</p>
                  <div className="space-y-1">
                    <p className="text-white">
                      <a
                        href="mailto:info@aktomrady.com"
                        className="hover:text-brand-cyan transition-colors break-all"
                      >
                        info@aktomrady.com
                      </a>
                    </p>
                    <p className="text-white">
                      <a
                        href="mailto:aktomradyagencies@yahoo.com"
                        className="hover:text-brand-cyan transition-colors break-all"
                      >
                        aktomradyagencies@yahoo.com
                      </a>
                    </p>
                  </div>
                </div>
                <div>
                  <p className="text-gray-400 mb-1">Business Hours:</p>
                  <p className="text-white text-xs sm:text-sm">
                    Mon-Fri: 8:00 AM - 6:00 PM
                  </p>
                  <p className="text-white text-xs sm:text-sm">
                    Sat: 9:00 AM - 4:00 PM
                  </p>
                </div>
              </div>
            </div>

            {/* Office Locations */}
            <div className="min-w-0">
              <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">
                Our Offices
              </h3>
              <div className="space-y-3 sm:space-y-4 text-xs sm:text-sm">
                <div>
                  <p className="text-gray-400 mb-1">Lagos Office:</p>
                  <p className="text-white break-words">
                    5, Kayode Street, Ogba
                  </p>
                  <p className="text-white break-words">
                    Lagos Mainland, OGBA LAGOS
                  </p>
                  <p className="text-white">Nigeria</p>
                </div>
                <div>
                  <p className="text-gray-400 mb-1">Abuja Office:</p>
                  <p className="text-white text-xs sm:text-sm italic">
                    Coming Soon
                  </p>
                </div>
                <div>
                  <p className="text-gray-400 mb-1">Port Harcourt Office:</p>
                  <p className="text-white text-xs sm:text-sm italic">
                    Coming Soon
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="py-4 sm:py-6 border-t border-gray-800">
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-4 sm:mb-6">
              <div className="min-w-0">
                <h4 className="text-xs sm:text-sm font-semibold mb-2 sm:mb-3 text-gray-300">
                  Services
                </h4>
                <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
                  <li>
                    <Link
                      to="/services"
                      className="text-gray-400 hover:text-white transition-colors block truncate"
                    >
                      Large Format Prints
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/services"
                      className="text-gray-400 hover:text-white transition-colors block truncate"
                    >
                      Business Cards
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/services"
                      className="text-gray-400 hover:text-white transition-colors block truncate"
                    >
                      Invitation Cards
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/services"
                      className="text-gray-400 hover:text-white transition-colors block truncate"
                    >
                      Custom Branded Items
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="min-w-0">
                <h4 className="text-xs sm:text-sm font-semibold mb-2 sm:mb-3 text-gray-300">
                  Company
                </h4>
                <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
                  <li>
                    <Link
                      to="/about"
                      className="text-gray-400 hover:text-white transition-colors block truncate"
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/portfolio"
                      className="text-gray-400 hover:text-white transition-colors block truncate"
                    >
                      Portfolio
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/contact"
                      className="text-gray-400 hover:text-white transition-colors block truncate"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="min-w-0">
                <h4 className="text-xs sm:text-sm font-semibold mb-2 sm:mb-3 text-gray-300">
                  Support
                </h4>
                <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
                  <li>
                    <a
                      href="tel:+2348029477796"
                      className="text-gray-400 hover:text-white transition-colors block truncate"
                    >
                      Call Support
                    </a>
                  </li>
                  <li>
                    <a
                      href="mailto:support@aktomrady.com"
                      className="text-gray-400 hover:text-white transition-colors block truncate"
                    >
                      Email Support
                    </a>
                  </li>
                  <li>
                    <Link
                      to="/contact"
                      className="text-gray-400 hover:text-white transition-colors block truncate"
                    >
                      Get Quote
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="min-w-0">
                <h4 className="text-xs sm:text-sm font-semibold mb-2 sm:mb-3 text-gray-300">
                  Follow Us
                </h4>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  <a
                    href="https://www.facebook.com/p/Aktomrady-100070072301601/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-7 h-7 sm:w-8 sm:h-8 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors flex-shrink-0"
                    aria-label="Facebook"
                  >
                    <Facebook size={14} className="sm:w-4 sm:h-4" />
                  </a>
                  <a
                    href="https://www.instagram.com/aktomradyagenciesnig/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-7 h-7 sm:w-8 sm:h-8 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors flex-shrink-0"
                    aria-label="Instagram"
                  >
                    <Instagram size={14} className="sm:w-4 sm:h-4" />
                  </a>
                  <a
                    href="https://wa.me/2348029477796"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-7 h-7 sm:w-8 sm:h-8 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-700 transition-colors flex-shrink-0"
                    aria-label="WhatsApp"
                  >
                    <MessageCircle size={14} className="sm:w-4 sm:h-4" />
                  </a>
                  <a
                    href="https://www.tiktok.com/@aktomrady"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-7 h-7 sm:w-8 sm:h-8 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors flex-shrink-0"
                    aria-label="TikTok"
                  >
                    <X size={14} className="sm:w-4 sm:h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="py-4 sm:py-6 border-t border-gray-800">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
              <div className="order-2 sm:order-1">
                <p className="text-xs sm:text-sm text-gray-400 text-center sm:text-left">
                  Copyright 2025 © AKTOMRADY Agencies. All Rights Reserved
                </p>
              </div>
              <div className="flex flex-wrap justify-center sm:justify-end gap-3 sm:gap-6 text-xs sm:text-sm order-1 sm:order-2">
                <Link
                  to="/privacy-policy"
                  className="text-gray-400 hover:text-white transition-colors whitespace-nowrap"
                >
                  Privacy Policy
                </Link>
                <Link
                  to="/terms-of-service"
                  className="text-gray-400 hover:text-white transition-colors whitespace-nowrap"
                >
                  Terms of Service
                </Link>
                <Link
                  to="/sitemap"
                  className="text-gray-400 hover:text-white transition-colors whitespace-nowrap"
                >
                  Sitemap
                </Link>
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
