import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import counterReducer from "./counterSlice";
import cartReducer from "./cartSlice";
import loggerMiddleware from "./middleware";
import usersReducer from "./userSlice";

const persistConfig = {
  key: "root",
  storage,
};

const persistedCounterReducer = persistReducer(persistConfig, counterReducer);
const persistedCartReducer = persistReducer(persistConfig, cartReducer);
const persistedUsersReducer = persistReducer(persistConfig, usersReducer);

export const store = configureStore({
  reducer: {
    counter: persistedCounterReducer,
    cart: persistedCartReducer,
    users: persistedUsersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
      },
    }).concat(loggerMiddleware),
});

export const persistor = persistStore(store);

// Tipos para TypeScript
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
