import * as ACTIONS from "../actions/actions";

const initialState = {
  ingredients: null,
  price: 0,
  error: false,
  building: false
};

const INGREDIENT_PRICES = { salad: 0.5, cheese: 0.5, meat: 0.3, bacon: 2 };

const burgerReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.ADD_INGREDIENT:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredientName]: state.ingredients[action.ingredientName] + 1
        },
        price: state.price + INGREDIENT_PRICES[action.ingredientName],
        building: true
      };

    case ACTIONS.REMOVE_INGREDIENT:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredientName]: state.ingredients[action.ingredientName] - 1
        },
        price: state.price - INGREDIENT_PRICES[action.ingredientName],
        building: true
      };

    case ACTIONS.SET_INGREDIENTS:
      return {
        ...state,
        ingredients: {
          salad: action.ingredients.salad,
          bacon: action.ingredients.bacon,
          cheese: action.ingredients.cheese,
          meat: action.ingredients.meat
        },
        error: false,
        price: initialState.price,
        building: false
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

export default burgerReducer;
