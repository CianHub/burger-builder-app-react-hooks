import * as actions from "./actions";

export const addIngredient = ingredientName => {
  return {
    type: actions.ADD_INGREDIENT,
    ingredientName
  };
};

export const removeIngredient = ingredientName => {
  return {
    type: actions.REMOVE_INGREDIENT,
    ingredientName
  };
};
