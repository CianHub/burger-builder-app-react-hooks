import React from 'react';
import { Wrapper } from '../Wrapper/wrapper';
import styles from './layout.module.css';
import { Navbar } from '../navbar/navbar';
import { Sidedrawer } from '../Sidedrawer/sidedrawer';

export const Layout = props => (
  <Wrapper>
    <Navbar />
    <Sidedrawer />
    <main className={styles.Content}>{props.children}</main>
  </Wrapper>
);
