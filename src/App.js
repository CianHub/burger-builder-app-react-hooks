import React, { useEffect, Suspense } from "react";
import Layout from "./hoc/Layout/Layout";
import BurgerBuilder from "./containers/burger-builder/burger-builder";
import Checkout from "./containers/Checkout/checkout";
import Orders from "./containers/Orders/Orders";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";
import Logout from "./containers/auth/logout";
import { connect } from "react-redux";
import * as actions from "./store/actions/index";
import Auth from "./containers/auth/auth";

const asyncCheckout = React.lazy(() => {
  return import("./containers/Checkout/checkout");
});

const asyncOrders = React.lazy(() => {
  return import("./containers/Orders/Orders");
});

const asyncAuth = React.lazy(() => {
  return import("./containers/auth/auth");
});

const App = props => {
  useEffect(() => props.onTrySignIn(), []);

  let routes = (
    <Switch>
      <Route path="/auth" component={asyncAuth} />
      <Route path="/" exact component={BurgerBuilder} />
      <Redirect to="/" />
    </Switch>
  );

  if (props.isAuthenticated) {
    routes = (
      <Switch>
        <Route path="/checkout" render={props => <Checkout {...props} />} />
        <Route path="/orders" render={props => <Orders {...props} />} />
        <Route path="/auth" render={props => <Auth {...props} />} />
        <Route path="/logout" component={Logout} />
        <Route path="/" exact component={BurgerBuilder} />
        <Redirect to="/" />
      </Switch>
    );
  }
  return (
    <div>
      <Layout>
        <Suspense fallback={<p>Loading...</p>}>{routes}</Suspense>
      </Layout>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    onTrySignIn: () => dispatch(actions.authCheckState())
  };
};

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
