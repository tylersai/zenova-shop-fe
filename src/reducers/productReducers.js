import { ActionType } from "../constants";

export const productListReducer = (state = { productList: [] }, action) => {
  switch (action.type) {
    case ActionType.PRODUCT_LIST_REQUEST:
      return { loading: true, productList: [] };

    case ActionType.PRODUCT_LIST_SUCCESS:
      return { loading: false, productList: action.payload };

    case ActionType.PRODUCT_LIST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
