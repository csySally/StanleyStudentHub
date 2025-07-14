import { useEffect, useState } from "react";

export default function useCarouselData() {
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    fetch(
      "https://script.google.com/macros/s/AKfycbxZXAfxZkryZQ1XFNm5qaHJ-p_ZLw0yOFxzq97ccv4-MlnuQ913_9F9n1VC788C-KOR/exec?sheet=carousel"
    )
      .then((res) => res.json())
      .then((data) => setSlides(data))
      .catch((err) => console.error("Error loading carousel data", err));
  }, []);

  return { slides };
}
