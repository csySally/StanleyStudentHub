import React, { useRef } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Welcome from "../components/welcome";
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
import slogan from "../assets/images/slogan.png";
import oval3 from "../assets/images/oval3.png";
import oval4 from "../assets/images/oval4.png";
import career from "../assets/images/career.png";
import useGoogleCalendar from "../hooks/useGoogleCalendar.js";
import useCarouselData from "../hooks/useCarouselData.js";
import useStudentRe from "../hooks/useStudentRe.js";
import useWelcomePicture from "../hooks/useWelcomePicture.js";
import { motion } from "framer-motion";
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

  const getNext3Events = (events) => {
    const now = new Date();

    const futureEvents = events.filter((event) => {
      const isInFuture = event.start >= now;
      return isInFuture;
    });

    const sortedEvents = futureEvents.sort((a, b) => a.start - b.start);
    const next3Events = sortedEvents.slice(0, 3);
    return next3Events;
  };

  const uniqueDateEvents = getNext3Events(events);

  const { studentRepresentatives } = useStudentRe();

  const { welcomePicture, loading } = useWelcomePicture();

  if (loading) {
    return (
      <div>
        <Header />
        <div
          style={{
            background: "#f0f0f0",
          }}
        ></div>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <Welcome
        backgroundPic={welcomePicture.home}
        welcomeText={welcomeText}
        scrollTargetRef={nextSectionRef}
      />
      <div className="slogan" ref={nextSectionRef}>
        <img src={slogan} alt="" />
      </div>
      <motion.section
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <Heading
          title={heading1}
          backgroundColor="#00007B"
          textColor="#fff"
          toMore={false}
        />
        <SwiperCom />
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
      >
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
      </motion.section>
      <motion.section
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <Heading
          title={heading3}
          backgroundColor="#fff"
          textColor="#00007B"
          toMore={false}
        />
        <div className="discover-cards-container">
          <Discover cards={DiscoverCards} />
        </div>
      </motion.section>
      <motion.section
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
      >
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
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
      >
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
        <StudentRepre studentRepresentative={studentRepresentatives} />
      </motion.section>
      <motion.section
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
      >
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
      </motion.section>

      <Footer />
    </div>
  );
}

export default Home;
