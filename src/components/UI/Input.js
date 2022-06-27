import React from "react";
import classes from "./Input.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
export const Input = () => {
  return (
    <div className={classes["input-box"]}>
      <label htmlFor="input-search">
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          color="#e5e5e5"
          fontSize="13px"
        />
      </label>
      <input
        id="input-search"
        type="text"
        placeholder="Search"
        className={classes.input}
      />
    </div>
  );
};
