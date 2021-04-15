import { ActionType } from "../constants";

export const paymentMethodReducer = (state = { data: null }, action) => {
  switch (action.type) {
    case ActionType.SET_PAYMENT_METHOD:
      return { data: { paymentMethod: action.payload, ...state.data } };

    default:
      return state;
  }
};
