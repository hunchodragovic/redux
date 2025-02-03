import { combineReducers } from "redux";
import cakeReducer from "./cake/cakeReducer";
import IceCreamReducer from "./iceCream/IceCreamReducer";
import reducer from "./user/userReducer";
export const rootReducer = combineReducers({
  cake: cakeReducer,
  IceCream: IceCreamReducer,
  user: reducer,
});
