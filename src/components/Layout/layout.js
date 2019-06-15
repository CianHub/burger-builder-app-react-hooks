import React from 'react';
import { Wrapper } from '../Wrapper/wrapper';
import styles from './layout.module.css';
import { Navbar } from '../navbar/navbar';

export const Layout = props => (
  <Wrapper>
    <Navbar />
    <div>Toolbar, SideDrawer, BackDrop</div>
    <main className={styles.Content}>{props.children}</main>
  </Wrapper>
);
