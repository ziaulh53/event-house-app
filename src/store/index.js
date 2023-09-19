import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import cartSlice from "./cart";
import storage from "redux-persist/lib/storage";
import { REHYDRATE, persistReducer, persistStore } from "redux-persist";

const persistConfig = {
  key: authSlice.name,
  storage,
  REHYDRATE,
};

export const rootReducers = combineReducers({
  [authSlice.name]: persistReducer(persistConfig, authSlice.reducer),
  [cartSlice.name]: cartSlice.reducer,
});
const store = configureStore({
  reducer: rootReducers,
  middleware: [],
});

export const persistor = persistStore(store);
export default store;
