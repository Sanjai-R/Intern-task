import {combineReducers} from "redux";
import { reducer } from "./productreducer";

export default combineReducers({
  products: reducer,

});