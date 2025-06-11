import React from "react";
import Header from "../components/Header";
import Welcome from "../components/Welcome";
import Heading from "../components/Heading";
import Footer from "../components/Footer";
import StuffCard from "../components/StuffCard";
import BigContent from "../components/BigContent";
import InfoCard from "../components/InfoCard";
import SecondHeading from "../components/SecondHeading";
import backgroundPic from "../assets/images/support-background.jpeg";
import ellipse from "../assets/images/Ellipse.png";
import {
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
        title="We are Here to Help"
        backgroundColor="#00007B"
        textColor="#fff"
        toMore={false}
      />
      <InfoCard cardData={supportCardData} />
      <img src={ellipse} className="ellipse" />
      <SecondHeading
        title="Book a one-on-one 15-minute appointment"
        backgroundColor="#fff"
        textColor="#00007B"
        toMore={false}
      />
      <StuffCard stuffCard={studentSupport} />
      <Heading
        title="Other Services"
        backgroundColor="#00007B"
        textColor="#fff"
        toMore={false}
      />
      <BigContent bigContent={otherServices} />
      <Footer />
    </div>
  );
}

export default StudentSupport;
