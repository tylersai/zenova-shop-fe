import { ActionType } from "../constants";

export const cartReducer = (state = { data: [] }, action) => {
  switch (action.type) {
    case ActionType.CART_ADD_ITEM:
      const item = action.payload;
      const existItemIndex = state.data.findIndex((el) => el.pid === item.pid);
      if (existItemIndex >= 0) {
        const newData = [...state.data];
        newData.splice(existItemIndex, 1, item);
        return { ...state, data: newData };
      } else {
        return { ...state, data: [...state.data, item] };
      }

    case ActionType.CART_REMOVE_ITEM:
      return { data: state.data.filter((el) => el.pid !== action.payload.pid) };

    default:
      return state;
  }
};
