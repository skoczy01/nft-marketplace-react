import classes from "./Categories.module.scss";

export const Categories = () => {
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
        <button>{item.name}</button>
      </li>
    );
  });

  return (
    <div className={classes.categories}>
      <ul>{categories}</ul>
    </div>
  );
};
