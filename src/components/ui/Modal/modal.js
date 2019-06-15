import React from 'react';
import styles from './modal.module.css';
import { Wrapper } from '../../Wrapper/wrapper';
import { Backdrop } from '../Backdrop/backdrop';

export const Modal = props => (
  <Wrapper>
    <Backdrop show={props.show} clicked={props.modalClosed} />
    <div
      className={styles.Modal}
      style={{
        transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
        opacity: props.show ? '1' : '0'
      }}
    >
      {props.children}
    </div>
  </Wrapper>
);
