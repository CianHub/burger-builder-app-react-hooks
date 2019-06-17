import React, { Component } from "react";
import { Modal } from "../ui/Modal/modal";
import { Wrapper } from "../Wrapper/wrapper";

export const withErrorHandler = (WrappedComponent, axios) => {
  return class extends Component {
    state = { error: null };

    componentDidMount() {
      axios.interceptors.request.use(req => {
        this.setState({ error: null });
      });

      axios.interceptors.response.use(null, error => {
        this.setState({ error: error });
      });
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
