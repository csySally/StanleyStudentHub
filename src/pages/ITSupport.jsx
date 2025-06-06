import React from "react";
import Header from "../components/header";
import Welcome from "../components/welcome";
import Footer from "../components/footer";
import backgroundPic from "../assets/images/it-background.jpeg";

function ITSupport() {
  return (
    <div>
      <Header />
      <Welcome backgroundPic={backgroundPic} welcomeText="IT Support" />
      <h1>IT Support</h1>
      <Footer />
    </div>
  );
}

export default ITSupport;
