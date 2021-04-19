import axios from "axios";
import { ActionType, StorageConst } from "../constants/";

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
  localStorage.setItem(
    StorageConst.CART_ITEMS,
    JSON.stringify(getState().cartState.data)
  );
};

export const cartRemoveAction = (id) => async (dispatch, getState) => {
  dispatch({
    type: ActionType.CART_REMOVE_ITEM,
    payload: {
      pid: id,
    },
  });
  localStorage.setItem(
    StorageConst.CART_ITEMS,
    JSON.stringify(getState().cartState.data)
  );
};

export const removeCartItems = () => (dispatch) => {
  dispatch({ type: ActionType.CART_REMOVE_ITEM });
  localStorage.removeItem(StorageConst.CART_ITEMS);
};
