import React, { useEffect, useRef, useState } from 'react';
import HeroScene from './HeroScene';
import MarioTimeline from './MarioTimeline';
import './marioTimeline.css';

export const Schedule = () => {
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
      <div className={`relative z-20 ${isDesktop ? 'mt-0' : ''}`}>
        {/* Title Section with Purple Background */}
        <div className="schedule-title-section">
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold text-black font-pricedown">
            <span>EVENT</span>{' '}
            <span>SCHEDULE</span>
          </h2>
        </div>

        {/* Timeline (Super Mario themed) - All events combined */}
        <MarioTimeline
          title="Super Mario Timeline"
          subtitle="Initial launch dates of games in the Super Mario series."
          items={schedule.flatMap((day) => 
            day.events.map((e) => ({
              time: e.time,
              title: e.title,
              location: e.location,
            }))
          )}
        />
      </div>
    </section>
  );
};
export default Schedule;