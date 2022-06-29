import classes from "./FooterEnd.module.scss";

export const FooterEnd = () => {
  return (
    <div className={classes["footer-end"]}>
      <p>Copyright 2022 sapphire, All right reserved.</p>
      <div className={classes.links}>
        <a href="#">Privacy Policy</a>
        <a href="#">Terms & Conditions</a>
      </div>
    </div>
  );
};
