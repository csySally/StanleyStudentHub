import React from "react";
import Header from "../components/header";
import Welcome from "../components/welcome";
import Footer from "../components/footer";
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
