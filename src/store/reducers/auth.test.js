import reducer from "./auth";
import * as actions from "../actions/actions";

describe("auth reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual({
      token: null,
      userId: null,
      error: null,
      loading: false,
      authRedirectPath: "/"
    });
  });

  it("should store a token on login", () => {
    expect(
      reducer(
        {
          token: null,
          userId: null,
          error: null,
          loading: false,
          authRedirectPath: "/"
        },
        { type: actions.AUTH_SUCCESS, idToken: "1", localId: "1" }
      )
    ).toEqual({
      token: "1",
      userId: "1",
      error: null,
      loading: false,
      authRedirectPath: "/"
    });
  });
});
