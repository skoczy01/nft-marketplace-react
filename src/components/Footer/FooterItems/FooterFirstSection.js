import classes from "./FooterFirstSection.module.scss";
import { SocialsList } from "./SocialsList";

export const FooterFirstSection = () => {
  return (
    <div className={classes["first-section"]}>
      <h3 className={classes.title}>Sapphire</h3>
      <p className={classes.desc}>
        Amazing NFTs marketplace, Authentic and unique digital creation.
      </p>
      <SocialsList />
    </div>
  );
};
