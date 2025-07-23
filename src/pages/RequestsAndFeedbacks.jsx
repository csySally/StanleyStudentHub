import React, { useRef } from "react";
import Header from "../components/Header";
import Welcome from "../components/Welcome.jsx";
import Footer from "../components/Footer";
import Heading from "../components/Heading.jsx";
import ArrowHeading from "../components/ArrowHeading";
import Outerlink from "../components/Outerlink";
import QuickLinks from "../components/QuickLinks";
import { motion } from "framer-motion";
import useWelcomePicture from "../hooks/useWelcomePicture.js";

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

import "../styles/requests&feedback.css";

function RequestsAndFeedbacks() {
  const nextSectionRef = useRef(null);

  const { welcomePicture } = useWelcomePicture();
  return (
    <div>
      <Header />
      <Welcome
        backgroundPic={welcomePicture.requests}
        welcomeText1="Requests and"
        welcomeText2="Feedbacks"
        scrollTargetRef={nextSectionRef}
      />
      <motion.section
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div ref={nextSectionRef}>
          <Heading
            title={heading1}
            backgroundColor="#006662"
            textColor="#fffffe"
            toMore={false}
          />
        </div>
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
      </motion.section>
      <motion.section
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <Heading
          title={heading2}
          backgroundColor="#fffffe"
          textColor="#006662"
          toMore={false}
        />
        <QuickLinks quickLinks={links} />
      </motion.section>
      <Footer />
    </div>
  );
}

export default RequestsAndFeedbacks;
