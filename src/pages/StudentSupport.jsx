import React from "react";
import Header from "../components/Header";
import Welcome from "../components/Welcome";
import Footer from "../components/Footer";
import StuffCard from "../components/StuffCard";
import BigContent from "../components/BigContent";
import backgroundPic from "../assets/images/support-background.jpeg";
import {
  studentSupport,
  otherServices,
  qaList,
} from "../config/studentSupportContentConfig";

function StudentSupport() {
  return (
    <div>
      <Header />
      <Welcome backgroundPic={backgroundPic} welcomeText="Student Support" />

      <StuffCard stuffCard={studentSupport} />
      <BigContent bigContent={otherServices} />
      <Footer />
    </div>
  );
}

export default StudentSupport;
