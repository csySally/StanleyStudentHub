import React, { useMemo, useState } from "react";
import Header from "../components/Header";
import Welcome from "../components/Welcome";
import Footer from "../components/Footer";
import { startOfWeek, addDays } from "date-fns";
import Calendar from "../components/CalendarCom/Calendar.jsx";
import backgroundPic from "../assets/images/events-background.jpeg";

import { events, calendarTitle } from "../config/eventContentConfig";

function EventsAndActivities() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const daysOfWeek = useMemo(() => {
    const start = startOfWeek(selectedDate, { weekStartsOn: 0 }); // 周日开始
    return Array.from({ length: 7 }, (_, i) => addDays(start, i));
  }, [selectedDate]);
  return (
    <div>
      <Header />
      <Welcome
        backgroundPic={backgroundPic}
        welcomeText="Events and Activities"
      />
      <div className="calendar-container">
        <Calendar
          days={daysOfWeek}
          events={events}
          calendarTitle={calendarTitle}
          onDateSelect={setSelectedDate}
        />
      </div>
      <Footer />
    </div>
  );
}

export default EventsAndActivities;
