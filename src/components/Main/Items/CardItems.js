import { NftCard } from "../../Card/NftCard";
import classes from "./CardItems.module.scss";

export const CardItems = () => {
  return (
    <div className={classes["container-items"]}>
      <div className={classes.wrapper}>
        <NftCard />
        <NftCard />
        <NftCard />
        <NftCard />
        <NftCard />
      </div>
      <div className={classes["btn-box"]}>
        <button className={classes.btn}>View More</button>
      </div>
    </div>
  );
};
