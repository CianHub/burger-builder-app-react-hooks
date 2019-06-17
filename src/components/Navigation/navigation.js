import React from 'react';
import styles from './navigation.module.css';
import { NavItem } from './NavigationItem/navigationItem';

export const NavigationItems = () => (
  <ul className={styles.navigationItems}>
    <NavItem link="/" active>
      Burger Builder
    </NavItem>
    <NavItem link="/">Checkout</NavItem>
  </ul>
);
