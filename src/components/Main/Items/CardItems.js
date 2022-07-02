import React, { useState, useEffect, useCallback } from "react";

import classes from "./CardItems.module.scss";
import { Loader } from "../../UI/Loader";
import { NftCard } from "../../Card/NftCard";

export const CardItems = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [collections, setCollections] = useState([]);

  const fetchCollections = useCallback(async () => {
    setIsLoading(true);
    setErrorMessage(null);
    try {
      const response = await fetch(
        "https://nft-marketplace-react-d0bab-default-rtdb.europe-west1.firebasedatabase.app/categories/art.json"
      );
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();
      setCollections(data);
    } catch (error) {
      setErrorMessage(error.message);
      console.log(error);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchCollections();
  }, [fetchCollections]);

  let items = collections.map((item) => {
    return item.items.map((imgData) => {
      return (
        <NftCard
          key={Math.random() * 3124}
          img={imgData.img}
          name={imgData.name}
          author={item.author}
          authorImage={item.authorImage}
          price={imgData.price}
        />
      );
    });
  });

  useEffect(() => {
    if (Object.keys(collections).length !== 0) {
    }
  }, [collections]);

  let content = <p className={classes["not-found"]}>Not Found Items</p>;

  if (isLoading) {
    content = <Loader />;
  }
  if (collections.length > 0) {
    content = null;
  }

  if (errorMessage) {
    content = <p className={classes.errorMessage}>{errorMessage}</p>;
  }

  const viewMoreBtn =
    collections.length !== 0 ? (
      <div className={classes["btn-box"]}>
        <button className={classes.btn}>View More</button>
      </div>
    ) : null;
  return (
    <div className={classes["container-items"]}>
      {content}
      <div className={classes.wrapper}>{items}</div>
      {viewMoreBtn}
    </div>
  );
};
