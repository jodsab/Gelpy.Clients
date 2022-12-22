import { combineReducers } from "redux";
import authReducer from "./authReducer";
import categoriesReducer from "./categoriesReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  categories: categoriesReducer,
});

export default rootReducer;
