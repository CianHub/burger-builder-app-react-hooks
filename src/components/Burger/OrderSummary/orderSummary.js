import React, { Component } from "react";

import { Wrapper } from "../../Wrapper/wrapper";
import Button from "../../../components/ui/button/button";

class OrderSummary extends Component {
  componentWillUpdate() {}

  render() {
    const ingredientSummary = Object.keys(this.props.ingredients).map(igKey => {
      return (
        <li key={igKey}>
          <span style={{ textTransform: "capitalize" }}>{igKey}</span>:{" "}
          {this.props.ingredients[igKey]}
        </li>
      );
    });

    return (
      <Wrapper>
        <h3>Your Order</h3>
        <p>Your order contains:</p>
        <ul>{ingredientSummary}</ul>
        <p>
          <strong>Total Price: {this.props.price.toFixed(2)}</strong>
        </p>
        <p>Continue to Checkout?</p>
        <Button btnType="Danger" clicked={this.props.purchaseCancelled}>
          CANCEL
        </Button>
        <Button btnType="Success" clicked={this.props.purchaseContinued}>
          CONTINUE
        </Button>
      </Wrapper>
    );
  }
}

export default OrderSummary;
