import { ActionType } from "../constants";

export const shippingInfoReducer = (state = { data: {} }, action) => {
  switch (action.type) {
    case ActionType.SAVE_SHIPPING_INFO:
      return { data: action.payload };

    case ActionType.REMOVE_SHIPPING_INFO:
      return { data: null };

    default:
      return state;
  }
};
