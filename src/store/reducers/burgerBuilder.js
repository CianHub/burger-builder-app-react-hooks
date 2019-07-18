import * as ACTIONS from "../actions/actions";

const initialState = {
  ingredients: null,
  price: 0,
  error: false
};

const INGREDIENT_PRICES = { salad: 0.5, cheese: 0.5, meat: 0.3, bacon: 2 };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.ADD_INGREDIENT:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredientName]: state.ingredients[action.ingredientName] + 1
        },
        price: state.price + INGREDIENT_PRICES[action.ingredientName]
      };

    case ACTIONS.REMOVE_INGREDIENT:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredientName]: state.ingredients[action.ingredientName] - 1
        },
        price: state.price + INGREDIENT_PRICES[action.ingredientName]
      };

    case ACTIONS.SET_INGREDIENTS:
      return {
        ...state,
        ingredients: {
          ...action.ingredients
        },
        error: false
      };

    case ACTIONS.FETCH_INGREDIENTS_FAILED:
      return {
        ...state,
        error: true
      };

    default:
      return { ...state };
  }
};

export default reducer;
