import React from "react";
import "../styles/welcome.css";
import Show from "../assets/images/show1.png";
import learnWhite from "../assets/images/learnWhite.png";
function Welcome({
  backgroundPic,
  welcomeText1,
  welcomeText2,
  scrollTargetRef,
}) {
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
        <span className="welcome-text">{welcomeText1}</span>&nbsp;&nbsp;
        <span className="welcome-text2">{welcomeText2}</span>
      </div>
      <img
        src={Show}
        alt=""
        className="welcome-show-icon"
        onClick={handleScroll}
      />
      <img src={learnWhite} alt="" className="welcome-learn-icon" />
    </div>
  );
}

export default Welcome;
