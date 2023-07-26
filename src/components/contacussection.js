import React from "react";

export default function ContactUsSection() {
  return (
    <div className="container">
      <div>
        <div>
          <img
            src={require("./images/contact-us-img.jpg")}
            alt="Lifeguard station on a beach "
            width="100%vw"
            height="auto"
          />
        </div>
        <div></div>
      </div>

      <p>
        Send us a message and we’ll get back to you as soon as possible. Looking
        forward to hearing from you.
      </p>
      <p>Name</p>
      <p>Email</p>
      <p>Phone Number</p>
      <p>Reason for reaching out?</p>
      <p>SEND</p>
    </div>
  );
}
