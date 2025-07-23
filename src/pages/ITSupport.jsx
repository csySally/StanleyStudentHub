import React, { useRef } from "react";
import Header from "../components/Header";
import Welcome from "../components/Welcome.jsx";
import Footer from "../components/Footer";
import Heading from "../components/Heading.jsx";
import backgroundPic from "../assets/images/it-background.jpeg";
import ArrowHeading from "../components/ArrowHeading";
import StaffCard from "../components/StaffCard.jsx";
import QAList from "../components/Q&A/QAList";
import { motion } from "framer-motion";

import "../styles/itSupport.css";

import {
  heading1,
  heading2,
  arrowHeadings,
  ITCont,
  ITStaff,
  qaList,
} from "../config/ITContentConfig.js";

function ITSupport() {
  const nextSectionRef = useRef(null);
  return (
    <div>
      <Header />
      <Welcome
        backgroundPic={backgroundPic}
        welcomeText="IT Support"
        scrollTargetRef={nextSectionRef}
      />
      {/*       <motion.section
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
      >
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
            <p>{ITCont}</p>
          </div>
          <div className="care-container-card">
            <StaffCard staffCard={ITStaff} showAll={false} />
          </div>
        </div>
      </motion.section> */}
      <motion.section
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <Heading
          title={heading2}
          backgroundColor="#fffffe"
          textColor="#006662"
          toMore={false}
        />
        <QAList qaList={qaList} />
      </motion.section>
      <Footer />
    </div>
  );
}

export default ITSupport;
