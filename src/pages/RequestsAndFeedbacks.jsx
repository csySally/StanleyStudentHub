import React from "react";
import Header from "../components/Header";
import Welcome from "../components/Welcome";
import Footer from "../components/Footer";
import Heading from "../components/Heading.jsx";
import ArrowHeading from "../components/ArrowHeading";
import Outerlink from "../components/Outerlink";
import QuickLinks from "../components/QuickLinks";

import {
  heading1,
  heading2,
  arrowHeadings,
  feedbackContent,
  requestOurLink,
  feedbackMoreContent,
  feedbackMoreHeading,
  links,
} from "../config/feedbackContentConfig";

import backgroundPic from "../assets/images/requests-background.jpeg";
import "../styles/requests&feedback.css";

function RequestsAndFeedbacks() {
  return (
    <div>
      <Header />
      <Welcome
        backgroundPic={backgroundPic}
        welcomeText="Requests and Feedbacks"
      />
      <Heading
        title={heading1}
        backgroundColor="#00007B"
        textColor="#fff"
        toMore={false}
      />
      <ArrowHeading arrowHeadings={arrowHeadings[0]} />
      <div className="feedback-container">
        <div className="feedback-container-p">
          {feedbackContent.map((content, index) => (
            <p key={index}>{content}</p>
          ))}
        </div>
        <div className="feedback-container-card">
          <div className="feedback-container-card-inner">
            <Outerlink outerLink={requestOurLink} />
          </div>
          <div className="feedback-container-card-p">
            <h3>{feedbackMoreHeading}</h3>
            <p>
              {feedbackMoreContent.map((content, index) => (
                <li key={index}>{content}</li>
              ))}
            </p>
          </div>
        </div>
      </div>
      <Heading
        title={heading2}
        backgroundColor="#fff"
        textColor="#00007B"
        toMore={false}
      />
      <QuickLinks quickLinks={links} />
      <Footer />
    </div>
  );
}

export default RequestsAndFeedbacks;
