import React, { useRef } from "react";
import Header from "../components/Header";
import Welcome from "../components/welcome";
import Heading from "../components/Heading";
import Footer from "../components/Footer";
import StaffCard from "../components/StaffCard";
import BigContent from "../components/BigContent";
import InfoCard from "../components/InfoCard";
import SecondHeading from "../components/SecondHeading";
import QAList from "../components/Q&A/QAList";
import ellipse from "../assets/images/Ellipse.png";
import {
  heading1,
  heading2,
  heading3,
  secondHeading1,
  studentSupport,
  otherServices,
  supportCardData,
  qaList,
} from "../config/studentSupportContentConfig";
import "../styles/studentSupport.css";
import { motion } from "framer-motion";
import useWelcomePicture from "../hooks/useWelcomePicture.js";

function StudentSupport() {
  const nextSectionRef = useRef(null);
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
        backgroundPic={welcomePicture.student}
        welcomeText="Student Support"
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
      <motion.section
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <InfoCard cardData={supportCardData} />
        <img src={ellipse} className="ellipse" />
      </motion.section>
      <motion.section
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <SecondHeading
          title={secondHeading1}
          backgroundColor="#fff"
          textColor="#00007B"
          toMore={false}
        />
        <StaffCard staffCard={studentSupport} showAll={true} />
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
          toMore={false}
        />
        <BigContent bigContent={otherServices} />
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
        <QAList qaList={qaList} />
      </motion.section>
      <Footer />
    </div>
  );
}

export default StudentSupport;
