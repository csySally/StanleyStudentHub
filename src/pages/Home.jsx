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
import Outerlink from "../components/Outerlink";
import StudentRepre from "../components/StudentRepre";
import QAList from "../components/Q&A/QAList";
import backgroundPic from "../assets/images/home-background.jpeg";
import slogan from "../assets/images/slogan.png";
import oval3 from "../assets/images/oval3.png";
import oval4 from "../assets/images/oval4.png";
import career from "../assets/images/career.png";
import {
  homeSlides,
  homeSlides2,
  homeOuterLink,
  EventCards,
  DiscoverCards,
  homeCardData,
  studentRepresentative,
  qaList,
} from "../config/homeContentConfig";

import "../styles/home.css";

function Home() {
  return (
    <div>
      <Header />
      <Welcome
        backgroundPic={backgroundPic}
        welcomeText="Welcome to the Student Hub"
      />
      <div className="slogan">
        <img src={slogan} alt="" />
      </div>
      <Heading
        title="What's Happening"
        backgroundColor="#00007B"
        textColor="#fff"
        toMore={false}
      />
      <SwiperCom slides={homeSlides} />
      <Heading
        title="Upcoming Events"
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
        toMore={false}
      />
      <InfoCard homeCardData={homeCardData} />
      <Heading
        title="Learn"
        backgroundColor="#00007B"
        textColor="#fff"
        toMore={false}
      />
      <SwiperCom slides={homeSlides2} />
      <SecondHeading
        title="Quick Access"
        backgroundColor="#00007B"
        textColor="#fff"
        toMore={false}
      />
      <div className="accessContent">
        <p>
          Need to check your timetable or access course materials? Use the links
          below to jump straight to your key systems.
        </p>
      </div>
      <div className="home-outerlink-container">
        <Outerlink outerLink={homeOuterLink} />
        <img src={oval3} alt="" className="oval3" />
      </div>

      <SecondHeading
        title="Career Development"
        backgroundColor="#00007B"
        textColor="#fff"
        toMore={false}
      />
      <div className="career">
        <div className="career-img">
          <img src={career} />
        </div>
        <div className="career-content">
          <p>
            Our Employment Team is here to assist you with your placement needs.
            Whether you're seeking internships, work experience, or job
            placements, we’re here to help you every step of the way.
          </p>
          <Link to="./wbt-support" className="career-link">
            {">>> More"}
          </Link>
        </div>
      </div>
      <div className="enjoy">
        <Heading
          title="Enjoy"
          backgroundColor="#fff"
          textColor="#00007B"
          toMore={false}
        />
        <p>
          At Stanley College, we celebrate diversity and foster an inclusive
          learning environment.We encourage you to participate in student clubs,
          societies, and volunteer initiatives to expand your network, make new
          friends, and develop a sense of belonging within the college
          community.
        </p>
        <img src={oval4} alt="" className="oval4" />
        <img src={oval4} alt="" className="oval5" />
      </div>

      <SecondHeading
        title="Meet Our Student Representatives"
        backgroundColor="#fff"
        textColor="#00007B"
        toMore={true}
        toLink="/important-contacts"
      />
      <StudentRepre studentRepresentative={studentRepresentative} />
      <Heading
        title="FAQs"
        backgroundColor="#00007B"
        textColor="#fff"
        toMore={false}
      />
      <div className="faqs">
        <div className="faqs-content">
          Find answers to the questions we get asked the most about studying at
          Stanley College.
        </div>
        <QAList qaList={qaList} />
      </div>

      {/*       <div>
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
      </div> */}

      <Footer />
    </div>
  );
}

export default Home;
