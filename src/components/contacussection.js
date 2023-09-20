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

          <div className="contact-us-description contact-us-banner-text">
            <form
              action="mailto:info@halfmoonseafood.com"
              method="post"
              enctype="text/plain"
            >
              <p>
                <label for="contact-us-submit"></label>
                <input
                  type="submit"
                  value="Click Here To Contact Us"
                  id="contact-us-submit"
                ></input>
              </p>
            </form>
          </div>
        </div>
        <p className="contact-us-description-text">
          Send us a message and we’ll get back to you as soon as possible.
        </p>
      </div>
    </div>
  );
}
