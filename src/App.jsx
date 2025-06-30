import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import StudentSupport from "./pages/StudentSupport";
import WBTSupport from "./pages/WBTSupport";
import AccessibilitySupport from "./pages/AccessibilitySupport";
import ITSupport from "./pages/ITSupport";
import ImportantContacts from "./pages/ImportantContacts";
import RequestsAndFeedbacks from "./pages/RequestsAndFeedbacks";
import EventsAndActivities from "./pages/EventsAndActivities";
import ScrollToTop from "./components/ScrollToTop";

import upward from "./assets/icons/Upward.png";
import "react-datepicker/dist/react-datepicker.css";

function App() {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > window.innerHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {showScrollButton && (
        <div className="scroll-to-top">
          <img
            src={upward}
            alt="Scroll to top"
            style={{
              position: "fixed",
              bottom: 50,
              right: 50,
              width: 50,
              height: 50,
              cursor: "pointer",
              zIndex: 1000,
            }}
            onClick={scrollToTop}
          />
        </div>
      )}

      <Router basename="/studenthub/">
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/student-support" element={<StudentSupport />} />
          <Route path="/wbt-support" element={<WBTSupport />} />
          <Route
            path="/accessibility-support"
            element={<AccessibilitySupport />}
          />
          <Route path="/it-support" element={<ITSupport />} />
          <Route
            path="/events-and-activities"
            element={<EventsAndActivities />}
          />
          <Route path="/important-contacts" element={<ImportantContacts />} />
          <Route
            path="/requests-and-feedbacks"
            element={<RequestsAndFeedbacks />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
