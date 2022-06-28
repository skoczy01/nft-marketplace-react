import React from "react";
import classes from "./SectionNames.module.scss";
export function SectionName(props) {
  return (
    <div className={classes.box}>
      <p className={classes["sub-title"]}> {props.subTitle}</p>
      <h3 className={classes.title}>{props.children}</h3>
    </div>
  );
}
