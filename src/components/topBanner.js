import React, { useState, useEffect } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

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
    <div className="top-banner-section load" id="top-banner-section">
      <p className="top-banner">{props.text}</p>
      {isMobileView && (
        <div className={`mobile-nav-container ${isMobileView ? "" : "hidden"}`}>
          {isNavOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              height="36px"
              width="36px"
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
              width="36px"
              height="36px"
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
      )}

      {isNavOpen && (
        <div class="quick-nav">
          <AnchorLink href="#menu-section">
            <p class="quick-nav-text" onClick={handleNavToggle}>
              MENU
            </p>
          </AnchorLink>
          <AnchorLink href="#hours-locations-section">
            <p class="quick-nav-text" onClick={handleNavToggle}>
              HOURS & LOCATIONS
            </p>
          </AnchorLink>
          <AnchorLink href="#about-us-section">
            <p class="quick-nav-text" onClick={handleNavToggle}>
              ABOUT US
            </p>
          </AnchorLink>
          <AnchorLink href="#contact-us-section">
            <p class="quick-nav-text" onClick={handleNavToggle}>
              CONTACT US
            </p>
          </AnchorLink>
        </div>
      )}

      {!isMobileView && (
        <div class="quick-nav">
          <AnchorLink href="#menu-section">
            <p class="quick-nav-text" onClick={handleNavToggle}>
              MENU
            </p>
          </AnchorLink>
          <AnchorLink href="#hours-locations-section">
            <p class="quick-nav-text" onClick={handleNavToggle}>
              HOURS & LOCATIONS
            </p>
          </AnchorLink>
          <AnchorLink href="#about-us-section">
            <p class="quick-nav-text" onClick={handleNavToggle}>
              ABOUT US
            </p>
          </AnchorLink>
          <AnchorLink href="#contact-us-section">
            <p class="quick-nav-text" onClick={handleNavToggle}>
              CONTACT
            </p>
          </AnchorLink>
        </div>
      )}

      <div className="top-banner-img-container">
        {isMobileView ? (
          <img
            src={require("./images/mobile-top-banner-img.jpg")}
            alt="map of half moon bay "
            width="100%vw"
            height="auto"
            className=""
          />
        ) : (
          <img
            src={require("./images/top-banner-img.jpg")}
            alt="map of half moon bay "
            width="100%vw"
            height="auto"
            className="top-banner-img"
          />
        )}
        <div className="text-overlay">
          {isMobileView ? (
            <img
              src={require("./images/hm-mobile-logo.png")}
              alt="half moon seafood logo "
              className="text-overlay"
            />
          ) : (
            <img
              src={require("./images/Half-Moon-Rope-Logo.png")}
              alt="half moon seafood logo "
              className="text-overlay"
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default TopBanner;
