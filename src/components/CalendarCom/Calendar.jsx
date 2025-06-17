import React from "react";
import { format, isSameDay } from "date-fns";
import "../../styles/calendar.css";

export default function Calendar({ days, events }) {
  const getEventsForDay = (day) => {
    return events
      .filter((e) => isSameDay(e.start, day))
      .sort((a, b) => a.start - b.start)
      .slice(0, 3);
  };

  return (
    <div>
      <div className="calendar-container">
        <div className="calendar-header">
          <h1>Calendar of events in Stanley College</h1>
        </div>
        <div className="calendar-grid">
          {days.map((day) => (
            <div key={day.toISOString()} className="calendar-day">
              <div className="calendar-date">
                <span className="day-name">{format(day, "EEE")}</span>
                <span className="day-number">{format(day, "dd")}</span>
              </div>
              {Array.from({ length: 3 }).map((_, i) => {
                const event = getEventsForDay(day)[i];
                return (
                  <div key={i} className="calendar-event">
                    {event ? (
                      <>
                        <div className="event-time">
                          {format(event.start, "HH:mm")}
                        </div>
                        <div className="event-title">{event.title}</div>
                        {event.location && (
                          <div className="event-location">
                            📍 {event.location}
                          </div>
                        )}
                      </>
                    ) : (
                      <div className="event-empty"></div>
                    )}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
