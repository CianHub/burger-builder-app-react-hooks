import React, { Component } from 'react';
import { Wrapper } from '../../components/Wrapper/wrapper';
import { Burger } from '../../components/Burger/burger';
import { BuildControls } from '../../components/Burger/BuildControls/buildControls';

export class BurgerBuilder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredients: {
        salad: 1,
        bacon: 1,
        cheese: 2,
        meat: 2
      }
    };
  }

  render() {
    return (
      <Wrapper>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls />
      </Wrapper>
    );
  }
}
