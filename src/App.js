import React from "react";
import Layout from "./hoc/Layout/Layout";
import BurgerBuilder from "./containers/burger-builder/burger-builder";
import Checkout from "./containers/Checkout/checkout";
import { Route, Switch } from "react-router-dom";
import Orders from "./containers/Orders/Orders";

function App() {
  return (
    <div>
      <Layout>
        <Switch>
          <Route path="/checkout" component={Checkout} />
          <Route path="/orders" component={Orders} />
          <Route path="/" exact component={BurgerBuilder} />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
