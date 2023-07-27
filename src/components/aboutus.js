import React from "react";

export default function AboutUs() {
  return (
    <div className="container">
      <div className="about-us-img-container">
        {/* <img
          src={require("./images/half-moon-bay.jpg")}
          alt=" Half Moon Bay"
          width="100%vw"
          height="auto"
          className="about-us-img"
        /> */}
        <img
          src={require("./images/Main_Logo.png")}
          alt="half moon pelican logo"
          width="100vw"
          height="auto"
          className="about-us-logo"
        />
        <p className="about-us-img-text">WHO WE ARE</p>
      </div>
      <div className="about-us-description-container">
        <img
          src={require("./images/about-us-img.jpg")}
          alt="sandwich being held in front of chalkbaord that reads welcome to Temple Terrace"
          width="500vw"
          height="auto"
          className="about-us-description-img"
        />
        <div className="about-us-description-text">
          <p>
            When faced to raise prices or decrease quality, Half Moon Seafood
            Co. was <strong>born to challenge the seafood status quo.</strong>
            Founded in 2020, the Half Moon team is committed to providing our
            guests with <strong>quality</strong> seafood in an{" "}
            <strong>affordable</strong>,<strong>fast-casual</strong> format.
          </p>
          <p>
            We take pride in our relationships with our suppliers to ensure we
            only serve seafood from <strong>transparent</strong> and{" "}
            <strong>sustainable sources</strong>. The Half Moon team is
            committed to providing a thoughtfully sourced meal, always
            made-to-order for you. Our goal is simple, to serve quality (and
            delicious) fish sandwiches, made with as few ingredients as
            possible.{" "}
          </p>
          <p>
            When it comes to great food, we don’t think you should have to
            choose between <strong>fast and healthy</strong>. Half Moon Seafood
            Co. found a home in <strong>Tampa Bay</strong>, and we could not be
            more excited to join the community.{" "}
            <strong>Half Moon...full belly</strong>.
          </p>
        </div>
      </div>
    </div>
  );
}
