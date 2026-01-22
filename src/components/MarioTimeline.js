import React from "react";
import "./marioTimeline.css";

function toDateTimeValue(timeStr) {
  // Best-effort: keep a valid-ish datetime attribute without being strict.
  // Example input: "10:00 AM" -> "2025-03-15T10:00"
  const match = String(timeStr || "").match(/(\d{1,2}):(\d{2})\s*(AM|PM)/i);
  if (!match) return undefined;
  let h = Number(match[1]);
  const m = match[2];
  const ap = match[3].toUpperCase();
  if (ap === "PM" && h !== 12) h += 12;
  if (ap === "AM" && h === 12) h = 0;
  const hh = String(h).padStart(2, "0");
  return `2025-03-15T${hh}:${m}`;
}

export default function MarioTimeline({ title, subtitle, items }) {
  return (
    <section className="mario-timeline-section">
      {/* Keeping these for semantics; styling can hide/show as needed */}
      {title ? <h3 className="mario-timeline-title">{title}</h3> : null}
      {subtitle ? <p className="mario-timeline-subtitle">{subtitle}</p> : null}

      <ul className="timeline">
        {items.map((item, idx) => (
          <li key={`${item.time}-${item.title}-${idx}`}>
            <time dateTime={toDateTimeValue(item.time)}>{item.time}</time>
            <span className="timeline-item-title">{item.title}</span>
            {item.location ? <span className="timeline-item-location">{item.location}</span> : null}
          </li>
        ))}
      </ul>
    </section>
  );
}

