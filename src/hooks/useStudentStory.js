import { useEffect, useState } from "react";
import defaultStoryImage from "../assets/images/default-welcome.png";

export default function useStudentStory() {
  const [studentStories, setStudentStories] = useState([]);

  useEffect(() => {
    const fetchStories = async () => {
      try {
        const res = await fetch(
          "https://script.google.com/macros/s/AKfycbyOxrUFoqpOwHpsThdHYLeqTC_FYbAJ1DiR-HKxlrJAlOfOBlasmOIwJdSX9QMm6hUF/exec?sheet=studentstory"
        );
        const data = await res.json();

        const checkImage = (url) =>
          new Promise((resolve) => {
            if (!url) return resolve(defaultStoryImage);
            const img = new Image();
            img.src = url;
            img.onload = () => resolve(url);
            img.onerror = () => resolve(defaultStoryImage);
          });

        const checkedStories = await Promise.all(
          data.map(async (story) => ({
            ...story,
            image: await checkImage(story.image),
          }))
        );

        setStudentStories(checkedStories);
      } catch (err) {
        console.error("Error loading student stories", err);
      }
    };

    fetchStories();
  }, []);

  return { studentStories };
}
