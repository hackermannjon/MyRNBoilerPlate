import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ExemploState {
  valor: number;
}

const initialState: ExemploState = {
  valor: 0,
};

const exemploSlice = createSlice({
  name: "exemplo",
  initialState,
  reducers: {
    incrementar: (state) => {
      state.valor += 1;
    },
    setValor: (state, action: PayloadAction<number>) => {
      state.valor = action.payload;
    },
  },
});

export const { incrementar, setValor } = exemploSlice.actions;
export default exemploSlice.reducer;
