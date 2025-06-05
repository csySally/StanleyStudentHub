import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import StudentSupport from "./pages/StudentSupport";
import WBTSupport from "./pages/WBTSupport";
import AccessibilitySupport from "./pages/AccessibilitySupport";
import ITSupport from "./pages/ITSupport";
import EventsAndCalendar from "./pages/EventsAndCalendar";
import ImportantContacts from "./pages/ImportantContacts";
import RequestsAndFeedbacks from "./pages/RequestsAndFeedbacks";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/student-support" element={<StudentSupport />} />
          <Route path="/wbt-support" element={<WBTSupport />} />
          <Route
            path="/accessibility-support"
            element={<AccessibilitySupport />}
          />
          <Route path="/it-support" element={<ITSupport />} />
          <Route path="/events-and-calendar" element={<EventsAndCalendar />} />
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
