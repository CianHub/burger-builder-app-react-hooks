import React from "react";
import { Layout } from "./components/Layout/layout";
import BurgerBuilder from "./containers/burger-builder/burger-builder";

function App() {
  return (
    <div>
      <Layout>
        <BurgerBuilder />
      </Layout>
    </div>
  );
}

export default App;
