import * as actions from "../actions/actions";

const initialState = {
  token: null,
  userId: null,
  error: null,
  loading: false,
  authRedirectPath: "/"
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.AUTH_START:
      return { ...state, error: null, loading: true };
    case actions.AUTH_SUCCESS:
      return {
        ...state,
        error: null,
        loading: false,
        token: action.idToken,
        userId: action.localId
      };
    case actions.AUTH_FAIL:
      console.log(action.error);
      return {
        ...state,
        error: action.error,
        loading: false
      };
    case actions.LOGOUT:
      return { ...state, token: null, userId: null };
    case actions.SET_AUTH_REDIRECT:
      console.log(action.path);
      return { ...state, authRedirectPath: action.path };
    default:
      return { ...state };
  }
};

export default authReducer;
