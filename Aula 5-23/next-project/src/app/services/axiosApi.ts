// API service using Axios
import axios from "axios";
import { Product } from "./api"; // Reusing the Product interface

const API_URL = "https://67b8d8c9699a8a7baef57ad0.mockapi.io/api";

// Create axios instance
const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// GET all products
export const getProductsWithAxios = async (): Promise<Product[]> => {
  try {
    const response = await axiosInstance.get("/products");
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      throw new Error(`Failed to fetch products: ${error.response?.status}`);
    }
    throw error;
  }
};

// GET a single product by ID
export const getProductByIdWithAxios = async (id: string): Promise<Product> => {
  try {
    const response = await axiosInstance.get(`/products/${id}`);
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      throw new Error(
        `Failed to fetch product with ID ${id}: ${error.response?.status}`
      );
    }
    throw error;
  }
};

// POST a new product
export const createProductWithAxios = async (
  product: Omit<Product, "id" | "createdAt">
): Promise<Product> => {
  try {
    const response = await axiosInstance.post("/products", product);
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      throw new Error(`Failed to create product: ${error.response?.status}`);
    }
    throw error;
  }
};

// PUT (update) an existing product
export const updateProductWithAxios = async (
  id: string,
  product: Partial<Omit<Product, "id" | "createdAt">>
): Promise<Product> => {
  try {
    const response = await axiosInstance.put(`/products/${id}`, product);
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      throw new Error(
        `Failed to update product with ID ${id}: ${error.response?.status}`
      );
    }
    throw error;
  }
};

// DELETE a product
export const deleteProductWithAxios = async (id: string): Promise<void> => {
  try {
    await axiosInstance.delete(`/products/${id}`);
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      throw new Error(
        `Failed to delete product with ID ${id}: ${error.response?.status}`
      );
    }
    throw error;
  }
};
