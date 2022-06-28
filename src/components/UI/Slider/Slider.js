import React from "react";
import img1 from "../../../images/logo1.png";
import img2 from "../../../images/logo2.png";
import img3 from "../../../images/logo3.png";
import img4 from "../../../images/logo4.png";
import classes from "./Slider.module.scss";
export function Slider() {
  return (
    <div className={classes.slider}>
      <div className={classes.container}>
        <div className={classes.box}>
          <img src={img1} alt="" className={classes.image} />
        </div>
        <div className={classes.box}>
          <img src={img2} alt="" className={classes.image} />
        </div>
        <div className={classes.box}>
          <img src={img3} alt="" className={classes.image} />
        </div>
        <div className={classes.box}>
          <img src={img4} alt="" className={classes.image} />
        </div>
      </div>
    </div>
  );
}
