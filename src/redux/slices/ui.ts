import { createSlice } from "@reduxjs/toolkit";

interface IUISlice {
  loading: boolean;
  error: string;
}

const initialState: IUISlice = {
  loading: false,
  error: "",
};

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setError: (state, action) => {
      state.error = action.payload.message;
    },
    clearError: (state, action) => {
      state.error = "";
    },
    toggleLoader: (state) => {
      state.loading = !state.loading;
    },
  },
});

export const { clearError, setError, toggleLoader } = uiSlice.actions;

export const uiReducer = uiSlice.reducer;
