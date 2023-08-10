import React, { useState, useEffect } from "react";
import QuickNav from "./QuickNav";

function TopBanner(props) {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 800);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Check initial screen width

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleNavToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className="top-banner-section">
      <a
        href="https://www.google.com/maps/dir/27.4724016,-82.4211016/halfmoon+seafood/@27.7105839,-82.8332828,10z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x88c2c59e23db4b51:0xb139c480f6bf4ee1!2m2!1d-82.4461237!2d27.943512?entry=ttu"
        className="a"
      >
        <p className="top-banner">{props.text}</p>
      </a>
      <div className={`mobile-nav-container ${isMobileView ? "" : "hidden"}`}>
        {isNavOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            height="24px"
            width="24px"
            className="nav-button"
            onClick={handleNavToggle}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            width="24px"
            height="24px"
            className="nav-button"
            onClick={handleNavToggle}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        )}
      </div>

      {isNavOpen && <QuickNav />}

      <div className="top-banner-img-container">
        <img
          src={require("./images/map-background7.jpg")}
          alt="map of half moon bay "
          width="100%vw"
          height="auto"
          className="top-banner-img"
        />
        {/* <div className="text-overlay">
          <p className="top-banner-img-bold-text">HALF MOON</p>
          <p className="top-banner-img-bold-text">Seafood Co.</p>
          <p className="top-banner-img-ss-text">Sustainably Sourced seafood</p>
        </div> */}
      </div>
    </div>
  );
}

export default TopBanner;
