import axios from "axios";
import { ActionType } from "../constants/";

export const createOrderAction = (
  orderItems,
  shippingInfo,
  paymentMethod,
  subtotal,
  shippingFee,
  taxAmount,
  totalAmount
) => async (dispatch) => {
  try {
    dispatch({ type: ActionType.CREATE_ORDER_REQUEST });
    const { data } = await axios.post("/orders", {
      orderItems,
      shippingInfo,
      paymentMethod,
      subtotal,
      shippingFee,
      taxAmount,
      totalAmount,
    });
    dispatch({ type: ActionType.CREATE_ORDER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: ActionType.CREATE_ORDER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const clearCreatedOrder = () => (dispatch) =>
  dispatch({ type: ActionType.CLEAR_CREATED_ORDER });
