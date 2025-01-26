import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'nav-glass' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3 pt-2">
            <img
              src="https://i.postimg.cc/kgHswN8V/KC-Logo.png"
              alt="Kings Cross Kickers Logo"
              className="h-24"
            />
          </Link>

          <div className="flex items-center gap-8">
            <Link
              to="/schedule"
              className={`nav-link ${
                location.pathname === '/schedule' ? 'nav-link-active' : ''
              }`}
            >
              Schedule
            </Link>
            <Link
              to="/gallery"
              className={`nav-link ${
                location.pathname === '/gallery' ? 'nav-link-active' : ''
              }`}
            >
              Gallery
            </Link>
            <a
              href="#contact"
              className="gradient-btn px-4 py-2 rounded-full text-sm font-medium"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
