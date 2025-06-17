import React from "react";
import Header from "../components/Header";
import Welcome from "../components/Welcome";
import Footer from "../components/Footer";
import Calendar from "../components/CalendarCom/Calendar.jsx";
import backgroundPic from "../assets/images/events-background.jpeg";

const days = [...Array(7)].map(
  (_, i) => new Date(2025, 5, 16 + i) // 从某天开始往后推7天
);

const events = [
  {
    title: "Morning Jog with Friends",
    start: new Date(2025, 5, 17, 7, 30),
    location: "Park",
  },
  {
    title: "Work Session - Project Planning",
    start: new Date(2025, 5, 17, 9, 0),
    location: "Home Office",
  },
  {
    title:
      "Lunch with Colleagues and Discussion aaaaaaa so it wa wadsadsad dadsa",
    start: new Date(2025, 5, 18, 12, 0),
    location: "Downtown",
  },
];
function EventsAndActivities() {
  return (
    <div>
      <Header />
      <Welcome
        backgroundPic={backgroundPic}
        welcomeText="Events and Activities"
      />
      <div className="calendar-container">
        <Calendar days={days} events={events} />
      </div>
      <Footer />
    </div>
  );
}

export default EventsAndActivities;
