import React from "react";
import "../styles/welcome.css";
import Show from "../assets/images/show.png";

function Welcome({ backgroundPic, welcomeText, scrollTargetRef }) {
  const welcomePic = {
    backgroundImage: `url(${backgroundPic})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "calc(100vh - 70px)",
  };

  const handleScroll = () => {
    if (scrollTargetRef?.current) {
      scrollTargetRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="welcome" style={welcomePic}>
      <div className="welcome-overlay"></div>
      <div className="welcome-container">
        <p className="welcome-text">{welcomeText}</p>
      </div>
      <img
        src={Show}
        alt=""
        className="welcome-show-icon"
        onClick={handleScroll}
      />
    </div>
  );
}

export default Welcome;
