import React, { useRef } from "react";
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
import useGoogleCalendar from "../hooks/useGoogleCalendar.js";
import useCarouselData from "../hooks/useCarouselData.js";
import { format, isAfter } from "date-fns";
import {
  welcomeText,
  heading1,
  heading2,
  heading3,
  heading4,
  secondHeading1,
  secondHeading2,
  secondHeading3,
  secondHeading4,
  homeSlides,
  homeSlides2,
  homeOuterLink,
  EventCards,
  DiscoverCards,
  homeCardData,
  studentRepresentative,
  qaList,
  quickAccess,
  careerContent,
  enjoyContent,
  faqContent,
} from "../config/homeContentConfig";

import "../styles/home.css";

function Home() {
  const nextSectionRef = useRef(null);
  const { events } = useGoogleCalendar();
  const yesterday = new Date() - 24 * 60 * 60 * 1000; // 24 hours ago
  const uniqueDateEvents = [];
  const seenDates = new Set();

  events
    .filter((event) => isAfter(event.start, yesterday))
    .sort((a, b) => a.start - b.start)
    .forEach((event) => {
      const dayStr = format(event.start, "yyyy-MM-dd");
      if (!seenDates.has(dayStr) && uniqueDateEvents.length < 3) {
        seenDates.add(dayStr);
        uniqueDateEvents.push(event);
      }
    });

  return (
    <div>
      <Header />
      <Welcome
        backgroundPic={backgroundPic}
        welcomeText={welcomeText}
        scrollTargetRef={nextSectionRef}
      />
      <div className="slogan" ref={nextSectionRef}>
        <img src={slogan} alt="" />
      </div>
      <Heading
        title={heading1}
        backgroundColor="#00007B"
        textColor="#fff"
        toMore={false}
      />
      <SwiperCom />
      <Heading
        title={heading2}
        backgroundColor="#00007B"
        textColor="#fff"
        toMore={true}
        toLink="/events-and-activities"
        isLink={true}
      />
      <div className="event-cards-container">
        <EventCard cards={uniqueDateEvents} />
      </div>
      <Heading
        title={heading3}
        backgroundColor="#fff"
        textColor="#00007B"
        toMore={false}
      />
      <div className="discover-cards-container">
        <Discover cards={DiscoverCards} />
      </div>
      <SecondHeading
        title={secondHeading1}
        backgroundColor="#fff"
        textColor="#00007B"
        toMore={false}
      />
      <InfoCard cardData={homeCardData} />
      <Heading
        title={heading4}
        backgroundColor="#00007B"
        textColor="#fff"
        toMore={false}
      />
      <div className="accessContent">
        <p>{quickAccess}</p>
      </div>
      <div className="home-outerlink-container">
        <Outerlink outerLink={homeOuterLink} />
        <img src={oval3} alt="" className="oval3" />
      </div>

      <SecondHeading
        title={secondHeading3}
        backgroundColor="#00007B"
        textColor="#fff"
        toMore={false}
      />
      <div className="career">
        <div className="career-img">
          <img src={career} />
        </div>
        <div className="career-content">
          <p>{careerContent}</p>
          <Link to="/wbt-support" className="career-link">
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
        <p>{enjoyContent}</p>
        <img src={oval4} alt="" className="oval4" />
        <img src={oval4} alt="" className="oval5" />
      </div>

      <SecondHeading
        title={secondHeading4}
        backgroundColor="#fff"
        textColor="#00007B"
        toMore={true}
        toLink="/important-contacts"
        isLink={true}
      />
      <StudentRepre studentRepresentative={studentRepresentative} />
      <Heading
        title="FAQs"
        backgroundColor="#00007B"
        textColor="#fff"
        toMore={false}
      />
      <div className="faqs">
        <div className="faqs-content">{faqContent}</div>
        <QAList qaList={qaList} />
      </div>

      <Footer />
    </div>
  );
}

export default Home;
