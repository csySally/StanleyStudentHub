import React from "react";
import Header from "../components/Header";
import Welcome from "../components/Welcome";
import Footer from "../components/Footer";
import Calendar from "../components/CalendarCom/Calendar.jsx";
import backgroundPic from "../assets/images/events-background.jpeg";

import { days, events, calendarTitle } from "../config/eventContentConfig";

function EventsAndActivities() {
  return (
    <div>
      <Header />
      <Welcome
        backgroundPic={backgroundPic}
        welcomeText="Events and Activities"
      />
      <div className="calendar-container">
        <Calendar days={days} events={events} calendarTitle={calendarTitle} />
      </div>
      <Footer />
    </div>
  );
}

export default EventsAndActivities;
