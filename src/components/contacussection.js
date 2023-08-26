import React from "react";

export default function ContactUsSection() {
  return (
    <div className="container" id="contact-us-section">
      <div className="contact-us-section">
        <div className="contact-us-banner">
          <img
            src={require("./images/careers-img1.jpg")}
            alt="Lifeguard station on a beach "
            width="100%vw"
            height="auto"
            className="contact-us-banner-img"
          />
          <p className="contact-us-banner-text">CONTACT US OR JOIN US</p>
        </div>
        <p className="contact-us-description-text">
          Send us a message and we’ll get back to you as soon as possible. Feel
          free to send us your resume and information. Looking forward to
          hearing from you.<br></br>
          Make sure to send your first and last name, and a way to contact you
          either phone or email!
        </p>
        <div className="contact-us-description">
          <form
            action="mailto:info@halfmoonseafood.com"
            method="post"
            enctype="text/plain"
          >
            <p>
              <label for="contact-us-submit"></label>
              <input
                type="submit"
                value="Contact Us"
                id="contact-us-submit"
              ></input>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
