"use client";

import Navbar from "./Navbar";
import Footer from "./Footer";
import { store } from "@/components/redux/store";
import { Provider } from "react-redux";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      <Navbar />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </Provider>
  );
};

export default Layout;
