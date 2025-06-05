import React from "react";
import Header from "../components/header";
import Welcome from "../components/welcome";
import Footer from "../components/footer";
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
