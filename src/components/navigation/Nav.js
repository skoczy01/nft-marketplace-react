import classes from "./Nav.module.scss";

import { Input } from "../UI/Input";
import { Button } from "../UI/Button";
import { DesktopMenu } from "../UI/MenuNav/DesktopMenu";
import { MobileMenu } from "../UI/MenuNav/MobileMenu";
import React from "react";
import { useWindowSize } from "../../hooks/use-windowSize";

export const Nav = () => {
  const size = useWindowSize();
  const desktop = +size.width >= 1024;
  const mobile = +size.width <= 1023;
  const miniMobile = +size.width <= 475;

  return (
    <nav className={classes.nav}>
      <h1 className={classes.title}>Sapphire</h1>
      {desktop && <DesktopMenu />}
      <div className={desktop ? classes.wrapper : classes["wrapper-mobile"]}>
        <Input />
        {!miniMobile && <Button>Sign In</Button>}
      </div>
      {mobile && <MobileMenu />}
    </nav>
  );
};
