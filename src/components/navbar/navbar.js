import React from 'react';
import styles from './navbar.module.css';
import { NavigationItems } from '../Navigation/navigation';

export const Navbar = props => (
  <header className={styles.Navbar}>
    <div>MENU</div>
    <div>LOGO</div>
    <nav>
      <NavigationItems />
    </nav>
  </header>
);
