/* eslint-disable @next/next/no-img-element */
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/store";
import { addItem } from "@/redux/cartSlice";
import { Product } from "@/redux/productsSlice";

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state: RootState) => state.products.products);
  const status = useSelector((state: RootState) => state.products.status);

  const handleAddToCart = (product: Product) => {
    dispatch(
      addItem({
        id: product.id,
        title: product.title,
        price: product.price || 0,
      })
    );
  };

  if (status === "loading") {
    return (
      <div className="flex justify-center items-center h-[300px] text-xl text-gray-600">
        Loading...
      </div>
    );
  }

  if (status === "failed") {
    return (
      <div className="flex justify-center items-center h-[300px] text-xl text-red-600">
        Failed to fetch products
      </div>
    );
  }

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center">Our Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 text-black">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col h-full"
          >
            {product.image && (
              <div className="h-48 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            )}
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-lg font-bold mb-2 line-clamp-2">
                {product.title}
              </h3>
              <p className="text-xl font-bold text-gray-700 mb-4">
                ${product.price?.toFixed(2) || "N/A"}
              </p>
              <p className="text-gray-600 mb-6 flex-grow line-clamp-3">
                {product.description}
              </p>
              <button
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition-colors duration-200 mt-auto"
                onClick={() => handleAddToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
