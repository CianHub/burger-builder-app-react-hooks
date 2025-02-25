import * as actions from "./actions";
import { instance } from "../../axios-orders";

export const purchaseBurgerSuccess = (orderId, orderData) => {
  return {
    type: actions.PURCHASE_BURGER_SUCCESS,
    orderId,
    orderData
  };
};

export const purchaseBurgerFail = error => {
  return {
    type: actions.PURCHASE_BURGER_FAIL,
    error
  };
};

export const purchaseBurgerStart = () => {
  return {
    type: actions.PURCHASE_BURGER_START
  };
};

export const purchaseBurger = (orderData, token) => {
  return dispatch => {
    dispatch(purchaseBurgerStart());
    instance
      .post("orders.json?auth=" + token, orderData)
      .then(response => {
        dispatch(purchaseBurgerSuccess(response.data.name, orderData));
      })
      .catch(error => {
        dispatch(purchaseBurgerFail(error));
      });
  };
};

export const purchaseInit = () => {
  return {
    type: actions.PURCHASE_INIT
  };
};

export const fetchOrdersSuccess = orders => {
  return {
    type: actions.FETCH_ORDERS_SUCCESS,
    orders
  };
};

export const fetchOrdersFail = error => {
  return {
    type: actions.FETCH_ORDERS_FAIL,
    error
  };
};

export const fetchOrdersStart = () => {
  return {
    type: actions.FETCH_ORDERS_START
  };
};
export const fetchOrders = (token, userId) => {
  return dispatch => {
    dispatch(fetchOrdersStart());
    const queryParams =
      "auth=" + token + '&orderBy="userId"&equalTo="' + userId + '"';
    instance
      .get("/orders.json?" + queryParams)
      .then(res => {
        const fetchedOrders = [];
        for (let key in res.data) {
          fetchedOrders.push({
            ...res.data[key],
            id: key
          });
        }
        dispatch(fetchOrdersSuccess(fetchedOrders));
      })
      .catch(err => {
        dispatch(fetchOrdersFail(err));
      });
  };
};
