import { ActionType } from "../constants";

export const loginReducer = (state = { data: null }, action) => {
  switch (action.type) {
    case ActionType.USER_LOGIN_REQUEST:
      return { loading: true, data: null };

    case ActionType.USER_LOGIN_SUCCESS:
      return { loading: false, data: action.payload };

    case ActionType.USER_LOGIN_FAIL:
      return { loading: false, error: action.payload };

    case ActionType.USER_LOGOUT:
      return { data: null };

    default:
      return state;
  }
};
