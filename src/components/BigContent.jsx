import React from "react";
import "../styles/bigContent.css";
import vector from "../assets/images/Vector.png";

function BigContent({ bigContent }) {
  return (
    <div className="bigContent-container">
      {bigContent.map((con, index) => (
        <div
          key={index}
          className={`bigContent-item ${con.reverse ? "reverse" : ""}`}
        >
          <div className="bigContent-item-image">
            <img
              src={con.image}
              className={`bigContent-item-image-image ${
                con.reverse ? "reverse" : ""
              }`}
            />
          </div>
          <div className="bigContent-item-content">
            <div className="bigContent-item-vector">
              <h2
                className={`bigContent-item-content-h2 ${
                  con.reverse ? "reverse" : ""
                }`}
              >
                {con.name}
              </h2>
              <img src={vector} />
            </div>
            <p
              className={`bigContent-item-content-content ${
                con.reverse ? "reverse" : ""
              }`}
            >
              {con.content.split("\n").map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
            </p>
            <button
              style={{ display: con.button ? "block" : "none" }}
              onClick={() => {
                if (con.email) {
                  const subject = encodeURIComponent(con.subject || "");
                  const body = encodeURIComponent(con.body || "");
                  window.open(
                    `https://mail.google.com/mail/?view=cm&fs=1&to=${con.email}&su=${subject}&body=${body}`,
                    "_blank"
                  );
                } else if (con.url) {
                  window.open(con.url);
                }
              }}
            >
              {con.button}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BigContent;
