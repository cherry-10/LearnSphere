import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img src="/logo.png" alt="Learn Sphere" className="h-10 w-10" />
              <span className="text-xl font-bold text-white">Learn Sphere</span>
            </div>
            <p className="text-sm text-gray-400 mb-4">
              Empowering learners worldwide with quality education and industry-recognized certifications.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm hover:text-blue-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/courses" className="text-sm hover:text-blue-400 transition-colors">
                  All Courses
                </Link>
              </li>
              <li>
                <Link to="/my-courses" className="text-sm hover:text-blue-400 transition-colors">
                  My Learning
                </Link>
              </li>
              <li>
                <Link to="/help" className="text-sm hover:text-blue-400 transition-colors">
                  Help Center
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-white font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <a href="/courses?category=ai-ml" className="text-sm hover:text-blue-400 transition-colors">
                  AI & Machine Learning
                </a>
              </li>
              <li>
                <a href="/courses?category=data-science" className="text-sm hover:text-blue-400 transition-colors">
                  Data Science
                </a>
              </li>
              <li>
                <a href="/courses?category=programming" className="text-sm hover:text-blue-400 transition-colors">
                  Programming
                </a>
              </li>
              <li>
                <a href="/courses?category=advanced" className="text-sm hover:text-blue-400 transition-colors">
                  Advanced Computing
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <Mail className="h-5 w-5 text-blue-400 mt-0.5" />
                <a href="mailto:nexthubtechnologiesp@gmail.com" className="text-sm hover:text-blue-400 transition-colors">
                  nexthubtechnologiesp@gmail.com
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <Phone className="h-5 w-5 text-blue-400 mt-0.5" />
                <a href="tel:+916302834343" className="text-sm hover:text-blue-400 transition-colors">
                  +91 6302834343
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 text-blue-400 mt-0.5" />
                <span className="text-sm">Vijayawada, Andhra Pradesh, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            © 2024 Learn Sphere. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="/privacy" className="text-sm hover:text-blue-400 transition-colors">
              Privacy Policy
            </a>
            <a href="/terms" className="text-sm hover:text-blue-400 transition-colors">
              Terms of Service
            </a>
            <a href="/cookies" className="text-sm hover:text-blue-400 transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
