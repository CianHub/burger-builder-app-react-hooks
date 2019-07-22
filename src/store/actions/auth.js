import * as actions from "../actions/actions";
import axios from "axios";

export const authStart = () => {
  return {
    type: actions.AUTH_START
  };
};

export const authSuccess = (idToken, localId) => {
  return {
    type: actions.AUTH_SUCCESS,
    idToken,
    localId
  };
};

export const authFail = error => {
  return {
    type: actions.AUTH_FAIL,
    error
  };
};

export const auth = (email, password, isSignUp) => {
  return dispatch => {
    dispatch(authStart());
    let url =
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCrvgiIWlV8ttLRTk71SH7MINTLEc1aFeI";
    if (isSignUp === false) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCrvgiIWlV8ttLRTk71SH7MINTLEc1aFeI";
    }
    axios
      .post(url, { email, password, returnSecureToken: true })
      .then(response => {
        console.log(response);
        dispatch(authSuccess(response.data));
      })
      .catch(error => {
        console.log(error);
        dispatch(authFail(error.response.data.error));
      });
  };
};
