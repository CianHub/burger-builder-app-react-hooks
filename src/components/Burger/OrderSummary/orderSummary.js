import React, { Component } from 'react';
import { Wrapper } from '../../Wrapper/wrapper';
import { Button } from '../../ui/button/button';

export class OrderSummary extends Component {
  componentWillUpdate() {
    console.log('OrderSummary Update');
  }

  render() {
    const ingredientSummary = Object.keys(this.props.ingredients).map(
      (key, index) => (
        <li key={key + index}>
          <span style={{ textTransform: 'capitalize' }}>
            {key}: {this.props.ingredients[key]}
          </span>
        </li>
      )
    );
    return (
      <Wrapper>
        <h3>Your Order</h3>
        <p> A delicious burger with the following ingredients:</p>
        <ul>{ingredientSummary}</ul>
        <p>
          <strong>Total Price: {this.props.totalPrice.toFixed(2)}</strong>
        </p>
        <p>Continue to Checkout?</p>
        <Button clicked={this.props.purchaseCancelled} btnType={'Danger'}>
          CANCEL
        </Button>
        <Button clicked={this.props.purchaseContinued} btnType={'Success'}>
          CONTINUE
        </Button>
      </Wrapper>
    );
  }
}
