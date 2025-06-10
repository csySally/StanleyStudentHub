import React from "react";
import Header from "../components/Header";
import Welcome from "../components/Welcome";
import Footer from "../components/Footer";
import backgroundPic from "../assets/images/requests-background.jpeg";

function RequestsAndFeedbacks() {
  return (
    <div>
      <Header />
      <Welcome
        backgroundPic={backgroundPic}
        welcomeText="Requests and Feedbacks"
      />
      <h1>Requests and Feedbacks</h1>
      <Footer />
    </div>
  );
}

export default RequestsAndFeedbacks;
