import { Link } from "react-router-dom";
import { Menu, X, Facebook, Instagram, MessageCircle } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

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
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-brand-blue to-brand-light-blue rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">A</span>
              </div>
              <span className="text-xl font-bold text-gray-900">AKTOMRADY</span>
              <span className="text-sm text-gray-500 hidden sm:inline">AGENCIES (W.I.G)</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link 
                to="/" 
                className="text-gray-700 hover:text-brand-blue transition-colors font-medium"
              >
                Home
              </Link>
              <Link 
                to="/services" 
                className="text-gray-700 hover:text-brand-blue transition-colors font-medium"
              >
                Services
              </Link>
              <Link 
                to="/portfolio" 
                className="text-gray-700 hover:text-brand-blue transition-colors font-medium"
              >
                Portfolio
              </Link>
              <Link 
                to="/about" 
                className="text-gray-700 hover:text-brand-blue transition-colors font-medium"
              >
                About
              </Link>
              <Link 
                to="/contact" 
                className="text-gray-700 hover:text-brand-blue transition-colors font-medium"
              >
                Contact
              </Link>
              <Button className="bg-gradient-to-r from-brand-blue to-brand-light-blue hover:from-brand-blue/90 hover:to-brand-light-blue/90">
                Get Quote
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
            <div className="md:hidden py-4 border-t border-gray-200">
              <div className="flex flex-col space-y-4">
                <Link 
                  to="/" 
                  className="text-gray-700 hover:text-brand-blue transition-colors font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                <Link 
                  to="/services" 
                  className="text-gray-700 hover:text-brand-blue transition-colors font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Services
                </Link>
                <Link 
                  to="/portfolio" 
                  className="text-gray-700 hover:text-brand-blue transition-colors font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Portfolio
                </Link>
                <Link 
                  to="/about" 
                  className="text-gray-700 hover:text-brand-blue transition-colors font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>
                <Link 
                  to="/contact" 
                  className="text-gray-700 hover:text-brand-blue transition-colors font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
                <Button className="bg-gradient-to-r from-brand-blue to-brand-light-blue hover:from-brand-blue/90 hover:to-brand-light-blue/90 w-fit">
                  Get Quote
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
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-sm text-gray-400">
                Copyright 2025 © Aktomrady.com. All Rights Reserved
              </p>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-700 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
