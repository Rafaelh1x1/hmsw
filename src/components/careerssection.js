import React from "react";

export default function CareerSection() {
  return (
    <div className="container">
      <div className="careers-section">
        <div className="careers-img-container">
          <img
            src={require("./images/careers-img1.jpg")}
            alt="Pelicans flying in a group"
            width="100%vw"
            height="auto"
            className="careers-banner-img"
          />
          <p className="careers-banner-text">JOIN THE TEAM</p>
        </div>
        <div className="careers-description-container">
          <p className="careers-description-text">
            We’d love to have you join our team! Please use the form below to
            apply. Feel free to send in your resume even if you don't see the
            position you're looking for listed.
          </p>
          <p className="apply-now-btn">APPLY NOW</p>
        </div>
      </div>
    </div>
  );
}
