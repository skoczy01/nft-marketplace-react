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

  return (
    <nav className={classes.nav}>
      <h1 className={classes.title}>Sapphire</h1>
      {desktop && <DesktopMenu />}
      <Input />
      <Button>Sign In</Button>
      {mobile && <MobileMenu />}
    </nav>
  );
};
