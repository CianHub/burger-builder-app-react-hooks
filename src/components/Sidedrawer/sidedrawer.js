import React from 'react';
import { Logo } from '../Logo/logo';
import { NavigationItems } from '../Navigation/navigation';
import styles from './sidedrawer.module.css';
import { Wrapper } from '../Wrapper/wrapper';
import { Backdrop } from '../ui/Backdrop/backdrop';

export const Sidedrawer = props => {
  let attachedClasses = [styles.Sidedrawer, styles.Close];

  if (props.open) {
    attachedClasses = [styles.Sidedrawer, styles.Open];
  }
  return (
    <Wrapper>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={styles.Sidedrawer}>
        <div className={styles.Logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Wrapper>
  );
};
