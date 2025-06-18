import React from "react";
import Header from "../components/Header";
import Welcome from "../components/Welcome";
import Heading from "../components/Heading";
import Footer from "../components/Footer";
import StuffCard from "../components/StuffCard";
import BigContent from "../components/BigContent";
import InfoCard from "../components/InfoCard";
import SecondHeading from "../components/SecondHeading";
import QAList from "../components/Q&A/QAList";
import backgroundPic from "../assets/images/support-background.jpeg";
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

function StudentSupport() {
  return (
    <div>
      <Header />
      <Welcome backgroundPic={backgroundPic} welcomeText="Student Support" />
      <Heading
        title={heading1}
        backgroundColor="#00007B"
        textColor="#fff"
        toMore={false}
      />
      <InfoCard cardData={supportCardData} />
      <img src={ellipse} className="ellipse" />
      <SecondHeading
        title={secondHeading1}
        backgroundColor="#fff"
        textColor="#00007B"
        toMore={false}
      />
      <StuffCard stuffCard={studentSupport} showAll={true} />
      <Heading
        title={heading2}
        backgroundColor="#00007B"
        textColor="#fff"
        toMore={false}
      />
      <BigContent bigContent={otherServices} />
      <Heading
        title={heading3}
        backgroundColor="#fff"
        textColor="#00007B"
        toMore={false}
      />
      <QAList qaList={qaList} />
      <Footer />
    </div>
  );
}

export default StudentSupport;
