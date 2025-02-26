/* eslint-disable @next/next/no-img-element */
"use client";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/store";
import { removeItem } from "@/redux/cartSlice";
import { Trash2 } from "lucide-react";
import Link from "next/link";

export default function CartPage() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const handleRemoveItem = (id: number) => {
    dispatch(removeItem(id));
  };

  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  if (cartItems.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen pt-20 pb-10">
        <div className="bg-white p-8 rounded-lg shadow-md max-w-2xl w-full">
          <h1 className="text-2xl font-bold mb-6 text-center">Your Cart</h1>
          <div className="text-center py-8">
            <p className="text-gray-600 mb-6">Your cart is empty</p>
            <Link
              href="/"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition-colors duration-200"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen pt-20 pb-10 text-black">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-4xl w-full">
        <h1 className="text-2xl font-bold mb-6">Your Cart</h1>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="py-2 px-4 text-left">Product</th>
                <th className="py-2 px-4 text-right">Price</th>
                <th className="py-2 px-4 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id} className="border-b hover:bg-gray-50">
                  <td className="py-4 px-4">
                    <div className="flex items-center">
                      {item.image && (
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-16 h-16 object-cover mr-4 rounded"
                        />
                      )}
                      <span className="font-medium">{item.title}</span>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-right">
                    ${item.price.toFixed(2)}
                  </td>
                  <td className="py-4 px-4 text-center">
                    <button
                      onClick={() => handleRemoveItem(item.id)}
                      className="text-red-500 hover:text-red-700 transition-colors duration-200"
                      aria-label="Remove item"
                    >
                      <Trash2 size={20} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="font-bold">
                <td className="py-4 px-4 text-right" colSpan={1}>
                  Total:
                </td>
                <td className="py-4 px-4 text-right">
                  ${totalPrice.toFixed(2)}
                </td>
                <td></td>
              </tr>
            </tfoot>
          </table>
        </div>

        <div className="mt-8 flex justify-between">
          <Link
            href="/"
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded transition-colors duration-200"
          >
            Continue Shopping
          </Link>
          <button
            className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded transition-colors duration-200"
            onClick={() => alert("Checkout functionality would go here")}
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
