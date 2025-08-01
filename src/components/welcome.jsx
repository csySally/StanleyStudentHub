import React, { useState, useEffect } from "react";
import "../styles/welcome.css";
import Show from "../assets/images/show.png";
import defaultWelcomeBg from "../assets/images/default-welcome.png";

function Welcome({ backgroundPic, welcomeText, scrollTargetRef }) {
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
