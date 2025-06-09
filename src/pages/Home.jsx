import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Welcome from "../components/Welcome";
import Footer from "../components/Footer";
import SwiperCom from "../components/SwiperCom";
import Heading from "../components/Heading";
import EventCard from "../components/EventCard";
import Discover from "../components/Discover";
import SecondHeading from "../components/SecondHeading";
import InfoCard from "../components/InfoCard";
import backgroundPic from "../assets/images/home-background.jpeg";
import { homeSlides } from "../config/homeConfig";
import { EventCards } from "../config/eventCardConfig";
import { DiscoverCards } from "../config/discoverConfig";
import { homeCardData } from "../config/homeCardConfig";

import "../styles/home.css";

function Home() {
  return (
    <div>
      <Header />
      <Welcome
        backgroundPic={backgroundPic}
        welcomeText="Welcome to the Student Hub"
      />
      <Heading
        title="What's Happening"
        backgroundColor="#00007B"
        textColor="#fff"
        toMore={false}
      />
      <SwiperCom slides={homeSlides} />
      <Heading
        title="Coming Events"
        backgroundColor="#00007B"
        textColor="#fff"
        toMore={true}
        toLink="/events-and-activities"
      />
      <div className="event-cards-container">
        <EventCard cards={EventCards} />
      </div>
      <Heading
        title="Discover"
        backgroundColor="#fff"
        textColor="#00007B"
        toMore={false}
      />
      <div className="discover-cards-container">
        <Discover cards={DiscoverCards} />
      </div>
      <SecondHeading
        title="Need Immediate Assistance?"
        backgroundColor="#fff"
        textColor="#00007B"
      />
      <InfoCard homeCardData={homeCardData} />
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

      <Footer />
    </div>
  );
}

export default Home;
