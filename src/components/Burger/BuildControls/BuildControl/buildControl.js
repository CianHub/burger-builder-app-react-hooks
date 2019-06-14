import React from 'react';
import styles from './buildControl.module.css';

export const BuildControl = props => (
  <div className={styles.BuildControl}>
    <div className={styles.Label}>{props.label}</div>
    <button className={styles.Less}>Less</button>
    <button className={styles.More}> More</button>
  </div>
);
