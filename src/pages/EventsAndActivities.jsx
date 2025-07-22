import React, { useMemo, useState, useRef } from "react";
import Header from "../components/Header";
import Welcome from "../components/Welcome.jsx";
import Footer from "../components/Footer";
import Heading from "../components/Heading.jsx";
import ArrowHeading from "../components/ArrowHeading";
import SwiperCom from "../components/SwiperCom";
import SwiperWorkshop from "../components/SwiperWorkshop";
import { startOfWeek, addDays } from "date-fns";
import Calendar from "../components/CalendarCom/Calendar.jsx";
import backgroundPic from "../assets/images/events-background.jpeg";
import useGoogleCalendar from "../hooks/useGoogleCalendar.js";
import {
  calendarTitle,
  arrowHeadings,
  heading1,
  arrowContent,
  eventSlides,
  heading2,
  heading3,
} from "../config/eventContentConfig";
import "../styles/events&activities.css";

function EventsAndActivities() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const daysOfWeek = useMemo(() => {
    const start = startOfWeek(selectedDate, { weekStartsOn: 0 });
    return Array.from({ length: 7 }, (_, i) => addDays(start, i));
  }, [selectedDate]);

  const nextSectionRef = useRef(null);
  const { events } = useGoogleCalendar();

  const handleDateSelect = (date) => {
    console.log("Date selected:", date);
    setSelectedDate(date);
  };

  return (
    <div>
      <Header />
      <Welcome
        backgroundPic={backgroundPic}
        welcomeText="Events and Activities"
        scrollTargetRef={nextSectionRef}
      />
      <div ref={nextSectionRef}>
        <Heading
          title={heading1}
          backgroundColor="#00007B"
          textColor="#fff"
          toMore={false}
        />
      </div>
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
          selectedDate={selectedDate}
          onDateSelect={handleDateSelect}
        />
      </div>
      <Heading
        title={heading3}
        backgroundColor="#00007B"
        textColor="#fff"
        toMore={true}
        toLink="https://drive.google.com/drive/folders/1eC5PF0SToKiwyz-6C7MS8VaqHUwBkpII"
      />
      <div className="workshop-container">
        <SwiperWorkshop />
      </div>
      <Footer />
    </div>
  );
}

export default EventsAndActivities;
