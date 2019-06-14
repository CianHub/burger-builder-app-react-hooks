import React, { Component } from "react";
import { Wrapper } from "../../components/Wrapper/wrapper";
import { Burger } from "../../components/Burger/burger";

export class BurgerBuilder extends Component {
  render() {
    return (
      <Wrapper>
        <Burger />
        <div>Build Controls</div>
      </Wrapper>
    );
  }
}
