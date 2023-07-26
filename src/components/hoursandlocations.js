import React from "react";
export default function HoursAndLocations() {
  return (
    <div className="container">
      <p className="hours-locations-heading">HOURS & LOCATIONS</p>
      <div>
        <div className="hours-locations-container">
          <div className="tt-accordion">
            <p className="tt-hour-location">Temple Terrace</p>
            <div className="tt-info">
              <p>11508 N 56th Street, Temple Terrace, FL 33617</p>
              <p>813-437-3474</p>
              <p>info@halfmoonseafood.com</p>
              <p>GET DIRECTIONS</p>
              <p>Tuesday - Saturday - 11 am - 9 pm</p>
              <p>Tuesday - Saturday - 11 am - 9 pm</p>
            </div>
          </div>
          <p className="sw-hour-location">Sparkman Wharf</p>
        </div>
      </div>
    </div>
  );
}
