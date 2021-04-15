import { ActionType } from "../constants";

export const paymentMethodReducer = (state = { data: null }, action) => {
  switch (action.type) {
    case ActionType.SET_PAYMENT_METHOD:
      return { data: { ...state.data, paymentMethod: action.payload } };

    default:
      return state;
  }
};
