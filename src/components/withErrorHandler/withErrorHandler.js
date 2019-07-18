import React, { Component } from "react";
import Modal from "../ui/Modal/modal";
import { Wrapper } from "../Wrapper/wrapper";
import { instance } from "../../axios-orders";

export const withErrorHandler = (WrappedComponent, axios) => {
  return class extends Component {
    state = { error: null };

    componentWillMount() {
      this.reqInterceptor = instance.interceptors.request.use(req => {
        this.setState({ error: null });
        return req;
      });

      this.resInterceptor = instance.interceptors.response.use(null, error => {
        this.setState({ error: error });
      });
    }

    componentWillUnmount() {
      instance.interceptors.request.eject(this.reqInterceptor);
      instance.interceptors.response.eject(this.resInterceptor);
    }

    errorConfirmedHandler = () => this.setState({ error: null });

    render() {
      return (
        <Wrapper>
          <Modal show={this.state.error} clicked={this.errorConfirmedHandler}>
            {this.state.error ? this.state.error.message : null}
          </Modal>
          <WrappedComponent {...this.props} />
        </Wrapper>
      );
    }
  };
};
