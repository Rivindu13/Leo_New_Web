import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/D7_logo.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const location = useLocation();

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT', path: '/about' },
    { name: 'PROJECTS', path: '/projects' },
    { name: 'BOARD', path: '/board' },
    { name: 'CONTACT', path: '/contact' },
  ];

  return (
    <nav
      className={`fixed w-full z-[100] transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0B1E3A]/90 backdrop-blur-md py-3 shadow-lg shadow-black/30'
          : 'bg-gradient-to-b from-[#020d1c]/90 to-[#0a111c]/60 backdrop-blur-sm py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">

          {/* Logo */}
          <Link to="/" className="flex items-center space-x-4">
            <img
              src={logo}
              alt="Leos Logo"
              className="h-16 w-auto transition-transform duration-300 hover:scale-105"
            />

            <div className="hidden sm:flex flex-col leading-snug">
              <span className="text-xl font-bold text-blue-400 text-center">
                J'pura D7 Leos
              </span>
              <span className="text-sm font-semibold text-white/70 text-center">
                University of Sri Jayewardenepura
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center">
            <div className="flex items-center space-x-8">

              {navLinks.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`relative group text-sm font-semibold tracking-wide transition-all duration-200 ${
                    location.pathname === item.path
                      ? 'text-blue-400'
                      : 'text-white/80 hover:text-white'
                  }`}
                >
                  {item.name}

                  {/* underline */}
                  <span
                    className={`absolute left-0 -bottom-1 h-[2px] bg-blue-400 transition-all duration-300 ${
                      location.pathname === item.path
                        ? 'w-full'
                        : 'w-0 group-hover:w-full'
                    }`}
                  ></span>
                </Link>
              ))}
            </div>

            {/* Join Button */}
            <div className="ml-12">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLScHmWSOscOY5fbo_m6smjH7gd4PLV329t8m56HO16-r-A8tRw/viewform?usp=dialog"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-2 
                font-semibold text-white rounded-full 
                bg-gradient-to-r from-blue-500 to-indigo-500 
                transition-all duration-300 
                hover:scale-105 hover:shadow-lg"
              >
                Join Us
              </a>
            </div>
          </div>

          {/* Mobile Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-white/80 hover:text-white transition-colors duration-200"
            >
              {isMobileMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#0B1E3A]/95 backdrop-blur-md shadow-lg mt-3 py-4">
          <div className="px-4 space-y-4">

            {navLinks.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="block text-white/80 hover:text-white hover:bg-white/10 px-3 py-2 rounded-lg text-base font-medium transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}

            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScHmWSOscOY5fbo_m6smjH7gd4PLV329t8m56HO16-r-A8tRw/viewform?usp=dialog"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center bg-gradient-to-r from-blue-500 to-indigo-500 
              text-white px-5 py-2 rounded-full font-semibold 
              hover:scale-105 transition-all duration-300"
            >
              Join Us
            </a>

          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;