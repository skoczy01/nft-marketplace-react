import { CreatorCard } from "../Card/CreatorCard";
import img1 from "../../images/creator1.png";

export const CreatorsContent = () => {
  const data = [
    { id: 0, name: "Rick Storms", totalVolume: "19,400,50 ETH", img: img1 },
    // { id: 0, name: "Sam Son", totalVolume: "6,400,50 ETH", img: "" },
    // { id: 0, name: "Jake robert", totalVolume: "8,400,50 ETH", img: "" },
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
  return <div className="container">{items}</div>;
};
