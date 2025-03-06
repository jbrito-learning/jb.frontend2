/* eslint-disable @next/next/no-img-element */
"use client";

import { useState, useEffect } from "react";
import {
  Product,
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} from "@/app/services/api";

const ProductsPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    price: "",
    description: "",
  });

  // Fetch all products on component mount
  useEffect(() => {
    fetchProducts();
  }, []);

  // Fetch all products
  const fetchProducts = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await getProducts();
      setProducts(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to fetch products");
    } finally {
      setLoading(false);
    }
  };

  // Fetch a single product
  const fetchProductById = async (id: string) => {
    setLoading(true);
    setError(null);
    try {
      const data = await getProductById(id);
      setSelectedProduct(data);
      // Populate form with selected product data for editing
      setFormData({
        name: data.name,
        image: data.image,
        price: data.price,
        description: data.description,
      });
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : `Failed to fetch product with ID ${id}`
      );
    } finally {
      setLoading(false);
    }
  };

  // Create a new product
  const handleCreateProduct = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      await createProduct(formData);
      // Reset form
      setFormData({
        name: "",
        image: "",
        price: "",
        description: "",
      });
      // Refresh products list
      fetchProducts();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to create product");
    } finally {
      setLoading(false);
    }
  };

  // Update an existing product
  const handleUpdateProduct = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedProduct) return;

    setLoading(true);
    setError(null);
    try {
      await updateProduct(selectedProduct.id, formData);
      setSelectedProduct(null);
      // Reset form
      setFormData({
        name: "",
        image: "",
        price: "",
        description: "",
      });
      // Refresh products list
      fetchProducts();
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : `Failed to update product with ID ${selectedProduct.id}`
      );
    } finally {
      setLoading(false);
    }
  };

  // Delete a product
  const handleDeleteProduct = async (id: string) => {
    if (!window.confirm("Are you sure you want to delete this product?"))
      return;

    setLoading(true);
    setError(null);
    try {
      await deleteProduct(id);
      // If the deleted product is currently selected, clear the selection
      if (selectedProduct && selectedProduct.id === id) {
        setSelectedProduct(null);
        setFormData({
          name: "",
          image: "",
          price: "",
          description: "",
        });
      }
      // Refresh products list
      fetchProducts();
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : `Failed to delete product with ID ${id}`
      );
    } finally {
      setLoading(false);
    }
  };

  // Handle form input changes
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Products Page (Fetch API)</h1>

      {/* Error message */}
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}

      {/* Product Form */}
      <div className="mb-8 p-4 border rounded">
        <h2 className="text-xl font-semibold mb-2">
          {selectedProduct ? "Edit Product" : "Add New Product"}
        </h2>
        <form
          onSubmit={selectedProduct ? handleUpdateProduct : handleCreateProduct}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-black">
            <div>
              <label className="block mb-1 text-white">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div>
              <label className="block mb-1 text-white">Image URL</label>
              <input
                type="url"
                name="image"
                value={formData.image}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div>
              <label className="block mb-1 text-white">Price</label>
              <input
                type="text"
                name="price"
                value={formData.price}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div className="md:col-span-2">
              <label className="block mb-1 text-white">Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                rows={3}
                required
              />
            </div>
          </div>
          <div className="mt-4 flex gap-2">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              disabled={loading}
            >
              {loading
                ? "Processing..."
                : selectedProduct
                ? "Update Product"
                : "Add Product"}
            </button>
            {selectedProduct && (
              <button
                type="button"
                onClick={() => {
                  setSelectedProduct(null);
                  setFormData({
                    name: "",
                    image: "",
                    price: "",
                    description: "",
                  });
                }}
                className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
              >
                Cancel
              </button>
            )}
          </div>
        </form>
      </div>

      {/* Products List */}
      <div>
        <h2 className="text-xl font-semibold mb-2">Products List</h2>
        {loading && !products.length ? (
          <p>Loading products...</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {products.map((product) => (
              <div key={product.id} className="border rounded p-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover mb-2 rounded"
                />
                <h3 className="font-semibold">{product.name}</h3>
                <p className="text-white mb-2">${product.price}</p>
                <p className="text-sm text-white mb-4 line-clamp-2">
                  {product.description}
                </p>
                <div className="flex gap-2">
                  <button
                    onClick={() => fetchProductById(product.id)}
                    className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteProduct(product.id)}
                    className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
        {!loading && !products.length && (
          <p>No products found. Add some products to get started!</p>
        )}
      </div>
    </div>
  );
};

export default ProductsPage;
