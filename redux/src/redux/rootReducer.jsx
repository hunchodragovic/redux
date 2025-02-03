import { combineReducers } from "redux";
import cakeReducer from "./cake/cakeReducer";
import IceCreamReducer from "./iceCream/IceCreamReducer";
export const rootReducer = combineReducers({
  cake: cakeReducer,
  IceCream: IceCreamReducer,
});
