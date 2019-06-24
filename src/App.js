import React from "react";
import { Layout } from "./components/Layout/layout";
import BurgerBuilder from "./containers/burger-builder/burger-builder";
import Checkout from "./containers/Checkout/checkout";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <Layout>
        <Switch>
          <Route path="/checkout" component={Checkout} />
          <Route path="/" exact component={BurgerBuilder} />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
