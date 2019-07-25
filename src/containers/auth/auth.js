import React, { useState, useEffect } from "react";
import Button from "../../components/ui/button/button";
import Input from "../../components/ui/input/Input";
import styles from "../auth/auth.module.css";
import * as actions from "../../store/actions/index";
import { connect } from "react-redux";
import Spinner from "../../components/ui/spinner/spinner";
import { Redirect } from "react-router-dom";

const Authentication = props => {
  const [controls, setControls] = useState({
    email: {
      elementType: "input",
      elementConfig: { type: "email", placeholder: "Email" },
      value: "",
      validation: { required: true, isEmail: true },
      valid: false,
      touched: false,
      valueType: "Email"
    },
    password: {
      elementType: "input",
      elementConfig: {
        type: "password",
        placeholder: "Password"
      },
      value: "",
      validation: {
        required: true,
        minLength: 6
      },
      valid: false,
      touched: false,
      valueType: "Password"
    }
  });
  const [isSignUp, setIsSignUp] = useState(true);

  useEffect(() => {
    if (!props.building && props.authRedirectPath !== "/") {
      props.onSetAuthRedirectPath();
    }
  });

  const switchAuthMode = () => setIsSignUp(!isSignUp);

  const checkValidity = (value, rules) => {
    let isValid = true;
    if (!rules) {
      return true;
    }

    if (rules.required) {
      isValid = value.trim() !== "" && isValid;
    }

    if (rules.minLength) {
      isValid = value.length >= rules.minLength && isValid;
    }

    if (rules.maxLength) {
      isValid = value.length <= rules.maxLength && isValid;
    }

    if (rules.isEmail) {
      const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
      isValid = pattern.test(value) && isValid;
    }

    if (rules.isNumeric) {
      const pattern = /^\d+$/;
      isValid = pattern.test(value) && isValid;
    }
    return isValid;
  };

  const inputChangedHandler = (event, controlName) => {
    const updatedControls = {
      ...controls,
      [controlName]: {
        ...controls[controlName],
        value: event.target.value,
        valid: checkValidity(
          event.target.value,
          controls[controlName].validation
        ),
        touched: true
      }
    };

    setControls(updatedControls);
  };

  const submitHandler = event => {
    event.preventDefault();
    props.auth(controls.email.value, controls.password.value, isSignUp);
  };

  const formElementsArray = [];
  let errorMsg = null;
  let form = null;

  for (let key in controls) {
    formElementsArray.push({
      id: key,
      config: controls[key]
    });
  }
  form = props.loading ? (
    <Spinner />
  ) : (
    <form onSubmit={submitHandler}>
      {formElementsArray.map(formElement => (
        <Input
          key={formElement.id}
          elementType={formElement.config.elementType}
          elementConfig={formElement.config.elementConfig}
          value={formElement.config.value}
          changed={event => inputChangedHandler(event, formElement.id)}
          invalid={!formElement.config.valid}
          shouldValidate={formElement.config.validation}
          touched={formElement.config.touched}
          valueType={formElement.config.valueType}
        />
      ))}
      <Button btnType="Success">SUBMIT</Button>
    </form>
  );
  errorMsg = props.error ? (
    <p style={{ color: "red" }}>{props.error.message}</p>
  ) : null;

  let redirectUser = null;
  if (props.isAuthenticated) {
    redirectUser = <Redirect to={props.authRedirectPath} />;
  }
  return (
    <div className={styles.Auth}>
      {redirectUser}
      {errorMsg}
      {form}
      <Button btnType="Danger" clicked={switchAuthMode}>
        SWITCH TO {isSignUp ? "LOGIN" : "REGISTER"}
      </Button>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    auth: (email, password, isSignUp) =>
      dispatch(actions.auth(email, password, isSignUp)),
    onSetAuthRedirectPath: () => dispatch(actions.setAuthRedirectPath("/"))
  };
};

const mapStateToProps = state => {
  return {
    loading: state.auth.loading,
    error: state.auth.error,
    isAuthenticated: state.auth.token !== null,
    building: state.burgerBuilder.building,
    authRedirectPath: state.auth.authRedirectPath
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Authentication);
