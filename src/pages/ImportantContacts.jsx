import React, { useState, useRef } from "react";
import Header from "../components/Header";
import Welcome from "../components/welcome.jsx";
import Footer from "../components/Footer";
import Heading from "../components/Heading";
import SecondHeading from "../components/SecondHeading";
import StaffCard from "../components/StaffCard.jsx";
import BigContent from "../components/BigContent";
import "../styles/importantContact.css";
import useStudentRe from "../hooks/useStudentReCon.js";
import useWelcomePicture from "../hooks/useWelcomePicture.js";

import {
  heading1,
  heading2,
  heading3,
  executive,
  falcuty,
  support,
  employment,
  otherContacts,
  otherContacts2,
  secondHeading1,
  secondHeading2,
  secondHeading3,
  secondHeading4,
} from "../config/contactContentConfig.js";
import { motion } from "framer-motion";

function ImportantContacts() {
  const [showEx, setShowEx] = useState(false);
  const [showFa, setShowFa] = useState(false);
  const [showSu, setShowSu] = useState(false);
  const [showEm, setShowEm] = useState(false);

  const nextSectionRef = useRef(null);

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
        backgroundPic={welcomePicture.contacts}
        welcomeText="Important Contacts"
        scrollTargetRef={nextSectionRef}
      />
      <div ref={nextSectionRef}>
        <Heading
          title={heading1}
          backgroundColor="#00007b"
          textColor="#ffffff"
          toMore={false}
        />
      </div>
      <div className="important-contact-container">
        {/*       <motion.section
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <SecondHeading
          title={secondHeading1}
          backgroundColor="#fffffe"
          textColor="#006662"
          toMore={true}
          isLink={false}
          onMoreClick={() => setShowEx(!showEx)}
        />
        <StaffCard staffCard={executive} showAll={showEx} />
      </motion.section>
      <motion.section
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <SecondHeading
          title={secondHeading2}
          backgroundColor="#fffffe"
          textColor="#006662"
          toMore={true}
          isLink={false}
          onMoreClick={() => setShowFa(!showFa)}
        />
        <StaffCard staffCard={falcuty} showAll={showFa} />
      </motion.section> */}
        <motion.section
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <SecondHeading
            title={secondHeading3}
            backgroundColor="#ffffff"
            textColor="#00007b"
            toMore={true}
            isLink={false}
            onMoreClick={() => setShowSu(!showSu)}
          />
          <StaffCard staffCard={support} showAll={showSu} />
        </motion.section>
        <motion.section
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <SecondHeading
            title={secondHeading4}
            textColor="#00007b"
            toMore={false}
            onMoreClick={() => setShowEm(!showEm)}
          />
          <StaffCard staffCard={employment} showAll={showEm} />
        </motion.section>
      </div>
      <Heading
        title={heading2}
        backgroundColor="#00007b"
        textColor="#fffffe"
        toMore={false}
      />
      <motion.section
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <BigContent bigContent={studentRepresentatives} />
      </motion.section>
      <Heading
        title={heading3}
        backgroundColor="#ffffff"
        textColor="#00007b"
        toMore={false}
      />
      <motion.section
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="other-contact">
          <div>
            {otherContacts.map((contact, index) => (
              <p key={index}>
                <b>{contact.name}:</b> {contact.detail}
              </p>
            ))}
          </div>
          <div>
            {otherContacts2.map((contact, index) => (
              <p key={index}>
                <b>{contact.name}:</b> {contact.detail}
              </p>
            ))}
          </div>
        </div>
      </motion.section>
      <Footer />
    </div>
  );
}

export default ImportantContacts;
