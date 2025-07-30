import { useEffect, useState } from "react";
import defaultStudentImage from "../assets/images/default-welcome.png";

export default function useStudentRe() {
  const [studentRepresentatives, setStudentRepresentatives] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const res = await fetch(
          "https://script.google.com/macros/s/AKfycbyOxrUFoqpOwHpsThdHYLeqTC_FYbAJ1DiR-HKxlrJAlOfOBlasmOIwJdSX9QMm6hUF/exec?sheet=studentrecontact"
        );
        const data = await res.json();

        const checkImage = (url) =>
          new Promise((resolve) => {
            if (!url) return resolve(defaultStudentImage);
            const img = new Image();
            img.src = url;
            img.onload = () => resolve(url);
            img.onerror = () => resolve(defaultStudentImage);
          });

        const checkedStudents = await Promise.all(
          data.map(async (student) => ({
            ...student,
            image: await checkImage(student.image),
          }))
        );

        setStudentRepresentatives(checkedStudents);
      } catch (err) {
        console.error("Error loading student data", err);
      }
    };

    fetchStudents();
  }, []);

  return { studentRepresentatives };
}
