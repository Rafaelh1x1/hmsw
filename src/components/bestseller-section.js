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
        <p>OUR VERY BEST SELLERS</p>
      </div>
      <div className="best-seller-section">
        <BestSellers
          imageSrc={CrabCakeSand}
          imageAlt="Crab Cake Sandwich"
          text="Crab Cake Sandwich"
          description="Hand-made Crunchy Crab Cake"
          price="$16"
        ></BestSellers>
        <BestSellers
          imageSrc={FishNChips}
          imageAlt="Fish and Chips"
          text="Fish N Chips"
          description="Savory grilled fish with in house spice blend"
          price="$15"
        ></BestSellers>
        <BestSellers
          imageSrc={FishNShrimp}
          imageAlt="Fish N Shrimp"
          text="Fish and Shrimp"
          description=" Savory and refreshing combo"
          price="$19"
        ></BestSellers>
        <BestSellers
          imageSrc={HotTossChik}
          imageAlt="Hot Tossed Chicken with Collard Greens"
          text="Nashville Hot Toss Chicken "
          description="Hot, spicy, sweet chicken"
          price="$13"
        ></BestSellers>
      </div>
    </div>
  );
}
