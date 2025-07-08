import React, { useRef, useState } from "react";
import Header from "../components/Header";
import Welcome from "../components/Welcome";
import Footer from "../components/Footer";
import backgroundPic from "../assets/images/WBT-background.jpeg";
import ellipse from "../assets/images/Ellipse.png";
import {
  heading1,
  wbtCardData,
  secondH1,
  wbtSupport,
  heading2,
  studentStories,
} from "../config/wbtContentConfig";
import Heading from "../components/Heading";
import SecondHeading from "../components/SecondHeading";
import StaffCard from "../components/StaffCard";
import InfoCard from "../components/InfoCard";
import BigContent from "../components/BigContent";

import "../styles/wbtSupport.css";

function WBTSupport() {
  const nextSectionRef = useRef(null);

  const [activeCard, setActiveCard] = useState(null);

  const handleOpen = (type) => setActiveCard(type);
  const handleClose = () => setActiveCard(null);

  return (
    <div>
      <Header />
      <Welcome
        backgroundPic={backgroundPic}
        welcomeText="Placement & Employment Support"
        scrollTargetRef={nextSectionRef}
      />
      <div ref={nextSectionRef}>
        <Heading
          title={heading1}
          backgroundColor="#00007B"
          textColor="#fff"
          toMore={false}
        />
      </div>
      <InfoCard cardData={wbtCardData} />
      <img src={ellipse} className="ellipse" />
      <div className="card-container">
        {activeCard === null && (
          <div className="work-card">
            <div className="wbt-card">
              <h3>VET Students – Work-Based Training (WBT)</h3>
              <div>
                <p>
                  Get hands-on experience through structured Work-Based Training
                  (WBT).
                </p>
                <p>
                  WBT is a compulsory part of your qualification and counts as
                  class time. Placement is arranged by Stanley College in
                  partnership with host employers, and you are required to
                  complete a minimum number of hours.
                </p>
              </div>
              <button onClick={() => handleOpen("vet")}>View Details</button>
            </div>
            <div className="he-card">
              <h3>Higher Education Students – Internship & WIL</h3>
              <div>
                <p>
                  Transition from study to work with internships and WIL
                  (Work-Integrated Learning).
                </p>
                <p>
                  These placements are part of your academic program and may be
                  arranged by Stanley College or initiated by you. They help you
                  build real-world skills, connect with industry, and prepare
                  for your career.
                </p>
              </div>
              <button onClick={() => handleOpen("he")}>View Details</button>
            </div>
          </div>
        )}
        {activeCard === "vet" && (
          <div className="vet-card-content">
            <h1>VET Students – Work-Based Training (WBT)</h1>
            <h2>
              <button onClick={handleClose}>—</button>
            </h2>
            <SecondHeading
              title="What is WBT?"
              backgroundColor="#fff"
              textColor="#00007B"
              toMore={false}
            />
            <div className="what-is-wbt">
              <p>
                Work-Based Training (WBT) or Clinical Work Placement (CWP) is a
                <b> mandatory and assessable component</b> of many VET courses
                at Stanley College. It allows you to gain practical experience
                in real industry environments and counts as class time.
              </p>
              <ul>
                <li>Organised by Stanley College’s Employment Liaison Team</li>
                <li>
                  You must complete the prescribed hours/service periods to pass
                  the unit
                </li>
                <li>
                  During WBT, students must complete at least 20 course contact
                  hours per week
                </li>
                <li>
                  Some placements require full-time attendance (38–40
                  hours/week)
                </li>
              </ul>
            </div>
            <SecondHeading
              title="WBT Requirements by Course"
              backgroundColor="#fff"
              textColor="#00007B"
              toMore={false}
            />
            <div className="wbt-requirements">
              <table>
                <thead>
                  <tr>
                    <th>Stanley College Department</th>
                    <th>Course</th>
                    <th>
                      Allocated Hours – Work-Based Training (WBT)/ Clinical Work
                      Placement
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Commercial Cookery</td>
                    <td>SIT30821 Certificate III in Commercial Cookery</td>
                    <td>10 weeks/200 hours WBT (48 service periods)</td>
                  </tr>
                  <tr>
                    <td rowSpan="2">Hospitality</td>
                    <td>SIT30622 Certificate III in Hospitality</td>
                    <td>7 weeks/140 hours WBT (36 service periods)</td>
                  </tr>
                  <tr>
                    <td>
                      SIT50422 Diploma of Hospitality Management (Food and
                      Beverage)
                    </td>
                    <td>5 weeks WBT (108 hours) WBT (36 service periods)</td>
                  </tr>
                  <tr>
                    <td rowSpan="3">Health & Community Services</td>
                    <td>
                      CHC33021 Certificate III in Individual Support (Ageing)
                    </td>
                    <td>*Standard Course - 4 weeks/152 hours WBT</td>
                  </tr>
                  <tr>
                    <td>
                      CHC33021 Certificate III in Individual Support
                      (Disability)
                    </td>
                    <td>*Standard Course - 4 weeks/152 hours WBT</td>
                  </tr>
                  <tr>
                    <td>CHC52021 Diploma of Community Services</td>
                    <td>
                      **Standard Course - 14 weeks/560 hours Clinical Work
                      Placement
                    </td>
                  </tr>
                  <tr>
                    <td rowSpan="2">Early Childhood Education</td>
                    <td>
                      CHC30121 Certificate III in Early Childhood Education and
                      Care
                    </td>
                    <td>Standard Course - 11 weeks/264 hours WBT</td>
                  </tr>
                  <tr>
                    <td>
                      CHC50121 Diploma of Early Childhood Education and Care
                    </td>
                    <td>Standard Course - 12 weeks/288 hours WBT</td>
                  </tr>
                </tbody>
              </table>
              <p>
                *This course requires Work-Based Training placement to be
                completed full time (minimum 38 hours per week).
              </p>
              <p>
                **This course requires Clinical Work Placement to be completed
                full time (minimum 40 hours per week).
              </p>
              <button className="wbt-more">Learn More</button>
            </div>
            <SecondHeading
              title={secondH1}
              backgroundColor="#fff"
              textColor="#00007B"
              toMore={false}
            />
            <div className="wbt-support-staff">
              <StaffCard staffCard={wbtSupport} showAll={false} />
            </div>
            <button className="wbt-more">Learn More</button>
          </div>
        )}
        {activeCard === "he" && (
          <div className="he-card-content">
            <h1>Higher Education Students – Internship & WIL Support</h1>
            <h2>
              <button onClick={handleClose}>—</button>
            </h2>
            <SecondHeading
              title="What is Internship / WIL?"
              backgroundColor="#fff"
              textColor="#00007B"
              toMore={false}
            />
            <div className="what-is-he">
              <p>
                Internships, Fieldwork Placements or WIL (Work-Integrated
                Learning) are <b>academic units</b> designed to bridge your
                study and your future career. They give you real-world
                experience and help develop your professional identity.
              </p>
              <ul>
                <li>Placements are part of your degree</li>
                <li>
                  Can be arranged by Stanley or self-sourced (with approval)
                </li>
                <li>Usually unpaid and must comply with the Fair Work Act</li>
                <li>
                  Placement hours are treated as class time, not part of work
                  rights limits
                </li>
              </ul>
            </div>
            <SecondHeading
              title="Placement Requirements by Course"
              backgroundColor="#fff"
              textColor="#00007B"
              toMore={false}
            />
            <div className="wbt-requirements">
              <table>
                <thead>
                  <tr>
                    <th>Stanley College Program</th>
                    <th>Unit</th>
                    <th>Required Hours</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td rowSpan="2">Bachelor of Community Services</td>
                    <td>COS208 Fieldwork 1</td>
                    <td>Placement 200 hours in total</td>
                  </tr>
                  <tr>
                    <td>COS308 Fieldwork 2</td>
                    <td>Placement 200 hours in total</td>
                  </tr>
                  <tr>
                    <td>
                      Bachelor of Information and Communication Technology
                    </td>
                    <td>ICT303 ICT Practicum</td>
                    <td>Placement 100-120 hours in total</td>
                  </tr>
                  <tr>
                    <td>Master of Business (all specialisations)</td>
                    <td>MBS604 WIL/Research project preparation</td>
                    <td>Placement 100-120 hours in total</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <button className="he-more">Learn More</button>
          </div>
        )}
      </div>

      <Heading
        title={heading2}
        backgroundColor="#00007B"
        textColor="#fff"
        toMore={false}
      />
      <BigContent bigContent={studentStories} />
      <Footer />
    </div>
  );
}

export default WBTSupport;
