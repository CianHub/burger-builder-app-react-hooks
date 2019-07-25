import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";

const Logout = props => {
  useEffect(() => {
    props.logoutUser();
  });

  return <Redirect to="/" />;
};

const mapDispatchToProps = dispatch => {
  return {
    logoutUser: () => dispatch(actions.logout())
  };
};

const mapStateToProps = state => {
  return {
    loading: state.auth.loading,
    error: state.auth.error
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Logout);
