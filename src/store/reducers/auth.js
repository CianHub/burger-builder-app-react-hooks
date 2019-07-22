import * as actions from "../actions/actions";

const initialState = {
  token: null,
  userId: null,
  error: null,
  loading: false
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
    default:
      return { ...state };
  }
};

export default authReducer;
