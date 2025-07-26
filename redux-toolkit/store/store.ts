import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import rootReducer from "../slices/rootReducer";

// Middleware Configuration
const middleware = (getDefaultMiddleware: any) =>
  getDefaultMiddleware().concat(logger);

export const store = configureStore({
  reducer: rootReducer,
  middleware, // Apply custom middleware
  devTools: process.env.NODE_ENV === "development"
});

// Infer the `RootState` and `AppDispatch` types from the store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
