import { useEffect, useState } from "react";

export default function useWelcomePicture() {
  const [welcomePicture, setWelcomePicture] = useState({});

  useEffect(() => {
    fetch(
      "https://script.google.com/macros/s/AKfycbyOxrUFoqpOwHpsThdHYLeqTC_FYbAJ1DiR-HKxlrJAlOfOBlasmOIwJdSX9QMm6hUF/exec?sheet=welcomepicture"
    )
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          setWelcomePicture(data[0]);
        } else {
          console.error("Invalid welcome picture data:", data);
        }
      })
      .catch((err) => console.error("Error loading welcome picture", err));
  }, []);

  return { welcomePicture };
}
