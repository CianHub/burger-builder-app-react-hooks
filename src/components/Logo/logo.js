import React from 'react';
import burgerLogo from '../../assets/burger-logo.png';
import styles from './logo.module.css';

export const Logo = props => (
  <div className={styles.Logo} style={{ height: props.height }}>
    <img alt="myBurger" src={burgerLogo} />
  </div>
);
