import React from "react";
import Header from "../components/header";
import Welcome from "../components/welcome";
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
    </div>
  );
}

export default EventsAndActivities;
