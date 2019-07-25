import React from "react";

import Modal from "../../components/ui/Modal/modal";
import { Wrapper } from "../../components/Wrapper/wrapper";
import useHttpErrorHandler from "../../components/hooks/http-error-handler";

const withErrorHandler = (WrappedComponent, axios) => {
  return props => {
    const [error, clearError] = useHttpErrorHandler(axios);

    return (
      <Wrapper>
        <Modal show={error} modalClosed={clearError}>
          {error ? error.message : null}
        </Modal>
        <WrappedComponent {...props} />
      </Wrapper>
    );
  };
};

export default withErrorHandler;
