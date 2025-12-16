import React from 'react';
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from './ui/button';
import { Separator } from './ui/separator';

export const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: '#', color: 'primary' },
    { icon: Instagram, href: '#', color: 'accent' },
    { icon: Twitter, href: '#', color: 'secondary' },
    { icon: Youtube, href: '#', color: 'primary' },
  ];

  const quickLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Events', href: '#events' },
    { name: 'Schedule', href: '#schedule' },
    { name: 'Gallery', href: '#gallery' },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-gradient-to-b from-background to-card/50 border-t border-primary/20 overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-64 h-64 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-secondary rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-4xl font-bold mb-4">
              <span className="font-pricedown">STAVYA</span>
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Unleash the Chaos of Creativity. Join us for three days of unforgettable performances,
              competitions, and celebrations.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className={`w-10 h-10 rounded-lg bg-card border border-${social.color}/20 flex items-center justify-center hover:border-${social.color} hover:bg-${social.color}/10 transition-all duration-300 group`}
                  >
                    <Icon className={`text-${social.color} group-hover:scale-110 transition-transform`} size={20} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-4 text-secondary font-pricedown">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-4 text-accent font-pricedown">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-muted-foreground">
                <Mail className="text-primary mt-1 flex-shrink-0" size={18} />
                <span>stavya@college.edu</span>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground">
                <Phone className="text-secondary mt-1 flex-shrink-0" size={18} />
                <span>+91 123 456 7890</span>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground">
                <MapPin className="text-accent mt-1 flex-shrink-0" size={18} />
                <span>College Campus, City Name, State - 123456</span>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h4 className="text-xl font-bold mb-4 text-primary font-pricedown">Join Us</h4>
            <p className="text-muted-foreground mb-4">
              Don't miss out on the biggest cultural fest of the year!
            </p>
            <Button
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground glow-pink font-bold"
              size="lg"
            >
              Register Now
            </Button>
          </div>
        </div>

        <Separator className="bg-primary/20 mb-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>
            © STAVYA 2025 • Designed in{' '}
            <span className="text-primary font-bold">GTA V</span> Vibes
          </p>
          <div className="flex gap-6">
            <button className="hover:text-primary transition-colors">Privacy Policy</button>
            <button className="hover:text-primary transition-colors">Terms of Service</button>
            <button className="hover:text-primary transition-colors">FAQ</button>
          </div>
        </div>
      </div>

      {/* Bottom Neon Line */}
      <div className="h-1 bg-gradient-to-r from-primary via-secondary to-accent" />
    </footer>
  );
};

export default Footer;
