import desktopClasses from "./DesktopMenu.module.scss";

export const DesktopMenu = () => {
  return (
    <ul className={desktopClasses.list}>
      <a href="#">
        <li>Explore</li>
      </a>
      <a href="#">
        <li>Marketplace</li>
      </a>
      <a href="#">
        <li>Artist</li>
      </a>
      <a href="#">
        <li>Collection</li>
      </a>
    </ul>
  );
};
