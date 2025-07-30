import { useEffect, useState } from "react";

export default function useWelcomePicture() {
  const [welcomePicture, setWelcomePicture] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWelcomePicture = async () => {
      try {
        setLoading(true);

        const response = await fetch(
          "https://script.google.com/macros/s/AKfycbyOxrUFoqpOwHpsThdHYLeqTC_FYbAJ1DiR-HKxlrJAlOfOBlasmOIwJdSX9QMm6hUF/exec?sheet=welcomepicture"
        );
        const data = await response.json();

        if (Array.isArray(data) && data.length > 0) {
          setWelcomePicture(data[0]);
        } else {
          console.error("Invalid welcome picture data:", data);
          setWelcomePicture({});
        }
      } catch (err) {
        console.error("Error loading welcome picture:", err);
        setWelcomePicture({});
      } finally {
        setLoading(false);
      }
    };

    fetchWelcomePicture();
  }, []);

  return { welcomePicture, loading };
}
