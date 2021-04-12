import { ActionType, StorageConst } from "../constants/";

export const saveShippingInfoAction = (shippingInfo) => async (dispatch) => {
  dispatch({ type: ActionType.SAVE_SHIPPING_INFO, payload: shippingInfo });
  localStorage.setItem(
    StorageConst.SHIPPING_INFO,
    JSON.stringify(shippingInfo)
  );
};

export const clearShippingInfoAction = () => async (dispatch) => {
  dispatch({ type: ActionType.REMOVE_SHIPPING_INFO });
  localStorage.removeItem(StorageConst.SHIPPING_INFO);
};
