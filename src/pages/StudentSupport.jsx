import React from "react";
import Header from "../components/header";
import Welcome from "../components/welcome";
import Footer from "../components/footer";
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
