import React from "react";
import "../styles/studentRepre.css";

function StudentRepre({ studentRepresentative }) {
  return (
    <div className="student-repre-container">
      {studentRepresentative.map((student, index) => (
        <div key={index} className="student-repre-item">
          <img src={student.image} alt="" />
          <h3>{student.name}</h3>
          <h4>{student.position}</h4>
          <p>{student.description}</p>
        </div>
      ))}
    </div>
  );
}

export default StudentRepre;
