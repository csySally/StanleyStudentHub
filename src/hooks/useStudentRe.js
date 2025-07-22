import { useEffect, useState } from "react";

export default function useStudentRe() {
  const [studentRepresentatives, setStudentRepresentatives] = useState([]);

  useEffect(() => {
    fetch(
      "https://script.google.com/macros/s/AKfycbyOxrUFoqpOwHpsThdHYLeqTC_FYbAJ1DiR-HKxlrJAlOfOBlasmOIwJdSX9QMm6hUF/exec?sheet=studentrehome"
    )
      .then((res) => res.json())
      .then((data) => setStudentRepresentatives(data))
      .catch((err) => console.error("Error loading student data", err));
  }, []);

  return { studentRepresentatives };
}
