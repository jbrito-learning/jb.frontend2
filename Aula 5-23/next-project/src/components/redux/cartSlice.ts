import { createSlice } from "@reduxjs/toolkit";

interface CartState {
  items: {
    id: number;
    name: string;
    price: number;
  }[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart", // Nome do slice
  initialState, // Estado inicial
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

// Exportamos as actions
export const { addItem, removeItem } = cartSlice.actions;

// Exportamos o reducer
export default cartSlice.reducer;
