import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { BurgerBuilder } from "./burger-builder";
import BuildControls from "../../components/Burger/BuildControls/buildControls";
import React from "react";

configure({ adapter: new Adapter() });

describe("BurgerBuilder", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<BurgerBuilder onInitIngredients={() => null} />);
  });

  it("should render BuildControls if Ingredients are passed", () => {
    wrapper.setProps({ ings: { salad: 0 } });
    expect(wrapper.find(BuildControls)).toHaveLength(1);
  });
});
