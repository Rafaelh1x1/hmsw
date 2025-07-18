import React from "react";

export default function ContactUsSection() {
  return (
    <div className="container" id="contact-us-section">
      <div className="contact-us-section">
        <div className="contact-us-banner">
          <img
            src={require("./images/careers-img1.jpg")}
            alt="Flock of pelicans flying "
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
                  value="CONTACT US"
                  id="contact-us-submit"
                ></input>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
