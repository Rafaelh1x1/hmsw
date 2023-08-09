import React from "react";
export default function HoursAndLocations() {
  return (
    <div className="container">
      <p className="hours-locations-heading">HOURS & LOCATIONS</p>
      <div className="hours-location-maps-container">
        <div>
          <iframe
            title="sparkman-wharf"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3524.654297405623!2d-82.45034375944267!3d27.94324141514634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2c564dc7b430f%3A0x1fe42430e6df94b8!2sSparkman%20Wharf!5e0!3m2!1sen!2sus!4v1691439587167!5m2!1sen!2sus"
            width="500vw"
            height="500vw"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            className="hours-locations-map"
          ></iframe>
        </div>
        <div className="hours-locations-container">
          <p className="sw-info-title">ADDRESS</p>
          <p className="sw-info-text">615 Channelside Dr, Tampa, FL 33602</p>
          <p className="sw-info-title">HOURS</p>
          <p className="sw-info-text">Sunday-Thursday | 11 am - 9 pm</p>
          <p className="sw-info-text">Friday-Saturday | 11 am - 11 pm</p>
          <p className="sw-info-title">HOW TO REACH US</p>

          <p className="sw-info-text">info@halfmoonseafood.com</p>
        </div>
      </div>
    </div>
  );
}
