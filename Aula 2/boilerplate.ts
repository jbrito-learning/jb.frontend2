// Loja online

type User = {
  name: string;
  transactions: Array<string>;
  points: number;
};

type Product = {
  id: number;
  name: string;
  price: number;
};

type Cart = {
  total: number;
  items: Product[];
};

const user: User = {
  name: "User",
  transactions: [],
  points: 0,
};

const product: Product = {
  id: 1,
  name: "Bag",
  price: 10,
};

const cart: Cart = {
  items: [product],
  total: 10,
};
