import React from "react";
import { Wrapper } from "../Wrapper/wrapper";
import styles from "./layout.module.css";

export const Layout = props => (
  <Wrapper>
    <div>Toolbar, SideDrawer, BackDrop</div>
    <main className={styles.Content}>{props.children}</main>
  </Wrapper>
);
