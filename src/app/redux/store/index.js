import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducer/index";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { persistStore } from "redux-persist";
import persistReducer from "redux-persist/es/persistReducer";
import AsyncStorage from "@react-native-async-storage/async-storage";

const persistConfig = {
  key: "main-root",
  storage: AsyncStorage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleware = [thunk];
if (process.env.NODE_ENV === "development") {
  middleware.push(logger);
}
const store = createStore(persistedReducer, applyMiddleware(...middleware));
const Persistor = persistStore(store);

export { Persistor };
export default store;
