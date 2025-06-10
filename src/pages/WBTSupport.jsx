import React from "react";
import Header from "../components/Header";
import Welcome from "../components/Welcome";
import Footer from "../components/Footer";
import backgroundPic from "../assets/images/WBT-background.jpeg";

function WBTSupport() {
  return (
    <div>
      <Header />
      <Welcome backgroundPic={backgroundPic} welcomeText="WBT Support" />
      <h1>WBTSupport</h1>
      <Footer />
    </div>
  );
}

export default WBTSupport;
