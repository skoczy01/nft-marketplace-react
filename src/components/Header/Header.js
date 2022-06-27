import { Button } from "../UI/Button";
import classes from "./Header.module.scss";
export const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes["first-section"]}>
        <h2 className={classes.title}>Discover, Sell & Collect Rare NFTs</h2>
        <p className={classes.decription}>
          Digital marketplace for crypto collections and non-fungible tokens
          (NFTs)
        </p>
        <Button size="xl">Discover Now</Button>
        <div className={classes.numbers}>
          <div>
            <p>35k+</p>
            <span>Artworks</span>
          </div>
          <div>
            <p>15k+</p>
            <span>Auctions</span>
          </div>
          <div>
            <p>25k+</p>
            <span>Artists</span>
          </div>
        </div>
      </div>
      <div className={classes["second-section"]}>img</div>
    </header>
  );
};
