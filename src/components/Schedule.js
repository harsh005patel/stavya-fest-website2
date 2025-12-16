import React, { useEffect, useRef, useState } from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { MapPin } from 'lucide-react';
import HeroScene from './HeroScene';

export const Schedule = () => {
  const [activeDay, setActiveDay] = useState(0);
  const [visibleItems, setVisibleItems] = useState([]);
  const [isDesktop, setIsDesktop] = useState(true);
  const sectionRef = useRef(null);
  const scrollProgress = useRef(0);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !isDesktop) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // 🔹 ADJUSTMENT: We calculate progress over the FIRST part of the section only
      // This ensures progress reaches 1.0 (Full Zoom) BEFORE the content arrives
      const zoomTrackHeight = windowHeight * 2; // Matches the spacer below
      const currentScroll = -rect.top;
      const progress = Math.max(0, Math.min(1, currentScroll / zoomTrackHeight));
      
      scrollProgress.current = progress;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDesktop]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            schedule[activeDay].events.forEach((_, index) => {
              setTimeout(() => {
                setVisibleItems((prev) => [...prev, index]);
              }, index * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [activeDay]);

  useEffect(() => { setVisibleItems([]); }, [activeDay]);

  const schedule = [
    {
      day: 'Day 1',
      date: 'March 15, 2025',
      events: [
        { time: '10:00 AM', title: 'Inauguration Ceremony', location: 'Main Stage', color: 'primary' },
        { time: '11:00 AM', title: 'Photography Contest', location: 'Campus Grounds', color: 'secondary' },
        { time: '2:00 PM', title: 'Treasure Hunt', location: 'Entire Campus', color: 'accent' },
        { time: '4:00 PM', title: 'Dance Face-Off', location: 'Auditorium', color: 'secondary' },
        { time: '6:00 PM', title: 'Battle of Bands', location: 'Main Stage', color: 'primary' },
        { time: '9:00 PM', title: 'DJ Night', location: 'Open Arena', color: 'accent' },
      ],
    },
    {
      day: 'Day 2',
      date: 'March 16, 2025',
      events: [
        { time: '10:00 AM', title: 'E-Sports Tournament', location: 'Gaming Zone', color: 'primary' },
        { time: '11:00 AM', title: 'Art Exhibition', location: 'Art Gallery', color: 'secondary' },
        { time: '2:00 PM', title: 'Debate Competition', location: 'Seminar Hall', color: 'accent' },
        { time: '4:00 PM', title: 'Fashion Prelims', location: 'Indoor Stadium', color: 'primary' },
        { time: '7:00 PM', title: 'Stage Play', location: 'Auditorium', color: 'accent' },
        { time: '9:00 PM', title: 'Rock Night', location: 'Main Stage', color: 'secondary' },
      ],
    },
    {
      day: 'Day 3',
      date: 'March 17, 2025',
      events: [
        { time: '10:00 AM', title: 'Literary Events', location: 'Library Lawn', color: 'secondary' },
        { time: '12:00 PM', title: 'Street Play', location: 'Campus Streets', color: 'accent' },
        { time: '3:00 PM', title: 'Quiz Competition', location: 'Seminar Hall', color: 'primary' },
        { time: '6:00 PM', title: 'Fashion Show Finals', location: 'Main Stage', color: 'secondary' },
        { time: '8:00 PM', title: 'Celebrity Night', location: 'Main Stage', color: 'primary' },
        { time: '9:00 PM', title: 'Stand-Up Comedy', location: 'Auditorium', color: 'accent' },
        { time: '10:30 PM', title: 'Closing Ceremony', location: 'Main Stage', color: 'primary' },
      ],
    },
  ];

  return (
    <section id="schedule" ref={sectionRef} className="relative">
      
      {/* 🔹 1. ZOOM TRACK */}
      {isDesktop && (
        <div className="relative h-[300vh]"> {/* Increased track height */}
          <div className="sticky top-0 h-[100dvh] w-full flex items-center justify-center overflow-hidden z-10">
            <HeroScene scrollProgress={scrollProgress} />
          </div>
        </div>
      )}

      {/* 🔹 2. CONTENT - Removed negative margin to ensure it starts AFTER the zoom finishes */}
      <div className={`relative z-20 container mx-auto px-4 pt-20 md:pt-32 pb-24 md:pb-32 ${isDesktop ? 'mt-0' : ''}`}>
        <div className="text-center mb-16">
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6">
            <span className="text-accent">EVENT</span>{' '}
            <span className="text-secondary">SCHEDULE</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Plan your fest experience with our detailed day-wise schedule.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {schedule.map((day, index) => (
            <button
              key={index}
              onClick={() => setActiveDay(index)}
              className={`px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 ${
                activeDay === index
                  ? 'bg-primary text-secondary-foreground glow-cyan scale-12'
                  : 'bg-card/50 text-muted-foreground hover:bg-card border border-border'
              }`}
            >
              <div>{day.day}</div>
              <div className="text-sm font-normal opacity-80">{day.date}</div>
            </button>
          ))}
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/50" />
            <div className="space-y-8">
              {schedule[activeDay].events.map((event, index) => {
                const isVisible = visibleItems.includes(index);
                const isEven = index % 2 === 0;
                return (
                  <div key={index} 
                    className={`relative flex items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} 
                    ${isVisible ? 'opacity-100 translate-x-0' : `opacity-0 ${isEven ? '-translate-x-10' : 'translate-x-10'}`}`}
                    style={{ transition: 'all 0.6s ease-out' }}>
                    <div className={`absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-${event.color} z-10`} />
                    <div className={`w-full md:w-5/12 ${isEven ? 'md:pr-12 pl-16 md:pl-0' : 'md:pl-12 pl-16 md:pl-0'}`}>
                      <Card className={`bg-card/80 backdrop-blur-sm border-2 border-${event.color}/20 p-6 group`}>
                        <Badge className={`bg-${event.color} text-white mb-2`}>{event.time}</Badge>
                        <h3 className={`text-xl font-bold mb-2 text-${event.color}`}>{event.title}</h3>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <MapPin size={14} /> <span>{event.location}</span>
                        </div>
                      </Card>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Schedule;