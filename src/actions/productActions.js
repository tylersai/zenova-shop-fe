import axios from "axios";
import { ActionType } from "../constants/actionConstant";

export const productListAction = () => async (dispatch) => {
  try {
    dispatch({ type: ActionType.PRODUCT_LIST_REQUEST });

    const res = await axios.get("/products");

    dispatch({ type: ActionType.PRODUCT_LIST_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({
      type: ActionType.PRODUCT_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const productDetailsAction = (id) => async (dispatch) => {
  try {
    dispatch({ type: ActionType.PRODUCT_DETAILS_REQUEST });

    const res = await axios.get("/products/" + id);

    dispatch({ type: ActionType.PRODUCT_DETAILS_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({
      type: ActionType.PRODUCT_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
