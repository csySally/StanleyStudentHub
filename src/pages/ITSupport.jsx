import React from "react";
import Header from "../components/Header";
import Welcome from "../components/Welcome";
import Footer from "../components/Footer";
import Heading from "../components/Heading.jsx";
import backgroundPic from "../assets/images/it-background.jpeg";
import ArrowHeading from "../components/ArrowHeading";
import StuffCard from "../components/StuffCard.jsx";
import QAList from "../components/Q&A/QAList";

import "../styles/itSupport.css";

import {
  heading1,
  heading2,
  arrowHeadings,
  ITCont,
  ITStuff,
  qaList,
} from "../config/ITContentConfig.js";

function ITSupport() {
  return (
    <div>
      <Header />
      <Welcome backgroundPic={backgroundPic} welcomeText="IT Support" />
      <Heading
        title={heading1}
        backgroundColor="#00007B"
        textColor="#fff"
        toMore={false}
      />
      <ArrowHeading arrowHeadings={arrowHeadings[0]} />
      <div className="care-container">
        <div className="care-container-p">
          <p>{ITCont}</p>
        </div>
        <div className="care-container-card">
          <StuffCard stuffCard={ITStuff} showAll={false} />
        </div>
      </div>
      <Heading
        title={heading2}
        backgroundColor="#fff"
        textColor="#00007B"
        toMore={false}
      />
      <QAList qaList={qaList} />
      <Footer />
    </div>
  );
}

export default ITSupport;
