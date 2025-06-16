import React from "react";
import Header from "../components/Header";
import Welcome from "../components/Welcome";
import Footer from "../components/Footer";
import MyCalendar from "../components/Calendar/BigCalendar";
import backgroundPic from "../assets/images/events-background.jpeg";

function EventsAndActivities() {
  return (
    <div>
      <Header />
      <Welcome
        backgroundPic={backgroundPic}
        welcomeText="Events and Activities"
      />
      <h1>Events and Calendar</h1>
      <div className="calendar-container">
        <MyCalendar />
      </div>
      <Footer />
    </div>
  );
}

export default EventsAndActivities;
