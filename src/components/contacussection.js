import React from "react";

export default function ContactUsSection() {
  return (
    <div className="container">
      <div className="contact-us-section">
        <div className="contact-us-banner">
          <img
            src={require("./images/contact-us-img.jpg")}
            alt="Lifeguard station on a beach "
            width="100%vw"
            height="auto"
            className="contact-us-banner-img"
          />
          <p className="contact-us-banner-text">CONTACT US</p>
        </div>
        <p className="contact-us-description-text">
          Send us a message and we’ll get back to you as soon as possible.
          Looking forward to hearing from you.
        </p>
        <div className="contact-us-description">
          <form>
            <p>
              <label for="contact-us-name">Name:</label>
              <br></br>
              <input type="text" id="conatct-us-name"></input>
            </p>
            <p>
              <label for="contact-us-email">Email:</label> <br></br>
              <input type="text" id="contact-us-email"></input>
            </p>
            <p>
              <label for="contact-us-phone">Phone Number:</label> <br></br>
              <input type="text" id="contact-us-phone"></input>
            </p>
            <p>
              <label for="contact-us-reason">Reason for reaching out?</label>{" "}
              <br></br>
              <input type="text" id="contact-us-reason"></input>
            </p>
            <p>
              {" "}
              <label for="contact-us-submit"></label>
              <input type="submit" id="contact-us-submit"></input>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
