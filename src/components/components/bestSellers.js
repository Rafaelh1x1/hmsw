import React from "react";

function bestSellers(props) {
  return (
    <div>
      <div className="best-sellers-images">
        <img
          src={props.imageSrc}
          alt={props.imageAlt}
          className="best-seller-img"
        />

        <div class="best-seller-text">
          <p class="best-sellers-item-name">{props.text}</p>
          <p class="best-sellers-item-description">{props.description}</p>
          <p class="best-sellers-item-price">{props.price}</p>
        </div>
      </div>
    </div>
  );
}

export default bestSellers;
