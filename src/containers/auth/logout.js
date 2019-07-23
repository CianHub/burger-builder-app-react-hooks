import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";

class Logout extends Component {
  render() {
    return <Redirect to="/" />;
  }

  componentDidMount() {
    this.props.logoutUser();
  }
}

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
