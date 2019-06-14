import React from 'react';
import { Wrapper } from '../../Wrapper/wrapper';

export const OrderSummary = props => {
  const ingredientSummary = Object.keys(props.ingredients).map((key, index) => (
    <li key={key + index}>
      <span style={{ textTransform: 'capitalize' }}>
        {key}: {props.ingredients[key]}
      </span>
    </li>
  ));
  return (
    <Wrapper>
      <h3>Your Order</h3>
      <p> A delicious burger with the following ingredients:</p>
      <ul>{ingredientSummary}</ul>
      <p>Continue to Checkout?</p>
    </Wrapper>
  );
};
