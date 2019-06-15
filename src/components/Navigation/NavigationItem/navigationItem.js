import React from 'react';
import styles from './navigationItem.module.css';

export const NavItem = props => (
  <li className={styles.NavigationItem}>
    <a className={props.active ? styles.active : null} href={props.link}>
      {props.children}
    </a>
  </li>
);
