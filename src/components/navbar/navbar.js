import React from 'react';
import styles from './navbar.module.css';
import { NavigationItems } from '../Navigation/navigation';
import { Logo } from '../Logo/logo';
import { DrawerToggle } from '../Sidedrawer/drawerToggle/drawerToggle';

export const Navbar = props => (
  <header className={styles.Navbar}>
    <DrawerToggle clicked={props.drawerToggleClicked} />
    <Logo height="80%" />
    <nav className={styles.DesktopOnly}>
      <NavigationItems />
    </nav>
  </header>
);
