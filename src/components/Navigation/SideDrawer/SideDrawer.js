import React from "react";

import Logo from "../../Logo/logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import classes from "./sideDrawer.module.css";
import Backdrop from "../../ui/Backdrop/backdrop";
import { Wrapper } from "../../Wrapper/wrapper";

const sideDrawer = props => {
  let attachedClasses = [classes.SideDrawer, classes.Close];
  if (props.open) {
    attachedClasses = [classes.SideDrawer, classes.Open];
  }
  return (
    <Wrapper>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={attachedClasses.join(" ")}>
        <div className={classes.Logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Wrapper>
  );
};

export default sideDrawer;
