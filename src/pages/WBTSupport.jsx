import React from "react";
import Header from "../components/header";
import Welcome from "../components/welcome";
import backgroundPic from "../assets/images/WBT-background.jpeg";

function WBTSupport() {
  return (
    <div>
      <Header />
      <Welcome backgroundPic={backgroundPic} welcomeText="WBT Support" />
      <h1>WBTSupport</h1>
    </div>
  );
}

export default WBTSupport;
