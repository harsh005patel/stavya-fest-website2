import { useEffect, useState, useCallback } from 'react';
import { Button } from './ui/button';
import { ChevronDown, Sparkles, Calendar, MapPin } from 'lucide-react';

export const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showIntroVideo, setShowIntroVideo] = useState(true);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    if (!showIntroVideo) return;
    const timer = setTimeout(() => setShowIntroVideo(false), 3000);
    return () => clearTimeout(timer);
  }, [showIntroVideo]);

  const handleVideoClose = useCallback(() => {
    setShowIntroVideo(false);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div
        className="
          absolute inset-0 -z-10 
          bg-cover bg-center bg-no-repeat bg-fixed
        "
        style={{ backgroundImage: "url('/background.jpg?width=1920')" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ backgroundColor: "rgba(13, 68, 92, 0.45)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/30 to-background z-10" />
      </div>

      {/* Noise Texture */}
      <div className="absolute inset-0 noise-overlay z-10" />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-20">
        <div
          className={`text-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Logo */}
          <div className="mt-6 sm:mt-10 md:mt-14 flex justify-center">
            <img
              src="/logo.svg"
              alt="STAVYA Festival Logo"
              className="h-36 sm:h-44 md:h-56 lg:h-72 xl:h-96 w-auto logo-glow-multi"
              width="400"
              height="300"
              loading="eager"
              fetchPriority="high"
            />
          </div>

          {/* Tagline */}
          <p className="text-xl sm:text-2xl md:text-3xl text-muted-foreground mb-4 max-w-3xl mx-auto font-medium font-pricedown">
            Unleash the <span className="text-accent font-pricedown">Chaos</span> of{' '}
            <span className="text-primary font-pricedown">Creativity</span>
          </p>
        </div>
      </div>

      {/* Bottom Fade-Out */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default Hero;