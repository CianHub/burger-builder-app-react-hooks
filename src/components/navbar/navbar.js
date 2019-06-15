import React from 'react';
import styles from './navbar.module.css';
import { NavigationItems } from '../Navigation/navigation';
import { Logo } from '../Logo/logo';

export const Navbar = props => (
  <header className={styles.Navbar}>
    <div>MENU</div>
    <Logo height="80%" />
    <nav className={styles.DesktopOnly}>
      <NavigationItems />
    </nav>
  </header>
);
