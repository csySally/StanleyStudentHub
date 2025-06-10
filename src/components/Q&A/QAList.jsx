import React from "react";
import "../../styles/qalist.css";
import QAItem from "./QAItem";

function QAList({ qaList }) {
  return (
    <div className="qalist-container">
      {qaList.map((qa, index) => (
        <QAItem key={index} qa={qa} />
      ))}
    </div>
  );
}

export default QAList;
