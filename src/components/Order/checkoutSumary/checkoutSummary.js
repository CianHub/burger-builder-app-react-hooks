import React from "react";
import { Burger } from "../../Burger/burger";
import { Button } from "../../ui/button/button";
import styles from "../checkoutSumary/checkoutSummary.module.css";

const CheckoutSummary = props => {
  return (
    <div className={styles.CheckoutSummary}>
      <h1>We hope it doesn't kill you!</h1>
      <div style={{ width: "100%", height: "300px", margin: "0" }}>
        <Burger ingredients={props.ingredients} />
      </div>
      <Button btnType="Danger">CANCEL</Button>
      <Button btnType="Success">CONTINUE</Button>
    </div>
  );
};

export default CheckoutSummary;
