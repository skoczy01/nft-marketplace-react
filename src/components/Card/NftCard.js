import classes from "./NftCard.module.scss";
import img1 from "../../images/65803eef9bde1b76f0df2b649c759901.png";
import img2 from "../../images/person.jpeg";
import React from "react";

export const NftCard = () => {
  return (
    <React.Fragment>
      <div className={classes.card}>
        <img src={img1} alt="" className={classes["main-img"]} />
        <div className={classes["info-box"]}>
          <div className={classes.titles}>
            <h3>Monkey Apes</h3>
            <p>
              Created by <span>Rick</span>
            </p>
          </div>
          <img src={img2} alt="" className={classes["av-item"]} />
        </div>
        <div className={classes["count-box"]}>
          <div className={classes.item}>
            <p className={classes["sub-title"]}>Current Bid</p>
            <span className={classes.info}>0.45 ETH</span>
          </div>
          <div className={classes.item}>
            <p className={classes["sub-title"]}>Ending In</p>
            <span className={classes.info}>10h 32m 26s</span>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
