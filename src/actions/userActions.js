import axios from "axios";
import { ActionType, StorageConst } from "../constants/";
import { getHeaderConfig } from "../utils/functions";

export const registerUserAction = (
  name,
  email,
  password,
  passwordReentered
) => async (dispatch) => {
  try {
    dispatch({ type: ActionType.USER_REGISTER_REQUEST });
    const { data } = await axios.post("/users/register", {
      name,
      email,
      password,
      passwordReentered,
    });
    dispatch({ type: ActionType.USER_REGISTER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: ActionType.USER_REGISTER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const clearRegisteredUser = () => (dispatch) =>
  dispatch({ type: ActionType.USER_REGISTER_CLEAR });

export const loginAction = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: ActionType.USER_LOGIN_REQUEST });
    const { data } = await axios.post("/users/login", { email, password });
    dispatch({ type: ActionType.USER_LOGIN_SUCCESS, payload: data });
    localStorage.setItem(StorageConst.CURRENT_USER, JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: ActionType.USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const logoutAction = () => async (dispatch) => {
  dispatch({ type: ActionType.USER_LOGOUT });
  localStorage.removeItem(StorageConst.CURRENT_USER);
};

export const updateProfileAction = (name, email) => async (
  dispatch,
  getState
) => {
  try {
    dispatch({ type: ActionType.LOGIN_USER_UPDATE_REQUEST });
    await axios.put(
      "/users/profile",
      { name, email },
      getHeaderConfig(getState)
    );
    dispatch({
      type: ActionType.LOGIN_USER_UPDATE_SUCCESS,
      payload: { name, email },
    });
    const newData = { ...getState().currentUserState.data, name, email };
    localStorage.setItem(StorageConst.CURRENT_USER, JSON.stringify(newData));
  } catch (error) {
    dispatch({
      type: ActionType.LOGIN_USER_UPDATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
