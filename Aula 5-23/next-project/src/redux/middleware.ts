import { Middleware } from "@reduxjs/toolkit";

const loggerMiddleware: Middleware = (store) => (next) => (action) => {
  console.log("🚀 Action:", action);
  console.log("📦 Estado antes:", store.getState());

  const result = next(action); // Enviar a ação para o próximo middleware/reducer

  console.log("✅ Estado depois:", store.getState());
  return result;
};

export default loggerMiddleware;
