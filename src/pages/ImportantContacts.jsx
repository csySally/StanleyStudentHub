import React, { useState, useRef } from "react";
import Header from "../components/Header";
import Welcome from "../components/Welcome.jsx";
import Footer from "../components/Footer";
import Heading from "../components/Heading";
import SecondHeading from "../components/SecondHeading";
import StuffCard from "../components/StuffCard";
import BigContent from "../components/BigContent";
import "../styles/importantContact.css";

import backgroundPic from "../assets/images/contacts-background.jpeg";
import {
  heading1,
  heading2,
  heading3,
  executive,
  falcuty,
  support,
  employment,
  studentRe,
  otherContacts,
  otherContacts2,
  secondHeading1,
  secondHeading2,
  secondHeading3,
  secondHeading4,
} from "../config/contactContentConfig.js";

function ImportantContacts() {
  const [showEx, setShowEx] = useState(false);
  const [showFa, setShowFa] = useState(false);
  const [showSu, setShowSu] = useState(false);
  const [showEm, setShowEm] = useState(false);

  const nextSectionRef = useRef(null);

  return (
    <div>
      <Header />
      <Welcome
        backgroundPic={backgroundPic}
        welcomeText="Important Contacts"
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
      <SecondHeading
        title={secondHeading1}
        backgroundColor="#fff"
        textColor="#00007B"
        toMore={true}
        isLink={false}
        onMoreClick={() => setShowEx(!showEx)}
      />
      <StuffCard stuffCard={executive} showAll={showEx} />
      <SecondHeading
        title={secondHeading2}
        backgroundColor="#fff"
        textColor="#00007B"
        toMore={true}
        isLink={false}
        onMoreClick={() => setShowFa(!showFa)}
      />
      <StuffCard stuffCard={falcuty} showAll={showFa} />
      <SecondHeading
        title={secondHeading3}
        backgroundColor="#fff"
        textColor="#00007B"
        toMore={true}
        isLink={false}
        onMoreClick={() => setShowSu(!showSu)}
      />
      <StuffCard stuffCard={support} showAll={showSu} />
      <SecondHeading
        title={secondHeading4}
        backgroundColor="#fff"
        textColor="#00007B"
        toMore={false}
        onMoreClick={() => setShowEm(!showEm)}
      />
      <StuffCard stuffCard={employment} showAll={showEm} />
      <Heading
        title={heading2}
        backgroundColor="#00007B"
        textColor="#fff"
        toMore={false}
      />
      <BigContent bigContent={studentRe} />
      <Heading
        title={heading3}
        backgroundColor="#fff"
        textColor="#00007B"
        toMore={false}
      />
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
      <Footer />
    </div>
  );
}

export default ImportantContacts;
