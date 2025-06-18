import React, { useState } from "react";
import Header from "../components/Header";
import Welcome from "../components/Welcome";
import Footer from "../components/Footer";
import Heading from "../components/Heading";
import SecondHeading from "../components/SecondHeading";
import StuffCard from "../components/StuffCard";
import BigContent from "../components/BigContent";
import "../styles/importantContact.css";

import backgroundPic from "../assets/images/contacts-background.jpeg";
import {
  heading1,
  executive,
  falcuty,
  support,
  employment,
  studentRe,
  otherContacts,
  otherContacts2,
} from "../config/contactContentConfig.js";

function ImportantContacts() {
  const [showEx, setShowEx] = useState(false);
  const [showFa, setShowFa] = useState(false);
  const [showSu, setShowSu] = useState(false);
  const [showEm, setShowEm] = useState(false);

  return (
    <div>
      <Header />
      <Welcome backgroundPic={backgroundPic} welcomeText="Important Contacts" />
      <Heading
        title={heading1}
        backgroundColor="#00007B"
        textColor="#fff"
        toMore={false}
      />
      <SecondHeading
        title="Executive Management Team"
        backgroundColor="#fff"
        textColor="#00007B"
        toMore={true}
        isLink={false}
        onMoreClick={() => setShowEx(!showEx)}
      />
      <StuffCard stuffCard={executive} showAll={showEx} />
      <SecondHeading
        title="Faculty Manager"
        backgroundColor="#fff"
        textColor="#00007B"
        toMore={true}
        isLink={false}
        onMoreClick={() => setShowFa(!showFa)}
      />
      <StuffCard stuffCard={falcuty} showAll={showFa} />
      <SecondHeading
        title="Student Support Team"
        backgroundColor="#fff"
        textColor="#00007B"
        toMore={true}
        isLink={false}
        onMoreClick={() => setShowSu(!showSu)}
      />
      <StuffCard stuffCard={support} showAll={showSu} />
      <SecondHeading
        title="Empolyment Team"
        backgroundColor="#fff"
        textColor="#00007B"
        toMore={false}
        onMoreClick={() => setShowEm(!showEm)}
      />
      <StuffCard stuffCard={employment} showAll={showEm} />
      <Heading
        title="Student Representatives"
        backgroundColor="#00007B"
        textColor="#fff"
        toMore={false}
      />
      <BigContent bigContent={studentRe} />
      <Heading
        title="Other Contacts"
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
