"use client";

import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { useSelector } from "react-redux";
import { RootState } from "@/components/redux/store";

const Navbar = () => {
  const count = useSelector((state: RootState) => state.counter.value);

  return (
    <header
      style={{
        width: "100%",
        maxWidth: "100vw",
        padding: "15px 30px",
        background: "white",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        color: "black",
        position: "fixed",
      }}
    >
      <Link href="/" style={{ fontSize: "24px", fontWeight: "bold" }}>
        Project Name
      </Link>
      <nav
        style={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/cart" style={{ position: "relative", display: "flex" }}>
          <ShoppingCart size={24} />
          <span
            style={{
              position: "absolute",
              top: "-8px",
              right: "-8px",
              background: "#ff4444",
              color: "white",
              borderRadius: "50%",
              width: "20px",
              height: "20px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "12px",
            }}
          >
            {count}
          </span>
        </Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </header>
  );
};

export default Navbar;
