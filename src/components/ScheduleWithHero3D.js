import React, { useEffect, useRef, useState } from 'react';
import HeroScene from './HeroScene';
import MarioTimeline from './MarioTimeline';
import './marioTimeline.css';

/**
 * Full 3D schedule section used on the Home page.
 * Keeps the heavy HeroScene + scroll logic separate from the plain Schedule route.
 */
const ScheduleWithHero3D = () => {
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

      const zoomTrackHeight = windowHeight * 2;
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
        { time: '31 Jan 10:00 AM', title: 'Squid Showdown', location: 'IIITV-ICD premises' },
        { time: '31 Jan 5:30 PM', title: 'Stavya Inauguration', location: 'Event Ground' },
        { time: '31 Jan 6:30 PM', title: 'Emotions Unplugged', location: 'Event Ground' },
        { time: '31 Jan 8:00 PM', title: 'Nrityakala', location: 'Event Ground' },
        { time: '1 Feb 10:00 AM', title: 'Confero', location: 'Event Ground' },
        { time: '1 Feb 2:00 PM', title: 'Rangoli Clash', location: 'Event Ground' },
        { time: '1 Feb 5:30 PM', title: 'ShabdSangam', location: 'Event Ground' },
        { time: '1 Feb 6:30 PM', title: 'Urban Harmony', location: 'Event Ground' },
      ],
    },
  ];

  return (
    <section id="schedule" ref={sectionRef} className="relative">
      {isDesktop && (
        <div className="relative h-[300vh]">
          <div className="sticky top-0 h-[100dvh] w-full flex items-center justify-center overflow-hidden z-10">
            <HeroScene scrollProgress={scrollProgress} />
          </div>
        </div>
      )}

      <div className={`relative z-20 ${isDesktop ? 'mt-0' : ''}`}>
        <div className="schedule-title-section">
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold text-black font-pricedown">
            <span>EVENT</span>{' '}
            <span>SCHEDULE</span>
          </h2>
        </div>

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

export default ScheduleWithHero3D;

