import img1 from "../../images/nft-image.png";
import { Button } from "../UI/Button";
import classes from "./OffertContent.module.scss";

export const OffertContent = () => {
  return (
    <div className={classes.container}>
      <div className={classes["box-container"]}>
        <div className={classes.box}>
          <img src={img1} alt="" />
          <h3>Create Artwork</h3>
          <p>
            Create your collection, Add social links, profile & banner images,
            and set a secondary sales fee.
          </p>
        </div>
        <div className={classes.box}>
          <img src={img1} alt="" />
          <h3>Upload</h3>
          <p>
            Upload your work, customize your NFTs with properties, stats, and
            unlockable content.
          </p>
        </div>
        <div className={classes.box}>
          <img src={img1} alt="" />
          <h3>Listing</h3>
          <p>
            Set up and choose between auction, fixed-price listings, and
            declining-price listings.
          </p>
        </div>
      </div>
      <div className={classes.buttons}>
        <Button size="l">Create Now</Button>
        <Button size="l" typeClass="watch">
          Watch Video
        </Button>
      </div>
    </div>
  );
};
