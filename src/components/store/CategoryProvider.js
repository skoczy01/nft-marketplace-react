import React, { useState } from "react";
import { CategoryContext } from "./CategoryContext";

export const CategoryProvider = (props) => {
  const [categoryState, setCategoryState] = useState("art");

  const changeCategoryHandler = (name) => {
    setCategoryState(name);
  };
  const categoryContext = {
    category: categoryState,
    changeCategory: changeCategoryHandler,
  };
  return (
    <CategoryContext.Provider value={categoryContext}>
      {props.children}
    </CategoryContext.Provider>
  );
};
