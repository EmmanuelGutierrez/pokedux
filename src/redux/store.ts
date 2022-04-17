import { configureStore } from "@reduxjs/toolkit";
import { logActions } from "./middlewares";
import { rootReducer } from "./reducers/rootReducers";

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(logActions),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
