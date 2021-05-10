import { ActionType } from "../constants";

export const registerUserReducer = (state = { data: null }, action) => {
  switch (action.type) {
    case ActionType.USER_REGISTER_REQUEST:
      return { loading: true, data: null };

    case ActionType.USER_REGISTER_SUCCESS:
      return { loading: false, data: action.payload };

    case ActionType.USER_REGISTER_FAIL:
      return { loading: false, error: action.payload };

    case ActionType.USER_REGISTER_CLEAR:
      return { loading: false, error: null };

    default:
      return state;
  }
};

export const loginReducer = (state = { data: null }, action) => {
  switch (action.type) {
    case ActionType.USER_LOGIN_REQUEST:
      return { loading: true, data: null };

    case ActionType.USER_LOGIN_SUCCESS:
      return { loading: false, data: action.payload };

    case ActionType.USER_LOGIN_FAIL:
      return { loading: false, data: null, error: action.payload };

    case ActionType.USER_LOGOUT:
      return { data: null };

    case ActionType.LOGIN_USER_UPDATE_REQUEST:
      return { updating: true, data: state.data };

    case ActionType.LOGIN_USER_UPDATE_SUCCESS:
      return { updating: false, data: { ...state.data, ...action.payload } };

    case ActionType.LOGIN_USER_UPDATE_FAIL:
      return { updating: false, data: state.data, error: action.payload };

    default:
      return state;
  }
};
