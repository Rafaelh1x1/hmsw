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
          hearing from you.
        </p>
        <div className="contact-us-description">
          <form
            action="hungrafael37@gmail.com"
            method="post"
            enctype="text/plain"
          >
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
              <label for="contact-us-reason">Reason for reaching out??</label>{" "}
              <br></br>
              <input type="text" id="contact-us-reason"></input>
            </p>
            <p>
              <form
                action="fileupload.php"
                enctype="multipart/form-data"
                method="post"
              >
                <label class="custom-uploader" for="file">
                  Upload A File
                </label>{" "}
                <input
                  id="file"
                  accept="image/jpeg,image/gif,image/png,application/pdf,image/x-eps"
                  name="fileToUpload"
                  type="file"
                />{" "}
              </form>
            </p>
            <p>
              {" "}
              <label for="contact-us-submit"></label>
              <input type="submit" value="send" id="contact-us-submit"></input>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
