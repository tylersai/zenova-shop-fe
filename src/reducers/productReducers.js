import { ActionType } from "../constants";

export const productListReducer = (state = { data: [] }, action) => {
  switch (action.type) {
    case ActionType.PRODUCT_LIST_REQUEST:
      return { loading: true, data: [] };

    case ActionType.PRODUCT_LIST_SUCCESS:
      return { loading: false, data: action.payload };

    case ActionType.PRODUCT_LIST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const productDetailsReducer = (state = { data: {} }, action) => {
  switch (action.type) {
    case ActionType.PRODUCT_DETAILS_REQUEST:
      return { loading: true, data: {} };

    case ActionType.PRODUCT_DETAILS_SUCCESS:
      return { loading: false, data: action.payload };

    case ActionType.PRODUCT_DETAILS_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const productFormReducer = (state = { data: {} }, action) => {
  switch (action.type) {
    case ActionType.PRODUCT_FORM_REQUEST:
      return { loading: true, data: state.data };

    case ActionType.PRODUCT_FORM_SUCCESS:
      return { loading: false, data: action.payload };

    case ActionType.PRODUCT_FORM_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
