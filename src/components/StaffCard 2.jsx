import React from "react";
import "../styles/staffCard.css";

function StaffCard({ staffCard, showAll }) {
  return (
    <div className={`staffCard-container ${showAll ? "" : "hide"}`}>
      {staffCard.map((staff, index) => (
        <div key={index} className="staffCard-container-item">
          <div className="staffCard-item-img">
            <img src={staff.image} alt="" />
          </div>
          <div className="staffCard-item-content">
            <h3>{staff.title}</h3>
            <h4>{staff.name}</h4>
            <h5>{staff.campus}</h5>
            <h5 style={{ display: staff.email ? "block" : "none" }}>
              {staff.email}
            </h5>
            {staff.button && (
              <button
                onClick={() => {
                  if (staff.link) {
                    window.open(staff.link, "_blank");
                  }
                }}
                style={{ cursor: staff.link ? "pointer" : "default" }}
              >
                {staff.button}
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default StaffCard;
