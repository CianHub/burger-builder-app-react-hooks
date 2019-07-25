import React from "react";

import classes from "./modal.module.css";
import { Wrapper } from "../../Wrapper/wrapper";
import Backdrop from "../Backdrop/backdrop";

const Modal = props => {
  /*shouldComponentUpdate(nextProps, nextState) {
    return (
      nextProps.show !== props.show ||
      nextProps.children !== props.children
    );
  }*/

  return (
    <Wrapper>
      <Backdrop show={props.show} clicked={props.modalClosed} />
      <div
        className={classes.Modal}
        style={{
          transform: props.show ? "translateY(0)" : "translateY(-100vh)",
          opacity: props.show ? "1" : "0"
        }}
      >
        {props.children}
      </div>
    </Wrapper>
  );
};

export default React.memo(
  Modal,
  (prevProps, nextProps) =>
    nextProps.show === prevProps.show &&
    nextProps.children === prevProps.children
);
