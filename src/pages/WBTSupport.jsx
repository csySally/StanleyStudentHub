import React, { useRef } from "react";
import Header from "../components/Header";
import Welcome from "../components/Welcome";
import Footer from "../components/Footer";
import backgroundPic from "../assets/images/WBT-background.jpeg";
import ellipse from "../assets/images/Ellipse.png";
import {
  heading1,
  wbtCardData,
  secondH1,
  wbtSupport,
  heading2,
  studentStories,
} from "../config/wbtContentConfig";
import Heading from "../components/Heading";
import SecondHeading from "../components/SecondHeading";
import StaffCard from "../components/StaffCard";
import InfoCard from "../components/InfoCard";
import BigContent from "../components/BigContent";

import "../styles/wbtSupport.css";

function WBTSupport() {
  const nextSectionRef = useRef(null);
  return (
    <div>
      <Header />
      <Welcome
        backgroundPic={backgroundPic}
        welcomeText="WBT Support"
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
      <InfoCard cardData={wbtCardData} />
      <img src={ellipse} className="ellipse" />
      <SecondHeading
        title={secondH1}
        backgroundColor="#fff"
        textColor="#00007B"
        toMore={false}
      />
      <StaffCard staffCard={wbtSupport} showAll={false} />
      <Heading
        title={heading2}
        backgroundColor="#00007B"
        textColor="#fff"
        toMore={false}
      />
      <BigContent bigContent={studentStories} />
      <Footer />
    </div>
  );
}

export default WBTSupport;
