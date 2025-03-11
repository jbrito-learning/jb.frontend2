"use client";

import Link from "next/link";
import { ShoppingCart, LogIn, LogOut, User, NotebookPen } from "lucide-react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { useQueryClient } from "@tanstack/react-query";
import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";

const Navbar = () => {
  const count = useSelector((state: RootState) => state.cart.items.length);
  const queryClient = useQueryClient();
  const router = useRouter();
  const pathname = usePathname();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const checkAuthStatus = async () => {
    try {
      setIsLoading(true);
      const response = await fetch("/api/me");
      setIsLoggedIn(response.ok);
    } catch (error) {
      console.error("Error checking auth status:", error);
      setIsLoggedIn(false);
    } finally {
      setIsLoading(false);
    }
  };

  // Check auth status on mount and when pathname changes
  useEffect(() => {
    checkAuthStatus();
  }, [pathname]);

  // Listen for auth status changes
  useEffect(() => {
    const handleAuthChange = () => {
      checkAuthStatus();
    };

    // Create a custom event listener for auth changes
    window.addEventListener("authChange", handleAuthChange);

    return () => {
      window.removeEventListener("authChange", handleAuthChange);
    };
  }, []);

  function fetchArticles() {
    return fetch(
      "https://67ca2fd7102d684575c4b4f8.mockapi.io/api/articles"
    ).then((res) => res.json());
  }

  const prefetchArticles = () => {
    queryClient.prefetchQuery({
      queryKey: ["articles"],
      queryFn: fetchArticles,
    });
  };

  const handleLogout = async () => {
    try {
      const response = await fetch("/api/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        setIsLoggedIn(false);
        window.dispatchEvent(new Event("authChange"));
        router.push("/");
        router.refresh();
      }
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

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
          href="/animations"
          className="hover:text-blue-600 transition-colors"
        >
          Animations
        </Link>
        <Link
          href="/products"
          className="hover:text-blue-600 transition-colors"
        >
          Products
        </Link>
        <Link
          href="/articles"
          className="hover:text-blue-600 transition-colors"
          onMouseEnter={prefetchArticles}
        >
          Articles
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

        {!isLoading && (
          <>
            {isLoggedIn ? (
              <>
                <Link
                  href="/user"
                  className="flex items-center gap-1 hover:text-blue-600 transition-colors"
                >
                  <User size={20} />
                  <span>Perfil</span>
                </Link>
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-1 hover:text-blue-600 transition-colors"
                >
                  <LogOut size={20} />
                  <span>Logout</span>
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  className="flex items-center gap-1 hover:text-blue-600 transition-colors"
                >
                  <LogIn size={20} />
                  <span>Login</span>
                </Link>
                <Link
                  href="/register"
                  className="flex items-center gap-1 hover:text-blue-600 transition-colors"
                >
                  <NotebookPen size={20} />
                  <span>Register</span>
                </Link>
              </>
            )}
          </>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
