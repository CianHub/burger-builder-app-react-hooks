import React from "react";
import styles from "burger.module.css";
import { Ingredient } from "./Ingredients/ingredient";

export const Burger = props => {
  return (
    <div className={styles.Burger}>
      <Ingredient type="bread-top" />
      <Ingredient type="cheese" />
      <Ingredient type="meat" />
      <Ingredient type="bread-bottom" />
    </div>
  );
};
