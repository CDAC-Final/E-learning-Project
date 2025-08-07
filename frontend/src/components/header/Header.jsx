import React, { useState } from 'react';
import { Link } from "react-router-dom";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white text-blue-600 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-2 lg:py-5">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center hover:opacity-80 transition-opacity duration-300"
          >
            <img 
              src="/src/assets/logo2.png" 
              alt="Logo" 
              className="rounded-full  w-30 sm:h-12"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <Link 
              to="/" 
              className="text-blue-600 hover:text-blue-500 font-semibold text-sm lg:text-base transition-colors duration-300 px-2 py-2 rounded-md hover:bg-blue-50"
            >
              Home
            </Link>
            <Link 
              to="/courses" 
              className="text-blue-600 hover:text-blue-500 font-semibold text-sm lg:text-base transition-colors duration-300 px-3 py-2 rounded-md hover:bg-blue-50"
            >
              Courses
            </Link>
            <Link 
              to="/contact" 
              className="text-blue-600 hover:text-blue-500 font-semibold text-sm lg:text-base transition-colors duration-300 px-3 py-2 rounded-md hover:bg-blue-50"
            >
              Contact
            </Link>
            <div className="flex items-center space-x-2">
              <Link 
                to="/login" 
                className="border-2 border-purple-600 text-purple-600 bg-transparent font-medium text-sm lg:text-base transition-all duration-300 px-4 py-1 rounded-md hover:bg-purple-100 hover:text-purple-800"
              >
                Log in
              </Link>
              <Link 
                to="/register" 
                className="bg-purple-600 text-white border-2 border-transparent font-medium text-sm lg:text-base transition-all duration-300 px-4 py-1 rounded-md hover:bg-purple-700 hover:shadow-lg"
              >
                Sign up
              </Link>
            </div>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-blue-600 hover:text-blue-500 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 transition-colors duration-300"
            aria-expanded={isMobileMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            {/* Hamburger icon */}
            <svg
              className={`${isMobileMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            {/* Close icon */}
            <svg
              className={`${isMobileMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} bg-white border-t border-gray-200`}>
        <div className="px-4 pt-2 pb-3 space-y-1 sm:px-6">
          <Link 
            to="/" 
            className="block text-blue-600 hover:text-blue-500 hover:bg-blue-50 font-medium px-3 py-3 rounded-md text-base transition-colors duration-300"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link 
            to="/courses" 
            className="block text-blue-600 hover:text-blue-500 hover:bg-blue-50 font-medium px-3 py-3 rounded-md text-base transition-colors duration-300"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Courses
          </Link>
          <Link 
            to="/contact" 
            className="block text-blue-600 hover:text-blue-500 hover:bg-blue-50 font-medium px-3 py-3 rounded-md text-base transition-colors duration-300"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact
          </Link>
          <div className="pt-4 pb-3 border-t border-gray-200 space-y-2">
            <Link 
              to="/login" 
              className="block w-full text-center border-2 border-purple-600 text-purple-600 bg-transparent font-medium px-4 py-3 rounded-md hover:bg-purple-50 hover:text-purple-800 transition-all duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Log in
            </Link>
            <Link 
              to="/register" 
              className="block w-full text-center bg-purple-600 text-white border-2 border-transparent font-medium px-4 py-3 rounded-md hover:bg-purple-700 hover:shadow-lg transition-all duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;