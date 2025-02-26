import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter", // Nome do slice
  initialState: { value: 0 }, // Estado inicial
  reducers: {
    increment: (state) => {
      state.value += 1;
    }, // Aumenta o valor
    decrement: (state) => {
      state.value -= 1;
    }, // Diminui o valor
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    }, // Soma um valor específico
  },
});

// Exportamos as actions
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// Exportamos o reducer
export default counterSlice.reducer;
