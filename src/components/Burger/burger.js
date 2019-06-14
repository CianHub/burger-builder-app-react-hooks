import React from "react";
import styles from "./burger.module.css";
import { Ingredient } from "./Ingredients/ingredient";

export const Burger = props => {
  const transformIngredients = Object.keys(props.ingredients).map(ingKey => {
    return [...Array(props.ingredients[ingKey])].map((_, i) => {
      return <Ingredient key={ingKey + i} type={ingKey} />;
    });
  });
  return (
    <div className={styles.Burger}>
      <Ingredient type="bread-top" />
      {transformIngredients}
      <Ingredient type="bread-bottom" />
    </div>
  );
};
