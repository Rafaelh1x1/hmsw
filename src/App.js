import React, { useState } from "react";
import "./App.css";
import "./Queries.css";
import TopBanner from "./components/topBanner";
import BestSellersSection from "./components/bestseller-section";
import SubHeading from "./components/subHeading";
import ChooseLocation from "./components/chooseLocation";
import MenuItemSubheading from "./components/menuItemSubheading";
import { MenuItemImg, MenuItemType, MenuItem } from "./components/menuItems";
import ContentText from "./components/content";
import StickyBar from "./components/stickyBar";

function App() {
  const [visibleCLTemple, setVisibleCLTemple] = useState(false);
  const [visibleCLSpark, setVisibleCLSpark] = useState(false);

  return (
    <body className="body">
      <TopBanner text="11508 N 56TH STREET, TEMPLE TERRACE, FL 33617 |    813-437-3474"></TopBanner>
      <BestSellersSection></BestSellersSection>
      <SubHeading text="MENU"></SubHeading>

      {/* CLick the location in order to change the menu depedning on the store location */}
      <div className="choose-location-container">
        <button
          onClick={() =>
            setVisibleCLTemple(!visibleCLTemple && visibleCLSpark === false)
          }
          className="menu-button"
        >
          <ChooseLocation
            text="Temple Terrace"
            class="c-l-temple-terrace"
          ></ChooseLocation>
        </button>

        <button
          onClick={() =>
            setVisibleCLSpark(!visibleCLSpark && visibleCLTemple === false)
          }
          className="menu-button"
        >
          <ChooseLocation
            text="Sparkman Wharf"
            class="c-l-sparkman-wharf"
          ></ChooseLocation>
        </button>
      </div>
      {visibleCLTemple && (
        <span>
          <div className="menu-Temple">
            {/* Click these and they will change the HTML being displaeyd */}
            <MenuItemSubheading></MenuItemSubheading>

            {/* This is where all the diffrent menu items go */}

            {/* this is where all the images for the various items will be */}
            <div className="menu-type-container">
              <div>
                <MenuItemImg imageAlt="Fish and chips"></MenuItemImg>
              </div>
              {/* this is where all the types of menu item go */}
              <div>
                <MenuItemType type="Plates"></MenuItemType>

                {/* this is where all the actual menu items go  */}
                <MenuItem
                  itemName="FISH & CHIPS"
                  itemDescription="1/2 lb of your choice of fish, served with tartar sauce and shoestring fries."
                  itemPrice=" Cod 15 | Gulf Grouper per market Price | Mississippi Catfish 16"
                ></MenuItem>

                <MenuItem
                  itemName="SHRIMP & FISH"
                  itemDescription="Your choice of fish, shrimp and a side. Served with house tartar and cocktail sauce."
                  itemPrice="Cod 19 | Gulf Grouper per Market Price | Mississippi Catfish 20"
                ></MenuItem>

                <MenuItem
                  itemName="SAMPLE THE SEA"
                  itemDescription="Try it all! Lightly battered shrimp, fish, and your choice of oysters or a house-made crab cake. Served with two sides."
                  itemPrice="Cod 28 | Gulf Grouper per Market Price | Mississippi Catfish 29"
                ></MenuItem>

                <MenuItem
                  itemName="SHRIMP & CHIPS"
                  itemDescription="1/2 lb of wild-caught shrimp, served with house cocktail sauce and a side."
                  itemPrice="16"
                ></MenuItem>
              </div>
            </div>
          </div>
        </span>
      )}
      {visibleCLSpark && (
        <span>
          <div className="menu-sparkman">
            {/* Click these and they will change the HTML being displaeyd */}
            <MenuItemSubheading></MenuItemSubheading>

            {/* This is where all the diffrent menu items go */}

            {/* this is where all the images for the various items will be */}
            <div className="menu-type-container">
              <div>
                <MenuItemImg imageAlt="Fish and chips"></MenuItemImg>
              </div>
              {/* this is where all the types of menu item go */}
              <div>
                <MenuItemType type="Plates"></MenuItemType>

                {/* this is where all the actual menu items go  */}
                <MenuItem
                  itemName="FISH & CHIPS"
                  itemDescription="1/2 lb of your choice of fish, served with tartar sauce and shoestring fries."
                  itemPrice=" Cod 15 | Gulf Grouper per market Price | Mississippi Catfish 16"
                ></MenuItem>

                <MenuItem
                  itemName="SHRIMP & FISH"
                  itemDescription="Your choice of fish, shrimp and a side. Served with house tartar and cocktail sauce."
                  itemPrice="Cod 19 | Gulf Grouper per Market Price | Mississippi Catfish 20"
                ></MenuItem>

                <MenuItem
                  itemName="SAMPLE THE SEA"
                  itemDescription="Try it all! Lightly battered shrimp, fish, and your choice of oysters or a house-made crab cake. Served with two sides."
                  itemPrice="Cod 28 | Gulf Grouper per Market Price | Mississippi Catfish 29"
                ></MenuItem>

                <MenuItem
                  itemName="SHRIMP & CHIPS"
                  itemDescription="1/2 lb of wild-caught shrimp, served with house cocktail sauce and a side."
                  itemPrice="16"
                ></MenuItem>
              </div>
            </div>
          </div>
        </span>
      )}
      <SubHeading text="HOURS & LOCATIONS"></SubHeading>
      <div>
        <div className="choose-location-container">
          <ChooseLocation text="Temple Terrace"></ChooseLocation>
          <ChooseLocation text="Sparkman Wharf"></ChooseLocation>
        </div>
        <ContentText
          text="11508 N 56th Street,
Temple Terrace, FL 33617"
        ></ContentText>
        <ContentText text="813-437-3474"></ContentText>
        <ContentText text="info@halfmoonseafood.com"></ContentText>
        <ContentText text="GET DIRECTIONS"></ContentText>
        <ContentText text="Tuesday - Saturday - 11 am - 9 pm"></ContentText>
        <ContentText text="Tuesday - Saturday - 11 am - 9 pm"></ContentText>
      </div>
      <SubHeading text="WHO ARE WE?"></SubHeading>
      <div>
        <ContentText text="When faced to raise prices or decrease quality, Half Moon Seafood Co. was born to challenge the seafood status quo. Founded in 2020, the Half Moon team is committed to providing our guests with quality seafood in an affordable, fast-casual format. "></ContentText>
        <ContentText text="We take pride in our relationships with our suppliers to ensure we only serve seafood from transparent and sustainable sources. The Half Moon team is committed to providing a thoughtfully sourced meal, always made-to-order for you. Our goal is simple, to serve quality (and delicious) fish sandwiches, made with as few ingredients as possible. "></ContentText>
        <ContentText
          text="When it comes to great food, we don’t think you should have to choose between fast and healthy. Half Moon Seafood Co. found a home in Tampa Bay, and we could not be more excited to join the community.

Half Moon...full belly. "
        ></ContentText>{" "}
      </div>
      <SubHeading text="WORK WITH US"></SubHeading>
      <div>
        <ContentText text="We’d love to have you join our team! Please use the form below to apply. Feel free to send in your resume even if you don't see the position you're looking for listed."></ContentText>
        <ContentText text="APPLY NOW"></ContentText>
      </div>
      <SubHeading text="CONTACT US"></SubHeading>
      <ContentText text="Send us a message and we’ll get back to you as soon as possible. Looking forward to hearing from you."></ContentText>
      <ContentText text="Name"></ContentText>
      <ContentText text="Email"></ContentText>
      <ContentText text="Phone Number"></ContentText>
      <ContentText text="Reason for reaching out?"></ContentText>
      <ContentText text="SEND"></ContentText>
      <StickyBar></StickyBar>
    </body>
  );
}

export default App;
