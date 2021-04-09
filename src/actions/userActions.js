import axios from "axios";
import { ActionType, StorageConst } from "../constants/";

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
