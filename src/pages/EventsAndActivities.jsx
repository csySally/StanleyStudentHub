import React from "react";
import Header from "../components/Header";
import Welcome from "../components/Welcome";
import Footer from "../components/Footer";
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
      <Footer />
    </div>
  );
}

export default EventsAndActivities;
