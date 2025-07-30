import React, { useState, useEffect } from "react";
import "../styles/welcome.css";
import Show from "../assets/images/show.png";
import defaultWelcomeBg from "../assets/images/default-welcome.png";
import learnWhite from "../assets/images/learnWhite.png";

function Welcome({
  backgroundPic,
  welcomeText1,
  welcomeText2,
  scrollTargetRef,
}) {
  const [currentBgPic, setCurrentBgPic] = useState(defaultWelcomeBg);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    if (!backgroundPic) {
      setCurrentBgPic(defaultWelcomeBg);
      setImageLoaded(true);
      return;
    }

    const img = new Image();
    img.onload = () => {
      setCurrentBgPic(backgroundPic);
      setImageLoaded(true);
    };
    img.onerror = () => {
      console.warn(
        `Failed to load background image: ${backgroundPic}, using default`
      );
      setCurrentBgPic(defaultWelcomeBg);
      setImageLoaded(true);
    };
    img.src = backgroundPic;

    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [backgroundPic]);

  const welcomePic = {
    backgroundImage: `url(${currentBgPic})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "calc(100vh - 70px)",
    opacity: imageLoaded ? 1 : 0.8,
    transition: "opacity 0.3s ease-in-out",
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
