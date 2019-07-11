import React from "react";
import styles from "./input.module.css";

const Input = props => {
  let inputElement = null;
  const inputClasses = [styles.InputElement];
  let errorText = null;

  if (props.invalid && props.touched && props.shouldValidate) {
    inputClasses.push(styles.Invalid);
    errorText = (
      <p style={{ color: "red" }}>
        This field is invalid, please enter a valid{" "}
        {props.valueType.toLowerCase()}
      </p>
    );
  }
  switch (props.elementType) {
    case "input":
      inputElement = (
        <input
          className={inputClasses.join(" ")}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;
    case "textarea":
      inputElement = (
        <textarea
          className={inputClasses.join(" ")}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;
    case "select":
      inputElement = (
        <select
          className={inputClasses.join(" ")}
          value={props.value}
          onChange={props.changed}
        >
          {props.elementConfig.options.map(option => (
            <option key={option.value} value={option.value}>
              {option.displayValue}
            </option>
          ))}
        </select>
      );
      break;
    default:
      inputElement = (
        <input
          className={inputClasses.join(" ")}
          {...props.elementConfig}
          value={props.value}
        />
      );
  }
  return (
    <div className={styles.Input}>
      <label className={styles.Label}>{props.label}</label>
      {inputElement}
      {errorText}
    </div>
  );
};

export default Input;
