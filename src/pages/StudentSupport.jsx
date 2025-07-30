import React, { useRef } from "react";
import Header from "../components/Header";
import Welcome from "../components/welcome";
import Heading from "../components/Heading";
import Footer from "../components/Footer";
import StaffCard from "../components/StaffCard";
import BigContent from "../components/BigContent";
import InfoCard from "../components/InfoCard";
import SecondHeading from "../components/SecondHeading";
import halfSYellow from "../assets/icons/halfSYellow.png";
import QAList from "../components/Q&A/QAList";
import ellipse from "../assets/images/Ellips.png";
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
  const { welcomePicture } = useWelcomePicture();

  return (
    <div>
      <Header />
      <Welcome
        backgroundPic={welcomePicture.student}
        welcomeText1="Student"
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
          backgroundColor="#fffffe"
          textColor="#006662"
          toMore={false}
        />
        <div className="staffCard-container">
          <StaffCard staffCard={studentSupport} showAll={true} />
          <img src={halfSYellow} className="staffCard-halfS" />
        </div>
      </motion.section>
      <Heading
        title={heading2}
        backgroundColor="#006662"
        textColor="#fffffe"
        toMore={false}
      />
      <motion.section
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <BigContent bigContent={otherServices} />
      </motion.section>
      <Heading
        title={heading3}
        backgroundColor="#006662"
        textColor="#fffffe"
        toMore={false}
      />
      <div className="qaList-container">
        <motion.section
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <QAList qaList={qaList} />
        </motion.section>
      </div>

      <Footer />
    </div>
  );
}

export default StudentSupport;
