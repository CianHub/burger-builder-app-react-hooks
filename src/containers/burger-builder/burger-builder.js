import React, { Component } from "react";
import { Wrapper } from "../../components/Wrapper/wrapper";
import Burger from "../../components/Burger/burger";
import { BuildControls } from "../../components/Burger/BuildControls/buildControls";
import { Modal } from "../../components/ui/Modal/modal";
import { OrderSummary } from "../../components/Burger/OrderSummary/orderSummary";
import { instance } from "../../axios-orders";
import { Spinner } from "../../components/ui/spinner/spinner";
import { withErrorHandler } from "../../components/withErrorHandler/withErrorHandler";

const INGREDIENT_PRICES = { salad: 0.5, cheese: 0.5, meat: 0.3, bacon: 2 };
class BurgerBuilder extends Component {
  state = {
    ingredients: null,
    totalPrice: 4,
    purchaseable: false,
    purchasing: false,
    loading: false,
    error: false
  };

  componentDidMount() {
    instance
      .get("/ingredients.json")
      .then(response => {
        this.setState({ ingredients: response.data });
      })
      .catch(error => this.setState({ error: true }));
  }

  purchaseCancelHandler = () => {
    this.setState({ purchasing: false });
  };

  purchaseContinueHandler = () => {
    this.setState({ loading: true });
    /* const order = {
      ingredients: this.state.ingredients,
      price: this.state.totalPrice,
      customer: {
        name: "Cian",
        address: {
          street: "Teststreet 1",
          zipCode: "41351",
          country: "Germany"
        },
        email: "test@test.com"
      },
      deliveryMethod: "fastest"
    };

    instance
      .post("/orders.json", order)
      .then(response => {
        this.setState({ loading: false, purchasing: false });
      })
      .catch(error => this.setState({ loading: false, purchasing: false })); */

    const queryParams = [];
    for (let i in this.state.ingredients) {
      queryParams.push(
        encodeURIComponent(i) +
          "=" +
          encodeURIComponent(this.state.ingredients[i])
      );
    }

    const queryString = queryParams.join("&");
    this.props.history.push({
      pathname: "/checkout",
      search: "?=" + queryString
    });
  };

  updatePurchaseState = ingredients => {
    const sum = Object.keys(ingredients)
      .map(key => {
        return ingredients[key];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);

    this.setState({ purchaseable: sum > 0 });
  };

  purchaseHandler = () => {
    this.setState({ purchasing: true });
  };

  addIngredientHandler = type => {
    const oldCount = this.state.ingredients[type];
    const newCount = oldCount + 1;
    const updatedIngredients = { ...this.state.ingredients };
    updatedIngredients[type] = newCount;
    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;
    this.setState({ ingredients: updatedIngredients, totalPrice: newPrice });
    this.updatePurchaseState(updatedIngredients);
  };

  removeIngredientHandler = type => {
    const oldCount = this.state.ingredients[type];
    if (oldCount <= 0) {
      return;
    }
    const newCount = oldCount - 1;
    const updatedIngredients = { ...this.state.ingredients };
    updatedIngredients[type] = newCount;
    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceAddition;
    this.setState({ ingredients: updatedIngredients, totalPrice: newPrice });
    this.updatePurchaseState(updatedIngredients);
  };

  render() {
    const disabledInfo = {
      ...this.state.ingredients
    };

    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }

    let orderSummary = null;
    let burger = this.state.error ? (
      <p>Ingredients can't be loaded</p>
    ) : (
      <Spinner />
    );

    if (this.state.ingredients) {
      burger = (
        <Wrapper>
          <Burger ingredients={this.state.ingredients} />
          <BuildControls
            added={this.addIngredientHandler}
            removed={this.removeIngredientHandler}
            disabled={disabledInfo}
            price={this.state.totalPrice}
            purchaseable={this.state.purchaseable}
            ordered={this.purchaseHandler}
          />
        </Wrapper>
      );

      orderSummary = (
        <OrderSummary
          purchaseCancelled={this.purchaseCancelHandler}
          purchaseContinued={this.purchaseContinueHandler}
          ingredients={this.state.ingredients}
          totalPrice={this.state.totalPrice}
        />
      );
    }

    if (this.state.loading) {
      orderSummary = <Spinner />;
    }

    return (
      <Wrapper>
        <Modal
          show={this.state.purchasing}
          modalClosed={this.purchaseCancelHandler}
        >
          {orderSummary}
        </Modal>
        {burger}
      </Wrapper>
    );
  }
}

export default withErrorHandler(BurgerBuilder, instance);
