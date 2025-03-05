"use client";

import Navbar from "./Navbar";
import Footer from "./Footer";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "@/redux/store";
import { Provider } from "react-redux";
import PageTransition from "../animations/PageTransition";
import { AnimatePresence } from "framer-motion";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Navbar />
        <main className="min-h-screen">
          <AnimatePresence mode="wait">
            <PageTransition>{children}</PageTransition>
          </AnimatePresence>
        </main>
        <Footer />
      </PersistGate>
    </Provider>
  );
};

export default Layout;
