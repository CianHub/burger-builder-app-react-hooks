import React from 'react';
import styles from './backdrop.module.css';

export const Backdrop = props =>
  props.show ? (
    <div onClick={props.clicked} className={styles.Backdrop} />
  ) : null;
