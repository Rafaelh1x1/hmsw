import React from "react";
import "./App.css";
import "./Queries.css";
import TopBanner from "./components/topBanner";
import HoursAndLocations from "./components/hoursandlocations";
import MenuSection from "./components/menu-section";
import AboutUs from "./components/aboutus";
import ContactUsSection from "./components/contacussection";
import Handle from "./components/handle";
import StickyBar from "./components/stickyBar";

function App() {
  return (
    <body className="body">
      <load className="load">
        <TopBanner text="615 Channelside Dr, Tampa, FL 33602"></TopBanner>
        <div className="background-image">
          <MenuSection className="hidden" />
          <HoursAndLocations className="hidden" />
          <AboutUs className="hidden" />
          <ContactUsSection className="hidden" />
          <Handle className="hidden"></Handle>
        </div>
        <StickyBar className="hidden"></StickyBar>
      </load>
    </body>
  );
}

export default App;
