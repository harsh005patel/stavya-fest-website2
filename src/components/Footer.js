import React from 'react';
import { Instagram, Mail, Phone, MapPin, ExternalLink, Sparkles, Heart, Copyright } from 'lucide-react';

export const Footer = () => {
  const currentYear = 2026;
  
  return (
    <footer className="relative bg-gradient-to-b from-background via-background/95 to-card border-t border-primary/30 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary rounded-full animate-pulse" style={{ animationDuration: '10s', animationDelay: '1s' }} />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header with Sparkles */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <Sparkles className="text-accent" size={24} />
              <h3 className="text-3xl font-bold text-white bg-clip-text text-transparent font-pricedown tracking-wide">
                Get In Touch
              </h3>
              <Sparkles className="text-accent" size={24} />
            </div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Connect with us through any of these channels. We're here to help!
            </p>
          </div>

          {/* Contact Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {/* Social Card */}
            <div className="group bg-card/50 backdrop-blur-sm border border-primary/20 rounded-2xl p-6 hover:border-primary/40 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-gradient-to-br from-pink-500 to-rose-600 rounded-lg">
                  <Instagram className="text-white" size={20} />
                </div>
                <h4 className="font-semibold text-lg">Follow Us</h4>
              </div>
              <a 
                href="https://instagram.com/stavya_iiitvicd" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group-hover:translate-x-1 duration-300"
              >
                <span className="text-lg">@stavya_iiitvicd</span>
                <ExternalLink size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>

            {/* Email Card */}
            <div className="group bg-card/50 backdrop-blur-sm border border-primary/20 rounded-2xl p-6 hover:border-primary/40 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-lg">
                  <Mail className="text-white" size={20} />
                </div>
                <h4 className="font-semibold text-lg">Email Us</h4>
              </div>
              <a 
                href="mailto:cultural@diu.iiitvadodara.ac.in"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group-hover:translate-x-1 duration-300"
              >
                <span className="break-all">cultural@diu.iiitvadodara.ac.in</span>
                <ExternalLink size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>

            {/* Phone Card */}
            <div className="group bg-card/50 backdrop-blur-sm border border-primary/20 rounded-2xl p-6 hover:border-primary/40 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg">
                  <Phone className="text-white" size={20} />
                </div>
                <h4 className="font-semibold text-lg">Call Us</h4>
              </div>
              <a 
                href="tel:9924288424"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group-hover:translate-x-1 duration-300 text-lg"
              >
                +91 99242 88424
              </a>
            </div>

            {/* Address Card */}
            <div className="group bg-card/50 backdrop-blur-sm border border-primary/20 rounded-2xl p-6 hover:border-primary/40 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 lg:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-gradient-to-br from-orange-500 to-amber-600 rounded-lg">
                  <MapPin className="text-white" size={20} />
                </div>
                <h4 className="font-semibold text-lg">Visit Us</h4>
              </div>
              <p className="text-muted-foreground group-hover:text-primary transition-colors">
                Education Hub, Kevdi – Diu (U.T) – 362520, Gujarat, India
              </p>
            </div>

            {/* Website Card */}
            <div className="group bg-card/50 backdrop-blur-sm border border-primary/20 rounded-2xl p-6 hover:border-primary/40 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-gradient-to-br from-purple-500 to-violet-600 rounded-lg">
                  <ExternalLink className="text-white" size={20} />
                </div>
                <h4 className="font-semibold text-lg">Institute Website</h4>
              </div>
              <a 
                href="http://diu.iiitvadodara.ac.in/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group-hover:translate-x-1 duration-300"
              >
                Visit Website
                <ExternalLink size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="text-center pt-8 border-t border-primary/30">
            <div className="flex flex-col items-center gap-4">
             
              {/* Copyright */}
              <div className="flex items-center justify-center gap-2 text-muted-foreground">
                <Copyright size={16} />
                <span className="font-semibold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  STAVYA {currentYear}
                </span>
                <span className="text-sm">All Rights Reserved</span>
              </div>

           
            </div>
          </div>
        </div>
      </div>

      {/* Animated Gradient Border */}
      <div className="relative h-1 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent" style={{
          backgroundSize: '200% 200%',
          animation: 'gradientX 3s ease infinite'
        }} />
      </div>

      {/* Inline Style Tag with Keyframes */}
      <style jsx global>{`
        @keyframes gradientX {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-20px) translateX(10px);
          }
        }
        
        .backdrop-blur-sm {
          backdrop-filter: blur(8px);
        }
        
        /* Smooth scrolling for anchor links */
        html {
          scroll-behavior: smooth;
        }
      `}</style>

      {/* Add CSS directly to style tag for animations */}
      <style>{`
        .group:hover .group-hover\\:translate-x-1 {
          transform: translateX(4px);
        }
        
        .hover\\:shadow-primary\\/10:hover {
          box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(var(--primary) / 0.1);
        }
        
        .bg-clip-text {
          -webkit-background-clip: text;
          background-clip: text;
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }
        
        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </footer>
  );
};

export default Footer;