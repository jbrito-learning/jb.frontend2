import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import cartReducer from "./cartSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer, // Adicionamos o reducer do contador
    cart: cartReducer, // Adicionamos o reducer do carrinho
  },
});

// Tipos para TypeScript
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
