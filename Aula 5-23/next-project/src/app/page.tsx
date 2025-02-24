"use client";

import { useDispatch } from "react-redux";
import { increment } from "@/components/redux/counterSlice";

export default function Home() {
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <button
        style={{
          backgroundColor: "white",
          color: "black",
          padding: "10px 20px",
          borderRadius: "5px",
          cursor: "pointer",
        }}
        onClick={() => dispatch(increment())}
      >
        Add to cart
      </button>
    </div>
  );
}
