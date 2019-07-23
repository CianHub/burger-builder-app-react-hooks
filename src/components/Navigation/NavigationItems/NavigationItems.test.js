import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import NavigationItems from "./NavigationItems";
import NavigationItem from "./NavigationItem/NavigationItem";
import React from "react";

configure({ adapter: new Adapter() });

describe("NavigationItems", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<NavigationItems />);
  });

  it("should render 2 items if unauthenticated", () => {
    expect(wrapper.find(NavigationItem)).toHaveLength(2);
  });

  it("should render 3 items if authenticated", () => {
    wrapper.setProps({ isAuth: true });
    expect(wrapper.find(NavigationItem)).toHaveLength(3);
  });

  it("should render a logout item if authenticated", () => {
    wrapper.setProps({ isAuth: true });
    expect(
      wrapper.contains(<NavigationItem link="/logout">Logout</NavigationItem>)
    ).toBeTruthy();
  });
});
