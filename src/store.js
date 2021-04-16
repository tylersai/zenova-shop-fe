import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  productDetailsReducer,
  productListReducer,
  cartReducer,
  loginReducer,
  registerUserReducer,
  shippingInfoReducer,
  paymentMethodReducer,
  createOrderReducer,
} from "./reducers";
import { StorageConst } from "./constants";

const reducer = combineReducers({
  productListState: productListReducer,
  productDetailsState: productDetailsReducer,
  cartState: cartReducer,
  currentUserState: loginReducer,
  newUserState: registerUserReducer,
  shippingInfoState: shippingInfoReducer,
  paymentMethodState: paymentMethodReducer,
  createOrderState: createOrderReducer,
});

const cartItemsFromStorage = JSON.parse(
  localStorage.getItem(StorageConst.CART_ITEMS) || "[]"
);
const currentUserFromStorage = JSON.parse(
  localStorage.getItem(StorageConst.CURRENT_USER) || "null"
);
const shippingInfoFromStorage = JSON.parse(
  localStorage.getItem(StorageConst.SHIPPING_INFO) || "null"
);
const initialState = {
  cartState: { data: cartItemsFromStorage },
  currentUserState: { data: currentUserFromStorage },
  shippingInfoState: { data: shippingInfoFromStorage },
  paymentMethodState: {
    data: {
      paymentMethod: "PayPal",
    },
  },
};

const middleWares = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleWares))
);

export default store;
