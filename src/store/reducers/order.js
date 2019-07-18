import * as actions from "../actions/actions";

const initialState = {
  orders: [],
  loading: false,
  purchased: false
};

const ordersReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.PURCHASE_BURGER_START:
      return { ...state, loading: true };

    case actions.PURCHASE_BURGER_SUCCESS:
      const newOrder = {
        ...action.orderData,
        orderId: action.orderId
      };
      return {
        ...state,
        loading: false,
        orders: state.orders.concat(newOrder),
        purchased: true
      };

    case actions.PURCHASE_BURGER_FAIL:
      return { ...state, loading: false };

    case actions.PURCHASE_INIT:
      return { ...state, purchased: false };

    case actions.FETCH_ORDERS_START:
      return { ...state, loading: true };

    case actions.FETCH_ORDERS_SUCCESS:
      return {
        ...state,
        loading: false,
        orders: action.orders
      };
    case actions.FETCH_ORDERS_FAIL:
      return { ...state, loading: false };
    default:
      return state;
  }
};

export default ordersReducer;
