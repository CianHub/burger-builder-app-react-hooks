import React from "react";
import { Wrapper } from "../Wrapper/wrapper";

export const Layout = props => (
  <Wrapper>
    <div>Toolbar, SideDrawer, BackDrop</div>
    <main>{props.children}</main>
  </Wrapper>
);
