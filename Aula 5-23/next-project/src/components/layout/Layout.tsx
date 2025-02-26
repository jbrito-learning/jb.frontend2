"use client";

import Navbar from "./Navbar";
import Footer from "./Footer";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "@/redux/store";
import { Provider } from "react-redux";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </PersistGate>
    </Provider>
  );
};

export default Layout;
