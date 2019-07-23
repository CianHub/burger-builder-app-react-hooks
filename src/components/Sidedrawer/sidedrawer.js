import React from "react";
import Logo from "../Logo/Logo";
import NavigationItems from "../Navigation/NavigationItems/NavigationItems";
import styles from "./sidedrawer.module.css";
import { Wrapper } from "../Wrapper/wrapper";
import Backdrop from "../../components/ui/Backdrop/Backdrop";

export const Sidedrawer = props => {
  let attachedClasses = [styles.Sidedrawer, styles.Close];

  if (props.open) {
    attachedClasses = [styles.Sidedrawer, styles.Open];
  }
  return (
    <Wrapper>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={attachedClasses.join(" ")}>
        <div className={styles.Logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems isAuth={props.isAuth} />
        </nav>
      </div>
    </Wrapper>
  );
};
