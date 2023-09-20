import React, { useState, useEffect } from "react";

const menuItems = [
  {
    name: "THE ORIGINAL",
    additional: "Choice of fried, blackened, or grilled",
    description:
      "Your choice of fish, dressed with lettuce, tomatoes, and tartar sauce on a toasted brioche bun. ",
    price: "COD $16 | GROUPER $20",
    id: "THE ORIGINAL",
    category: "1",
  },
  {
    name: "SHRIMP PO’ BOY",
    additional: "Choice of fried, blackened, or grilled",
    description:
      "Dressed with lettuce, tomatoes, and cajun remoulade sauce on a fresh, toasted baguette.",
    price: "$16",
    id: "SHRIMP PO’ BOY",
    category: "1",
  },
  {
    name: "COASTAL CRAB",
    description:
      "House jumbo lump crab mix, lettuce, red onions, and tartar sauce on a toasted brioche bun.",
    price: "$19",
    id: "COASTAL CRAB",
    category: "1",
  },
  {
    name: "FRIED BIRD",
    description:
      "All-natural chicken breast, lettuce, pickles, and Half Moon sauce on a toasted brioche bun.",
    price: "$15",
    id: "FRIED BIRD",
    category: "1",
  },
  {
    name: "NASHVILLE HOT TOSSED",
    description:
      "Your choice of protein, hand-battered and tossed in our house Nashville Hot sauce.",
    price: "SHRIMP $18 | CHICKEN $15 | COD $17 | GROUPER $21",
    id: "NASHVILLE HOT TOSSED",
    category: "2",
  },
  {
    name: "NASHVILLE HOT SANDWICH",
    description:
      "Your choice of protein, hand-battered and tossed in our house Nashville Hot sauce. Dressed with pickles and coleslaw on a toasted brioche bun.",
    price: "CHICKEN $15 | COD $16 | GROUPER $20",
    id: "NASHVILLE HOT SANDWICH",
    category: "2",
  },
  {
    name: "FISH & CHIPS",
    additional: "Choice of fried, blackened, or grilled",
    description: "Your choice of fish, served with tartar sauce.",
    price: "COD $17 | GROUPER $22",
    id: "FISH & CHIPS",
    category: "3",
  },
  {
    name: "LARRY’S CRAB CAKES",
    description: "3 house crab cakes served with tartar sauce.",
    price: "$21",
    id: "LARRY’S CRAB CAKES",
    category: "3",
  },
  {
    name: "SHRIMP & CHIPS",
    additional: "Choice of fried, blackened, or grilled",
    description: "Wild-caught shrimp, served with cocktail sauce.",
    price: "$18",
    id: "SHRIMP & CHIPS",
    category: "3",
  },
  {
    name: "HUSHPUPPIES",
    price: "$5",
    id: "HUSHPUPPIES",
    category: "4",
  },
  {
    name: "SEASONED FRIES",
    price: "$5",
    id: "SEASONED FRIES",
    category: "4",
  },
  {
    name: "HOUSE SLAW",
    price: "$5",
    id: "HOUSE SLAW",
    category: "4",
  },
  {
    name: "SOUTHWEST CORN",
    price: "$5",
    id: "SOUTHWEST CORN",
    category: "4",
  },
  {
    name: "BANANA PUDDING",
    price: "$6",
    id: "BANANA PUDDING",
    category: "5",
  },
  {
    name: "FRIED OREOS",
    price: "$6",
    id: "FRIED OREOS",
    category: "5",
  },
  {
    name: "KID’S FISH BITES & FRIES",
    price: "$9",
    id: "KID’S FISH BITES & FRIES",
    category: "6",
  },
  {
    name: "KID’S CHIX BITES & FRIES",
    price: "$9",
    id: "KID’S CHIX BITES & FRIES",
    category: "6",
  },
  {
    name: "HALF MOON HALF MOON ",
    id: "HALF MOON ",
    category: "7",
  },
  {
    name: "TARTAR",
    id: "TARTAR",
    category: "7",
  },
  {
    name: "COCKTAIL",
    id: "COCKTAIL",
    category: "7",
  },
  {
    name: "CAJUN REMOULADE",
    id: "CAJUN REMOULADE",
    category: "7",
  },
  {
    name: "NASHVILLE SWEET HEAT",
    id: "NASHVILLE SWEET HEAT",
    category: "7",
  },
  {
    name: "NASHVILLE FULL HEAT",
    id: "NASHVILLE FULL HEAT",
    category: "7",
  },
];

export default function MenuSection() {
  // filtering the list into all teh diffrent menu item types
  const sandwichMenuItems = menuItems.filter((item) => item.category === "1");
  const heatMenuItems = menuItems.filter((item) => item.category === "2");
  const bsMenuItems = menuItems.filter((item) => item.category === "3");
  const sidesMenuItems = menuItems.filter((item) => item.category === "4");
  const sweetsMenuItems = menuItems.filter((item) => item.category === "5");
  const kidsMenuItems = menuItems.filter((item) => item.category === "6");
  // Didn't use this section because it made it uneven and
  // didn't want to make a list and style and blah blah blah
  const saucesMenuItems = menuItems.filter((item) => item.category === "7");

  const [menuType, setMenuType] = useState(1);

  const handleChangeMenuType = (event) => {
    setMenuType(Number(event.target.value)); // Convert value to a number
  };

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

  return (
    <div id="menu-section">
      <p className=" menu-heading load">MENU</p>

      <div className="menu-sparkman load">
        {isMobileView ? (
          <>
            <div className="mobile-menu-container">
              <label htmlFor="menu-type" className="mobile-menu-prompt">
                Select Menu Section:
              </label>
              <select
                className="mobile-menu"
                name="menu-type"
                value={menuType}
                onChange={handleChangeMenuType}
              >
                <option value={1}>SANDWICHES</option>
                <option value={2}>HALF MOON HEAT</option>
                <option value={3}>BASKETS</option>
                <option value={4}>SIDES</option>
                <option value={5}>SWEETS</option>
                <option value={6}>KIDS</option>
              </select>
            </div>
          </>
        ) : (
          <div class="menu-item-flex load">
            {/* Setting functionality */}
            <p class="menu-item-type" onClick={() => setMenuType(1)}>
              SANDWICHES
            </p>
            <p class="menu-item-type" onClick={() => setMenuType(2)}>
              HALF MOON HEAT
            </p>
            <p class="menu-item-type" onClick={() => setMenuType(3)}>
              BASKETS
            </p>
            <p class="menu-item-type" onClick={() => setMenuType(4)}>
              SIDES
            </p>
            <p class="menu-item-type" onClick={() => setMenuType(5)}>
              SWEETS
            </p>
            <p class="menu-item-type" onClick={() => setMenuType(6)}>
              KIDS
            </p>
          </div>
        )}
        {/* conditional rendering to show specific menu item types */}

        {menuType === 1 ? (
          <div className="menu-sandwich">
            {sandwichMenuItems.map((menuItems) => (
              <div key={sandwichMenuItems.id}>
                <p className="menu-item-name">{menuItems.name}</p>
                <p className="menu-item-additional">{menuItems.additional}</p>
                <p className="menu-item-description">{menuItems.description}</p>
                <p className="menu-item-price">{menuItems.price}</p>
              </div>
            ))}
          </div>
        ) : (
          ""
        )}
        {menuType === 2 ? (
          <div className="menu-heat">
            {heatMenuItems.map((menuItems) => (
              <div key={heatMenuItems.id}>
                <p className="menu-item-name">{menuItems.name}</p>
                <p className="menu-item-additional">{menuItems.additional}</p>
                <p className="menu-item-description">{menuItems.description}</p>
                <p className="menu-item-price">{menuItems.price}</p>
              </div>
            ))}
          </div>
        ) : (
          ""
        )}

        {menuType === 3 ? (
          <div className="menu-bs">
            {bsMenuItems.map((menuItems) => (
              <div key={bsMenuItems.id}>
                <p className="menu-item-name">{menuItems.name}</p>
                <p className="menu-item-additional">{menuItems.additional}</p>
                <p className="menu-item-description">{menuItems.description}</p>
                <p className="menu-item-price">{menuItems.price}</p>
              </div>
            ))}
          </div>
        ) : (
          ""
        )}

        {menuType === 4 ? (
          <div className="menu-sides">
            {sidesMenuItems.map((menuItems) => (
              <div key={sidesMenuItems.id}>
                <p className="menu-item-name">{menuItems.name}</p>
                <p className="menu-item-additional">{menuItems.additional}</p>
                <p className="menu-item-description">{menuItems.description}</p>
                <p className="menu-item-price">{menuItems.price}</p>
              </div>
            ))}
          </div>
        ) : (
          ""
        )}

        {menuType === 5 ? (
          <div className="menu-sweets">
            {sweetsMenuItems.map((menuItems) => (
              <div key={sweetsMenuItems.id}>
                <p className="menu-item-name">{menuItems.name}</p>
                <p className="menu-item-additional">{menuItems.additional}</p>
                <p className="menu-item-description">{menuItems.description}</p>
                <p className="menu-item-price">{menuItems.price}</p>
              </div>
            ))}
          </div>
        ) : (
          ""
        )}

        {menuType === 6 ? (
          <div className="menu-kids">
            {kidsMenuItems.map((menuItems) => (
              <div key={kidsMenuItems.id}>
                <p className="menu-item-name">{menuItems.name}</p>
                <p className="menu-item-additional">{menuItems.additional}</p>
                <p className="menu-item-description">{menuItems.description}</p>
                <p className="menu-item-price">{menuItems.price}</p>
              </div>
            ))}
          </div>
        ) : (
          ""
        )}

        {menuType === 7 ? (
          <div className="menu-sauces">
            {saucesMenuItems.map((menuItems) => (
              <div key={saucesMenuItems.id}>
                <p className="menu-item-name">{menuItems.name}</p>
                <p className="menu-item-additional">{menuItems.additional}</p>
                <p className="menu-item-description">{menuItems.description}</p>
                <p className="menu-item-price">{menuItems.price}</p>
              </div>
            ))}
          </div>
        ) : (
          ""
        )}
        <a
          href="https://media-cdn.getbento.com/accounts/b6253aca09c92b4b1d36271dda746e37/media/qp8VwkAYQWShqUrhshP5_Half%20Moon%20Menu%20Boards%202023%20%28TC%29.pdf"
          className="a"
        >
          <p className="menu-jpg">Click here to view the entire menu</p>
        </a>
      </div>
    </div>
  );
}
