import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
function QuickNav() {
  return (
    <div>
      <div class="quick-nav">
        <p class="quick-nav-text">HOME</p>
        <Link
          to="best-sellers-subheading"
          smooth={true}
          duration={500}
          offset={-50}
        >
          <p class="quick-nav-text">BEST-SELLERS</p>
        </Link>
        <p class="quick-nav-text">MENU</p>
        <p class="quick-nav-text">LOCATIONS</p>
        <p class="quick-nav-text">ABOUT US</p>
        <p class="quick-nav-text">CAREERS</p>
        <p class="quick-nav-text">CONTACT</p>
      </div>
    </div>
  );
}

export default QuickNav;
