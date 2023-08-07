import React from "react";
import "./App.css";
import "./Queries.css";
import TopBanner from "./components/topBanner";
import BestSellersSection from "./components/bestseller-section";
import HoursAndLocations from "./components/hoursandlocations";
import MenuSection from "./components/menu-section";
import AboutUs from "./components/aboutus";
import ContactUsSection from "./components/contacussection";
import StickyBar from "./components/stickyBar";

function App() {
  return (
    <body className="body">
      <TopBanner text="615 Channelside Dr, Tampa, FL 33602"></TopBanner>
      <div className="pain">
        <BestSellersSection></BestSellersSection>
        <MenuSection />
        <HoursAndLocations />
        <AboutUs />
      </div>
      <ContactUsSection />
      <StickyBar></StickyBar>
    </body>
  );
}

export default App;
