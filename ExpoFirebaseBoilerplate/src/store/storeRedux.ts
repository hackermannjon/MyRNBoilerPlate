import { configureStore } from "@reduxjs/toolkit";
import exemploReducer from "./exemploSliceRedux";

export const store = configureStore({
  reducer: {
    exemplo: exemploReducer,
    // adicione outros slices aqui
  },
});

// Tipos auxiliares para uso no TypeScript
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
