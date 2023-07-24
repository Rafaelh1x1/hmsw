import React from "react";

function MenuItemImg(props) {
  return (
    <div>
      <img
        src={props.imageSrc}
        alt={props.imageAlt}
        className="menu-item-img"
      />
    </div>
  );
}

function MenuItemType(props) {
  return (
    <div>
      <p className="menu-item-types">{props.type}</p>
    </div>
  );
}

function MenuItem(props) {
  return (
    <div>
      <p className="menu-item-name">{props.itemName}</p>
      <p className="menu-item-description">{props.itemDescription}</p>
      <p className="menu-item-price">{props.itemPrice}</p>
    </div>
  );
}

export { MenuItemImg, MenuItemType, MenuItem };
