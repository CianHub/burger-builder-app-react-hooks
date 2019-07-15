import * as ACTIONS from "./../actions/actions";

const initialState = {
  ingredients: { salad: 0, bacon: 0, cheese: 0, meat: 0 },
  price: 4
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.ADD_INGREDIENTS:
      return {
        ...state,
        ingredients: {
          ...this.state.ingredients,
          [action.ingredientName]: state.ingredients[action.ingredientName] + 1
        }
      };

    case ACTIONS.REMOVE_INGREDIENTS:
      return {};

    default:
      return {};
  }
};

export default reducer;
