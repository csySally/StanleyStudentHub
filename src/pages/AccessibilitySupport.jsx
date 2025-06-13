import React from "react";
import Header from "../components/Header";
import Welcome from "../components/Welcome";
import Footer from "../components/Footer";
import ArrowHeading from "../components/ArrowHeading";
import backgroundPic from "../assets/images/accessibility-background.jpeg";
import { arrowHeadings } from "../config/accessibilityContentConfig.js";

function AccessibilitySupport() {
  return (
    <div>
      <Header />
      <Welcome
        backgroundPic={backgroundPic}
        welcomeText="Accessibility Support"
      />
      <h1>Accessibility Support</h1>
      <ArrowHeading arrowHeadings={arrowHeadings[0]} />

      <Footer />
    </div>
  );
}

export default AccessibilitySupport;
