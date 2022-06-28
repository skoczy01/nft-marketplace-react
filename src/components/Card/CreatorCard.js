import classes from "./CreatorCard.module.scss";

export const CreatorCard = (props) => {
  return (
    <div className={classes.card}>
      <div className={classes["data-box"]}>
        <img src={props.img} alt="" />
        <div className={classes.data}>
          <h3>{props.name}</h3>
          <h4>{props.totalVolume}</h4>
        </div>
      </div>
      <div className={classes.dots}>...</div>
    </div>
  );
};
