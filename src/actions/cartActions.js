import axios from "axios";
import { ActionType } from "../constants/actionConstant";

export const cartAddAction = (id, qty) => async (dispatch, getState) => {
  const { data } = await axios.get("/products/" + id);
  dispatch({
    type: ActionType.CART_ADD_ITEM,
    payload: {
      pid: data._id,
      name: data.name,
      image: data.image,
      price: data.price,
      countInStock: data.countInStock,
      qty,
    },
  });
  localStorage.setItem("cartItems", JSON.stringify(getState().cartState.data));
};
