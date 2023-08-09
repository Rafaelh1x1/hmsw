import React from "react";
import BestSellers from "./bestSellers";
import CrabCakeSand from "./images/CrabCakeSand.jpg";
import FishNChips from "./images/FishNChips.jpg";
import FishNShrimp from "./images/FishNShrimp.jpg";
import HotTossChik from "./images/HotTossChik.jpg";

export default function BestSellersSection() {
  return (
    <div>
      <div class="best-sellers-subheading">
        <p>OUR BEST SELLERS</p>
      </div>
      <div className="best-seller-section">
        <BestSellers
          imageSrc={CrabCakeSand}
          imageAlt="Crab Cake Sandwich"
          text="COASTAL CARB"
          description="House jumbo lump crab mix, lettuce, onions, and tartar sauce on a toasted brioche bun."
          price="$16"
        ></BestSellers>
        <BestSellers
          imageSrc={FishNChips}
          imageAlt="Fish and Chips"
          text="FISH & CHIPS"
          description="1/2 lb of your choice of fish, served with tartar sauce and shoestring fries."
          price="$15"
        ></BestSellers>
        <BestSellers
          imageSrc={FishNShrimp}
          imageAlt="SHRIMP and FISH"
          text="SHRIMP & FISH"
          description="Your choice of fish, shrimp and a side. Served with house tartar and cocktail sauce."
          price="$19"
        ></BestSellers>
        <BestSellers
          imageSrc={HotTossChik}
          imageAlt="Hot Tossed Chicken with Collard Greens"
          text="NASH HOT TOSS"
          description="Brined and fried chicken bites, tossed in Nashville Hot sauce"
          price="$13"
        ></BestSellers>
      </div>
    </div>
  );
}
