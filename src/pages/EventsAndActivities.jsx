import React, { useMemo, useState, useRef } from "react";
import Header from "../components/Header";
import Welcome from "../components/welcome.jsx";
import Footer from "../components/Footer";
import Heading from "../components/Heading.jsx";
import ArrowHeading from "../components/ArrowHeading";
import SwiperCom from "../components/SwiperCom";
import SwiperWorkshop from "../components/SwiperWorkshop";
import { startOfWeek, addDays } from "date-fns";
import Calendar from "../components/CalendarCom/Calendar.jsx";
import useGoogleCalendar from "../hooks/useGoogleCalendar.js";
import useWelcomePicture from "../hooks/useWelcomePicture.js";
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
import { motion } from "framer-motion";

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

  const { welcomePicture, loading } = useWelcomePicture();

  if (loading) {
    return (
      <div>
        <Header />
        <div
          style={{
            background: "#f0f0f0",
          }}
        ></div>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <Welcome
        backgroundPic={welcomePicture.events}
        welcomeText="Events and Activities"
        scrollTargetRef={nextSectionRef}
      />
      <motion.section
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
      >
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
      </motion.section>
      <motion.section
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <SwiperCom slides={eventSlides} />
      </motion.section>
      <Heading
        title={heading2}
        backgroundColor="#00007B"
        textColor="#fff"
        toMore={false}
      />
      <motion.section
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="calendar-container">
          <Calendar
            days={daysOfWeek}
            events={events}
            calendarTitle={calendarTitle}
            selectedDate={selectedDate}
            onDateSelect={handleDateSelect}
          />
        </div>
      </motion.section>
      <Heading
        title={heading3}
        backgroundColor="#00007B"
        textColor="#fff"
        toMore={true}
        toLink="https://drive.google.com/drive/folders/1eC5PF0SToKiwyz-6C7MS8VaqHUwBkpII"
      />
      <motion.section
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="workshop-container">
          <SwiperWorkshop />
        </div>
      </motion.section>
      <Footer />
    </div>
  );
}

export default EventsAndActivities;
