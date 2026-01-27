import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/', type: 'route' },
    { name: 'About', href: '/about', type: 'route' },
    { name: 'Events', href: '/events', type: 'route' },
    { name: 'Schedule', href: '/schedule', type: 'route' },
    { name: 'Contact Us', href: '/contact', type: 'route' },
  ];

  const scrollToSection = (href) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setIsMobileMenuOpen(false);
      }
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/50 backdrop-blur-lg border-b border-primary/20 transition-all duration-300">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <Link 
            to="/"
            className="flex items-center cursor-pointer"
          >
            <img 
              src="/logo.svg" 
              alt="STAVYA Logo" 
              className="h-10 md:h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              link.type === 'section' ? (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="text-lg font-semibold text-foreground hover:text-primary transition-all font-pricedown"
                >
                  {link.name}
                </button>
              ) : (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-lg font-semibold text-foreground hover:text-primary transition-all font-pricedown"
                >
                  {link.name}
                </Link>
              )
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4 animate-fade-in-up">
            {navLinks.map((link) => (
              link.type === 'section' ? (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="block w-full text-left text-foreground hover:text-primary transition-colors py-2 text-2xl font-bold font-pricedown"
                >
                  {link.name}
                </button>
              ) : (
                <Link
                  key={link.name}
                  to={link.href}
                  className="block w-full text-left text-foreground hover:text-primary transition-colors py-2 text-2xl font-bold font-pricedown"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              )
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
