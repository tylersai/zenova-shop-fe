import { ActionType } from "../constants/";

export const setPaymentMethodAction = (paymentMethod) => async (dispatch) => {
  dispatch({ type: ActionType.SET_PAYMENT_METHOD, payload: paymentMethod });
};
