import React from "react";
import { Link } from "react-router-dom";
import BowingIcon from "../assets/icons/Bowing.svg";
import Header from "../components/header";
import Welcome from "../components/welcome";
import backgroundPic from "../assets/images/home-background.jpeg";

function Home() {
  return (
    <div>
      <Header />
      <Welcome
        backgroundPic={backgroundPic}
        welcomeText="Welcome to the Student Hub"
      />
      <h1>Home</h1>
      <img src={BowingIcon} alt="Bowing Icon" />
      <div>
        <ul>
          <li>
            <Link to="/it-support">IT Support</Link>
          </li>
          <li>
            <Link to="/wbt-support">WBT Support</Link>
          </li>
          <li>
            <Link to="/student-support">Student Support</Link>
          </li>
          <li>
            <Link to="/accessibility-support">Accessibility Support</Link>
          </li>
          <li>
            <Link to="/events-and-activities">Events and Activities</Link>
          </li>
          <li>
            <Link to="/important-contacts">Important Contacts</Link>
          </li>
          <li>
            <Link to="/requests-and-feedbacks">Requests and Feedbacks</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
