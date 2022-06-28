import classes from "./Header.module.scss";
import { FirstSection } from "./FirstSection";
import { SecondSection } from "./SecondSection";

export const Header = () => {
  return (
    <header className={classes.header}>
      <FirstSection />
      <SecondSection />
    </header>
  );
};
