import { useState } from "react";
import ChooseLocation from "./chooseLocation";
import MenuItemSubheading from "./menuItemSubheading";
import { MenuItemImg, MenuItemType, MenuItem } from "./menuItems";

export default function MenuSection() {
  const [visibleCLTemple, setVisibleCLTemple] = useState(false);
  const [visibleCLSpark, setVisibleCLSpark] = useState(false);
  return (
    <div>
      <p className="sub-heading">MENU</p>
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
    </div>
  );
}
