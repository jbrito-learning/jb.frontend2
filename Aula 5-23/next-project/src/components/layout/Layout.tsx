"use client";

import Navbar from "./Navbar";
import Footer from "./Footer";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "@/redux/store";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <QueryClientProvider client={queryClient}>
          <Navbar />
          <main className="min-h-screen overflow-hidden py-20">{children}</main>
          <Footer />
        </QueryClientProvider>
      </PersistGate>
    </Provider>
  );
};

export default Layout;
