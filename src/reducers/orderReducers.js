import { ActionType } from "../constants";

export const createOrderReducer = (state = { data: null }, action) => {
  switch (action.type) {
    case ActionType.CREATE_ORDER_REQUEST:
      return { loading: true, data: null };

    case ActionType.CREATE_ORDER_SUCCESS:
      return { loading: false, data: action.payload };

    case ActionType.CREATE_ORDER_FAIL:
      return { loading: false, data: null, error: action.payload };

    case ActionType.CLEAR_CREATED_ORDER:
      return { loading: false, data: null };

    default:
      return state;
  }
};

export const getOrderByIdReducer = (state = { data: null }, action) => {
  switch (action.type) {
    case ActionType.ORDER_DETAILS_REQUEST:
      return { loading: true, data: null };

    case ActionType.ORDER_DETAILS_SUCCESS:
      return { loading: false, data: action.payload };

    case ActionType.ORDER_DETAILS_FAIL:
      return { loading: false, data: null, error: action.payload };

    case ActionType.CLEAR_ORDER_DETAILS:
      return { loading: false, data: null };

    default:
      return state;
  }
};

export const getMyOrdersReducer = (state = { data: [] }, action) => {
  switch (action.type) {
    case ActionType.GET_MY_ORDERS_REQUEST:
      return { loading: true, data: [] };

    case ActionType.GET_MY_ORDERS_SUCCESS:
      return { loading: false, data: action.payload };

    case ActionType.GET_MY_ORDERS_FAIL:
      return { loading: false, data: [], error: action.payload };

    default:
      return state;
  }
};
