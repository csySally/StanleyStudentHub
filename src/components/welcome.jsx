import React from "react";
import "../styles/welcome.css";
import Show from "../assets/images/show.png";

function Welcome({ backgroundPic, welcomeText }) {
  const welcomePic = {
    backgroundImage: `url(${backgroundPic})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "calc(100vh - 70px)",
  };
  return (
    <div className="welcome" style={welcomePic}>
      <div className="welcome-overlay"></div>
      <div className="welcome-container">
        <p className="welcome-text">{welcomeText}</p>
      </div>
      <img src={Show} alt="" className="welcome-show-icon" />
    </div>
  );
}

export default Welcome;
