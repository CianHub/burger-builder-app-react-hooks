import React from 'react';
import styles from './button.module.css';

export const Button = props => (
  <button
    className={`${styles.Button} ${styles[props.btnType]}`}
    onClick={props.clicked}
  >
    {props.children}
  </button>
);
