import React, { useState } from "react";
import menuClass from "./MobileMenu.module.scss";
import { Button } from "../Button";
import { useWindowSize } from "../../../hooks/use-windowSize";
export const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const size = useWindowSize();
  const desktop = +size.width >= 1024;
  const mobile = +size.width <= 1023;
  const miniMobile = +size.width <= 475;
  const openHandler = () => {
    setIsOpen((prev) => !prev);
  };

  const hamClass = isOpen
    ? `${menuClass.hamburger} ${menuClass["hamburger--active"]}`
    : menuClass.hamburger;
  const listClass = isOpen
    ? `${menuClass.navigation} ${menuClass["navigation--active"]}`
    : menuClass.navigation;

  return (
    <div className={menuClass.box}>
      <button className={hamClass} onClick={openHandler}>
        <span className={menuClass["hamburger-box"]}>
          <span className={menuClass["hamburger-inner"]}></span>
        </span>
      </button>
      <div className={listClass}>
        <ul className={menuClass["navigation-list"]}>
          <li className={menuClass["navigation-item"]}>
            <a href="#">Explore</a>
          </li>
          <li className={menuClass["navigation-item"]}>
            <a href="#">Marketplace</a>
          </li>
          <li className={menuClass["navigation-item"]}>
            <a href="#">Artist</a>
          </li>
          <li className={menuClass["navigation-item"]}>
            <a href="#">Collection</a>
          </li>
          {miniMobile && <Button>Sign in</Button>}
        </ul>
      </div>
    </div>
  );
};
