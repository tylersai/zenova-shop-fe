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
) => async (dispatch, getState) => {
  try {
    dispatch({ type: ActionType.CREATE_ORDER_REQUEST });
    const { currentUserState } = getState();
    const { data } = await axios.post(
      "/orders",
      {
        orderItems,
        shippingInfo,
        paymentMethod,
        subtotal,
        shippingFee,
        taxAmount,
        totalAmount,
      },
      {
        headers: {
          Authorization:
            currentUserState.data &&
            currentUserState.data.access_token &&
            `Bearer ${currentUserState.data.access_token}`,
        },
      }
    );
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

export const clearExistingOrder = () => (dispatch) =>
  dispatch({ type: ActionType.CLEAR_ORDER_DETAILS });

export const getOrderByIdAction = (orderId) => async (dispatch, getState) => {
  try {
    dispatch({ type: ActionType.ORDER_DETAILS_REQUEST });
    const { currentUserState } = getState();

    const res = await axios.get("/orders/" + orderId, {
      headers: {
        Authorization:
          currentUserState.data &&
          currentUserState.data.access_token &&
          `Bearer ${currentUserState.data.access_token}`,
      },
    });

    dispatch({ type: ActionType.ORDER_DETAILS_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({
      type: ActionType.ORDER_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const payOrderAction = (orderId, paymentResult) => async (
  dispatch,
  getState
) => {
  try {
    const { currentUserState } = getState();

    const res = await axios.put(`/orders/${orderId}/pay`, paymentResult, {
      headers: {
        Authorization:
          currentUserState.data &&
          currentUserState.data.access_token &&
          `Bearer ${currentUserState.data.access_token}`,
      },
    });

    dispatch({ type: ActionType.ORDER_DETAILS_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({
      type: ActionType.ORDER_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
