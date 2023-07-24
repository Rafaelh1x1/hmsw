import React from "react";
import ChooseLocation from "./chooseLocation";
export default function HoursAndLocations() {
  return (
    <div>
      <p>HOURS & LOCATIONS</p>
      <div>
        <div className="choose-location-container">
          <ChooseLocation text="Temple Terrace"></ChooseLocation>
          <ChooseLocation text="Sparkman Wharf"></ChooseLocation>
        </div>
        <p>11508 N 56th Street, Temple Terrace, FL 33617</p>
        <p>813-437-3474</p>
        <p>info@halfmoonseafood.com</p>
        <p>GET DIRECTIONS</p>
        <p>Tuesday - Saturday - 11 am - 9 pm</p>
        <p>Tuesday - Saturday - 11 am - 9 pm</p>
      </div>
    </div>
  );
}
