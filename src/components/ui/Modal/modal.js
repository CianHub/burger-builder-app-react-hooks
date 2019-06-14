import React from 'react';
import styles from './modal.module.css';

export const Modal = props => (
  <div className={styles.Modal}>{props.children}</div>
);
