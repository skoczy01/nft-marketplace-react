import classes from "./Socials.module.scss";
import {
  FaFacebookF,
  FaWhatsapp,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

export const SocialsList = () => {
  const iconsStyle = {
    color: "#7d7ad8",
  };

  return (
    <div className={classes.socials}>
      <ul>
        <li>
          <div className={classes.fill}></div>
          <FaWhatsapp style={iconsStyle} />
        </li>
        <li>
          <div className={classes.fill}></div>
          <FaFacebookF style={iconsStyle} />
        </li>
        <li>
          <div className={classes.fill}></div>
          <FaInstagram style={iconsStyle} />
        </li>
        <li>
          <div className={classes.fill}></div>
          <FaYoutube style={iconsStyle} />
        </li>
      </ul>
    </div>
  );
};
