import React from "react";
import { Button } from "../UI/Button";
import classes from "./FirstSection.module.scss";

export function FirstSection() {
  return (
    <div className={classes["first-section"]}>
      <h2 className={classes.title}>
        Discover, Sell & Collect{" "}
        <span className={classes["text-effect"]}>Rare</span> NFTs
      </h2>
      <p className={classes.decription}>
        Digital marketplace for crypto collections and non-fungible tokens
        (NFTs)
      </p>
      <Button size="xl">Discover Now</Button>
      <div className={classes.numbers}>
        <div>
          <p>35k+</p>
          <span>Artworks</span>
        </div>
        <div>
          <p>15k+</p>
          <span>Auctions</span>
        </div>
        <div>
          <p>25k+</p>
          <span>Artists</span>
        </div>
      </div>
    </div>
  );
}
