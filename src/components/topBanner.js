import React, { useState, useEffect } from "react";
import QuickNav from "./QuickNav";
import topviewfood from "./images/topviewfood2.jpg";

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
    <div>
      <p className="top-banner">{props.text}</p>
      <div className={`mobile-nav-container ${isMobileView ? "" : "hidden"}`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          width="24px"
          height="24px"
          className={`open-nav ${isNavOpen ? "hidden" : ""}`}
          onClick={handleNavToggle}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          height="24px"
          width="24px"
          className={`close-nav ${isNavOpen ? "" : "hidden"}`}
          onClick={handleNavToggle}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>

      {isNavOpen && <QuickNav />}

      <div className="top-banner-img-container">
        <img
          src={topviewfood}
          alt="top view of food"
          className="top-banner-img"
        />
        <div className="text-overlay">
          <p className="top-banner-img-bold-text">HALF MOON</p>
          <p className="top-banner-img-bold-text">Seafood Co.</p>
          <p className="top-banner-img-ss-text">Sustainably Sourced seafood</p>
        </div>
      </div>
    </div>
  );
}

export default TopBanner;
