import { useEffect, useState } from "react";

export default function useStudentStory() {
  const [studentStories, setStudentStories] = useState([]);

  useEffect(() => {
    fetch(
      "https://script.google.com/macros/s/AKfycbyOxrUFoqpOwHpsThdHYLeqTC_FYbAJ1DiR-HKxlrJAlOfOBlasmOIwJdSX9QMm6hUF/exec?sheet=studentstory"
    )
      .then((res) => res.json())
      .then((data) => setStudentStories(data))
      .catch((err) => console.error("Error loading student data", err));
  }, []);

  return { studentStories };
}
