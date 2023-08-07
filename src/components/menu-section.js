import React from "react";
import MenuItemSubheading from "./menuItemSubheading";
import { MenuItemType, MenuItem } from "./menuItems";

export default function MenuSection() {
  return (
    <div>
      <p className="sub-heading menu-heading">MENU</p>
      {/* CLick the location in order to change the menu depedning on the store location */}

      <div className="menu-sparkman">
        {/* Click these and they will change the HTML being displaeyd */}
        <MenuItemSubheading></MenuItemSubheading>

        {/* This is where all the diffrent menu items go */}

        {/* this is where all the images for the various items will be */}
        <div className="menu-type-container">
          <div>
            <img
              src={require("./images/FishNChips.jpg")}
              alt="Fish and Chips"
              className="menu-item-img"
            />
          </div>
          {/* this is where all the types of menu item go */}
          <div className="menu-type-container">
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
          <a
            href="https://media-cdn.getbento.com/accounts/b6253aca09c92b4b1d36271dda746e37/media/qp8VwkAYQWShqUrhshP5_Half%20Moon%20Menu%20Boards%202023%20%28TC%29.pdf"
            className="a"
          >
            {" "}
            <p>Click here for pdf</p>
          </a>
        </div>
      </div>
    </div>
  );
}
