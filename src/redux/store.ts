import { configureStore } from "@reduxjs/toolkit";
import { logActions } from "./middlewares";
import { pokemonReducer } from "./reducers/pokemonReducer";

export const store = configureStore({
  reducer: pokemonReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(logActions),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
