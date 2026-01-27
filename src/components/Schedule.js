import React from 'react';
import MarioTimeline from './MarioTimeline';
import './marioTimeline.css';

export const Schedule = () => {
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
    <section id="schedule" className="relative">
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
    </section>
  );
};

export default Schedule;