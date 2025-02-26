"use client";

import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

const Navbar = () => {
  const count = useSelector((state: RootState) => state.cart.items.length);

  return (
    <header className="w-full max-w-[100vw] px-8 py-4 bg-white flex justify-between items-center text-black fixed z-10 shadow-sm">
      <Link href="/" className="text-2xl font-bold">
        Project Name
      </Link>
      <nav className="flex justify-end items-center gap-6">
        <Link href="/" className="hover:text-blue-600 transition-colors">
          Home
        </Link>
        <Link href="/about" className="hover:text-blue-600 transition-colors">
          About
        </Link>
        <Link
          href="/cart"
          className="relative flex hover:text-blue-600 transition-colors"
        >
          <ShoppingCart size={24} />
          {count > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex justify-center items-center text-xs">
              {count}
            </span>
          )}
        </Link>
        <Link href="/contact" className="hover:text-blue-600 transition-colors">
          Contact
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
