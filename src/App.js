import React, { useState } from "react";
import "./App.css";
import "./Queries.css";
import TopBanner from "./components/topBanner";
import BestSellersSection from "./components/bestseller-section";
import HoursAndLocations from "./components/hoursandlocations";
import ChooseLocation from "./components/chooseLocation";
import MenuSection from "./components/menu-section";
import AboutUs from "./components/aboutus";
import CareerSection from "./components/careerssection";
import ContactUsSection from "./components/contacussection";
import StickyBar from "./components/stickyBar";

function App() {
  return (
    <body className="body">
      <TopBanner text="11508 N 56TH STREET, TEMPLE TERRACE, FL 33617 |    813-437-3474"></TopBanner>
      <BestSellersSection></BestSellersSection>
      <MenuSection />
      <HoursAndLocations />
      <AboutUs />
      <CareerSection />
      <ContactUsSection />
      <StickyBar></StickyBar>
    </body>
  );
}

export default App;
