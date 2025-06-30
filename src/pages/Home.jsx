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
        backgroundColor="#fcd60b"
        textColor="#006662"
        toMore={false}
      />
      <SwiperCom slides={homeSlides} />
      <Heading
        title={heading2}
        backgroundColor="#fcd60b"
        textColor="#006662"
        toMore={true}
        toLink="/events-and-activities"
      />
      <div className="event-cards-container">
        <EventCard cards={EventCards} />
      </div>
      <Heading
        title={heading3}
        backgroundColor="#006662"
        textColor="#fcd60b"
        toMore={false}
      />
      <div className="discover-cards-container">
        <Discover cards={DiscoverCards} />
      </div>
      <SecondHeading
        title={secondHeading1}
        backgroundColor="#006662"
        textColor="#fcd60b"
        toMore={false}
      />
      <InfoCard cardData={homeCardData} />
      <Heading
        title={heading4}
        backgroundColor="#fcd60b"
        textColor="#006662"
        toMore={false}
      />
      <SwiperCom slides={homeSlides2} />
      <SecondHeading
        title={secondHeading2}
        backgroundColor="#fff"
        textColor="#006662"
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
        backgroundColor="#fcd60b"
        textColor="#006662"
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
          backgroundColor="#006662"
          textColor="#fcd60b"
          toMore={false}
        />
        <p>{enjoyContent}</p>
        <img src={oval4} alt="" className="oval4" />
        <img src={oval4} alt="" className="oval5" />
      </div>

      <SecondHeading
        title={secondHeading4}
        backgroundColor="#006662"
        textColor="#fcd60b"
        toMore={true}
        toLink="/important-contacts"
      />
      <StudentRepre studentRepresentative={studentRepresentative} />
      <Heading
        title="FAQs"
        backgroundColor="#fcd60b"
        textColor="#006662"
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
