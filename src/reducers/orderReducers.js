import { ActionType } from "../constants";

export const createOrderReducer = (state = { data: null }, action) => {
  switch (action.type) {
    case ActionType.CREATE_ORDER_REQUEST:
      return { loading: true, data: null };

    case ActionType.CREATE_ORDER_SUCCESS:
      return { loading: false, data: action.payload };

    case ActionType.CREATE_ORDER_FAIL:
      return { loading: false, error: action.payload };

    case ActionType.CLEAR_CREATED_ORDER:
      return { loading: false, data: null, error: null };

    default:
      return state;
  }
};
