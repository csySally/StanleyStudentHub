import React, { useRef } from "react";
import Header from "../components/Header";
import Welcome from "../components/welcome.jsx";
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

  const { welcomePicture, loading } = useWelcomePicture();

  if (loading) {
    return (
      <div>
        <Header />
        <div
          style={{
            background: "#f0f0f0",
          }}
        ></div>
      </div>
    );
  }
  return (
    <div>
      <Header />
      <Welcome
        backgroundPic={welcomePicture.requests}
        welcomeText1="Requests and"
        welcomeText2="Feedbacks"
        scrollTargetRef={nextSectionRef}
      />
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
          <motion.section
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            {" "}
            {feedbackContent.map((content, index) => (
              <p key={index}>{content}</p>
            ))}
          </motion.section>
        </div>
        <div className="feedback-container-card">
          <div className="feedback-container-card-inner">
            <motion.section
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <Outerlink outerLink={requestOurLink} />
            </motion.section>
          </div>
          <div className="feedback-container-card-p">
            <motion.section
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <h3>{feedbackMoreHeading}</h3>
              {feedbackMoreContent.map((content, index) => (
                <p key={index}>{content}</p>
              ))}
            </motion.section>
          </div>
        </div>
      </div>
      <Heading
        title={heading2}
        backgroundColor="#fffffe"
        textColor="#006662"
        toMore={false}
      />
      <motion.section
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <QuickLinks quickLinks={links} />
      </motion.section>
      <Footer />
    </div>
  );
}

export default RequestsAndFeedbacks;
