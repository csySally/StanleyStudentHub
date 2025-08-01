import React from "react";
import DatePicker from "./DatePicker";
import { format, isSameDay, isToday } from "date-fns";
import "../../styles/calendar.css";
import { Link } from "react-router-dom";

export default function Calendar({
  days,
  events,
  calendarTitle,
  selectedDate,
  onDateSelect,
}) {
  const getEventsForDay = (day) => {
    return events
      .filter((e) => isSameDay(e.start, day))
      .sort((a, b) => a.start - b.start)
      .slice(0, 3);
  };

  return (
    <div>
      <div className="my-calendar-container">
        <div className="my-calendar-header">
          <button
            className="go-today-button"
            onClick={() => onDateSelect(new Date())}
          >
            Today
          </button>
          <h1>{calendarTitle}</h1>
          <div className="my-calendar-datepicker">
            <DatePicker
              selectedDate={selectedDate}
              onDateSelect={onDateSelect}
            />
          </div>
        </div>
        <div className="my-calendar-grid">
          {days
            .filter((day) => {
              const dayOfWeek = day.getDay(); // 0 = Sunday, 6 = Saturday
              return dayOfWeek !== 0 && dayOfWeek !== 6;
            })
            .map((day) => (
              <div
                key={day.toISOString()}
                className={`my-calendar-day ${isToday(day) ? "today" : ""}`}
              >
                <div className="my-calendar-date">
                  <span className="my-day-name">{format(day, "EEE")}</span>
                  <span className="my-day-number">{format(day, "dd")}</span>
                </div>
                {Array.from({ length: 3 }).map((_, i) => {
                  const event = getEventsForDay(day)[i];
                  // if there is an event, render it
                  if (event) {
                    return (
                      <Link
                        key={i}
                        className="my-calendar-event-link"
                        to={event.link || "#"}
                        target="_blank"
                      >
                        <div className="my-calendar-event has-event">
                          <div className="my-event-time">
                            {format(event.start, "HH:mm")}
                          </div>
                          <div className="my-event-title">{event.title}</div>
                          <div className="my-event-description">
                            {event.description || "No description available"}
                          </div>
                          {event.location && (
                            <div className="my-event-location">
                              📍 {event.location}
                            </div>
                          )}
                        </div>
                      </Link>
                    );
                  }
                  // if no event, render an empty placeholder
                  return (
                    <div key={i} className="my-calendar-event">
                      <div className="my-event-empty"></div>
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
