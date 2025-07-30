import React, { useRef } from "react";
import Header from "../components/Header";
import Welcome from "../components/welcome";
import Footer from "../components/Footer";
import ArrowHeading from "../components/ArrowHeading";
import Heading from "../components/Heading.jsx";
import StaffCard from "../components/StaffCard.jsx";
import SecondHeading from "../components/SecondHeading";
import {
  arrowHeadings,
  heading1,
  careCont,
  careStaff,
  secondH1,
  external,
  externalCardData,
} from "../config/accessibilityContentConfig.js";
import ellipse from "../assets/images/Ellips.png";
import "../styles/accessibilitySupport.css";
import InfoCard from "../components/InfoCard.jsx";
import { motion } from "framer-motion";
import useWelcomePicture from "../hooks/useWelcomePicture.js";

function AccessibilitySupport() {
  const nextSectionRef = useRef(null);
  const { welcomePicture } = useWelcomePicture();

  return (
    <div>
      <Header />
      <Welcome
        backgroundPic={welcomePicture.accessibility}
        welcomeText1="Accessibility"
        welcomeText2="Support"
        scrollTargetRef={nextSectionRef}
      />
      <div ref={nextSectionRef}>
        <Heading
          title={heading1}
          backgroundColor="#006662"
          textColor="#fffffe"
          toMore={false}
        />
      </div>
      <ArrowHeading arrowHeadings={arrowHeadings[0]} />

      <div className="care-container">
        <div className="care-container-p">
          <motion.section
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <p>{careCont}</p>
          </motion.section>
        </div>
        <div className="care-container-card">
          <StaffCard staffCard={careStaff} showAll={false} />
        </div>
      </div>

      <motion.section
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <SecondHeading
          title={secondH1}
          backgroundColor="#fffffe"
          textColor="#006662"
          toMore={false}
        />
        <div className="external-content">{external}</div>
        <img src={ellipse} className="ellipse" />
        <InfoCard cardData={externalCardData} />
      </motion.section>
      <Footer />
    </div>
  );
}

export default AccessibilitySupport;
