import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import storage from "redux-persist/lib/storage";
import { REHYDRATE, persistReducer, persistStore } from "redux-persist";

const persistConfig = {
  key: authSlice.name,
  storage,
  REHYDRATE,
};

export const rootReducers = combineReducers({
  [authSlice.name]: persistReducer(persistConfig, authSlice.reducer),
});
const store = configureStore({
  reducer: rootReducers,
  middleware: [],
});

export const persistor = persistStore(store);
export default store;
