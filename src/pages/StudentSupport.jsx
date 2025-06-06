import React from "react";
import Header from "../components/Header";
import Welcome from "../components/Welcome";
import Footer from "../components/Footer";
import backgroundPic from "../assets/images/support-background.jpeg";

function StudentSupport() {
  return (
    <div>
      <Header />
      <Welcome backgroundPic={backgroundPic} welcomeText="Student Support" />

      <h1>Student Support</h1>
      <Footer />
    </div>
  );
}

export default StudentSupport;
