import React, { useMemo, useState } from "react";
import Header from "../components/Header";
import Welcome from "../components/Welcome";
import Footer from "../components/Footer";
import Heading from "../components/Heading.jsx";
import ArrowHeading from "../components/ArrowHeading";
import SwiperCom from "../components/SwiperCom";

import { startOfWeek, addDays } from "date-fns";
import Calendar from "../components/CalendarCom/Calendar.jsx";
import backgroundPic from "../assets/images/events-background.jpeg";

import {
  events,
  calendarTitle,
  arrowHeadings,
  heading1,
  arrowContent,
  eventSlides,
  heading2,
} from "../config/eventContentConfig";

import "../styles/events&activities.css";

function EventsAndActivities() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const daysOfWeek = useMemo(() => {
    const start = startOfWeek(selectedDate, { weekStartsOn: 0 });
    return Array.from({ length: 7 }, (_, i) => addDays(start, i));
  }, [selectedDate]);
  return (
    <div>
      <Header />
      <Welcome
        backgroundPic={backgroundPic}
        welcomeText="Events and Activities"
      />
      <Heading
        title={heading1}
        backgroundColor="#00007B"
        textColor="#fff"
        toMore={false}
      />
      <ArrowHeading arrowHeadings={arrowHeadings[0]} />
      <div className="arrow-content">
        {arrowContent.map((item, index) => (
          <div key={index} className="arrow-item">
            <li>{item}</li>
          </div>
        ))}
      </div>
      <SwiperCom slides={eventSlides} />
      <Heading
        title={heading2}
        backgroundColor="#00007B"
        textColor="#fff"
        toMore={false}
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
