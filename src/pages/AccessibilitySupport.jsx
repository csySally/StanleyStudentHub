import React, { useRef } from "react";
import Header from "../components/Header";
import Welcome from "../components/Welcome";
import Footer from "../components/Footer";
import ArrowHeading from "../components/ArrowHeading";
import Heading from "../components/Heading.jsx";
import StaffCard from "../components/StaffCard.jsx";
import SecondHeading from "../components/SecondHeading";
import backgroundPic from "../assets/images/accessibility-background.jpeg";
import {
  arrowHeadings,
  heading1,
  careCont,
  careStaff,
  secondH1,
  external,
  externalCardData,
} from "../config/accessibilityContentConfig.js";
import ellipse from "../assets/images/Ellipse.png";
import "../styles/accessibilitySupport.css";
import InfoCard from "../components/InfoCard.jsx";

function AccessibilitySupport() {
  const nextSectionRef = useRef(null);
  return (
    <div>
      <Header />
      <Welcome
        backgroundPic={backgroundPic}
        welcomeText="Accessibility Support"
        scrollTargetRef={nextSectionRef}
      />
      <div ref={nextSectionRef}>
        <Heading
          title={heading1}
          backgroundColor="#00007B"
          textColor="#fff"
          toMore={false}
        />
      </div>
      <ArrowHeading arrowHeadings={arrowHeadings[0]} />
      <div className="care-container">
        <div className="care-container-p">
          <p>{careCont}</p>
        </div>
        <div className="care-container-card">
          <StaffCard staffCard={careStaff} showAll={false} />
        </div>
      </div>
      <SecondHeading
        title={secondH1}
        backgroundColor="#fff"
        textColor="#00007B"
        toMore={false}
      />
      <div className="external-content">{external}</div>
      <img src={ellipse} className="ellipse" />
      <InfoCard cardData={externalCardData} />
      <Footer />
    </div>
  );
}

export default AccessibilitySupport;
