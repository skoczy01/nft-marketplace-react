import classes from "./Footer.module.scss";
import { FooterFirstSection } from "./FooterItems/FooterFirstSection";

import { Links } from "./FooterItems/Links";
import { FooterEnd } from "./FooterItems/FooterEnd";
export const Footer = () => {
  return (
    <div className={classes["footer-container"]}>
      <FooterFirstSection />
      <Links />
      <FooterEnd />
    </div>
  );
};
