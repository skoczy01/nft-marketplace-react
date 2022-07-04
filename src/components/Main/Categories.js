import { useContext } from "react";
import classes from "./Categories.module.scss";
import { CategoryContext } from "../store/CategoryContext";

export const Categories = () => {
  const CategoryCtx = useContext(CategoryContext);

  const changeCategory = (event) => {
    CategoryCtx.changeCategory(event.target.name.toLowerCase());
  };
  const category = [
    { id: 0, name: "Music" },
    { id: 1, name: "Art" },
    { id: 2, name: "Sport" },
    { id: 3, name: "Photography" },
    { id: 4, name: "Virtual Reality" },
    { id: 5, name: "Videos" },
    { id: 6, name: "Other" },
  ];
  const categories = category.map((item) => {
    return (
      <li key={item.id}>
        <button name={item.name} onClick={changeCategory}>
          {item.name}
        </button>
      </li>
    );
  });

  return (
    <div className={classes.categories}>
      <ul>{categories}</ul>
    </div>
  );
};
