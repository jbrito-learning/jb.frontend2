// API service using Fetch API
const API_URL = "https://67b8d8c9699a8a7baef57ad0.mockapi.io/api";

// Type definition for Product
export interface Product {
  id: string;
  name: string;
  image: string;
  price: string;
  description: string;
  createdAt: string;
}

// GET all products
export const getProducts = async (): Promise<Product[]> => {
  const response = await fetch(`${API_URL}/products`);

  if (!response.ok) {
    throw new Error(`Failed to fetch products: ${response.status}`);
  }

  return response.json();
};

// GET a single product by ID
export const getProductById = async (id: string): Promise<Product> => {
  const response = await fetch(`${API_URL}/products/${id}`);

  if (!response.ok) {
    throw new Error(
      `Failed to fetch product with ID ${id}: ${response.status}`
    );
  }

  return response.json();
};

// POST a new product
export const createProduct = async (
  product: Omit<Product, "id" | "createdAt">
): Promise<Product> => {
  const response = await fetch(`${API_URL}/products`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  });

  if (!response.ok) {
    throw new Error(`Failed to create product: ${response.status}`);
  }

  return response.json();
};

// PUT (update) an existing product
export const updateProduct = async (
  id: string,
  product: Partial<Omit<Product, "id" | "createdAt">>
): Promise<Product> => {
  const response = await fetch(`${API_URL}/products/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  });

  if (!response.ok) {
    throw new Error(
      `Failed to update product with ID ${id}: ${response.status}`
    );
  }

  return response.json();
};

// DELETE a product
export const deleteProduct = async (id: string): Promise<void> => {
  const response = await fetch(`${API_URL}/products/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error(
      `Failed to delete product with ID ${id}: ${response.status}`
    );
  }
};
