import React, { Component } from "react";
import { Layout } from "./components/Layout/layout";
import { BurgerBuilder } from "./containers/burger-builder/burger-builder";
import Checkout from "./containers/Checkout/checkout";

function App() {
  return (
    <div>
      <Layout>
        <BurgerBuilder />
        <Checkout />
      </Layout>
    </div>
  );
}

export default App;
