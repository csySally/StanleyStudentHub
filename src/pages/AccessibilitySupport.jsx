import React from "react";
import Header from "../components/Header";
import Welcome from "../components/Welcome";
import Footer from "../components/Footer";
import backgroundPic from "../assets/images/accessibility-background.jpeg";

function AccessibilitySupport() {
  return (
    <div>
      <Header />
      <Welcome
        backgroundPic={backgroundPic}
        welcomeText="Accessibility Support"
      />
      <h1>Accessibility Support</h1>
      <Footer />
    </div>
  );
}

export default AccessibilitySupport;
