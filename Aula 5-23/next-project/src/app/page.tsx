"use client";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import ProductList from "@/components/ProductList";
import { fetchProducts } from "@/redux/productsSlice";
import { AppDispatch } from "@/redux/store";

export default function Home() {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen pt-20 pb-10">
      <ProductList />
    </div>
  );
}
