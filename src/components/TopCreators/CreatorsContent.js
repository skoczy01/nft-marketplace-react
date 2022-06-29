import { CreatorCard } from "../Card/CreatorCard";
import classes from "./CreatorsContent.module.scss";

import img1 from "../../images/creator1.png";
import img2 from "../../images/creator2.png";
import img3 from "../../images/creator3.png";
import img4 from "../../images/creator4.png";
import img5 from "../../images/creator5.png";
import img6 from "../../images/creator6.png";
import img7 from "../../images/creator7.png";
import img8 from "../../images/creator8.png";
import img9 from "../../images/creator9.png";
export const CreatorsContent = () => {
  const data = [
    { id: 0, name: "Rick Storms", totalVolume: "19,400,50 ETH", img: img1 },
    { id: 1, name: "Sam Son", totalVolume: "6,400,50 ETH", img: img2 },
    { id: 2, name: "Jake robert", totalVolume: "8,400,50 ETH", img: img3 },
    { id: 3, name: "Jake robert", totalVolume: "8,400,50 ETH", img: img4 },
    { id: 4, name: "Jake robert", totalVolume: "8,400,50 ETH", img: img5 },
    { id: 5, name: "Jake robert", totalVolume: "8,400,50 ETH", img: img6 },
    { id: 6, name: "Jake robert", totalVolume: "8,400,50 ETH", img: img7 },
    { id: 7, name: "Jake robert", totalVolume: "8,400,50 ETH", img: img8 },
    { id: 8, name: "Jake robert", totalVolume: "8,400,50 ETH", img: img9 },
  ];

  const items = data.map((item) => {
    return (
      <CreatorCard
        key={item.id}
        name={item.name}
        totalVolume={item.totalVolume}
        img={item.img}
      />
    );
  });
  return (
    <div className={classes.container}>
      <div className={classes["grid-wrapper"]}>{items}</div>
    </div>
  );
};
