// Loja online

type User = {
  name: string;
  transactions: Array<string>;
  points: number;
};

type Produto = {
  id: number;
  name: string;
  price: number;
};

type Cart = {
  total: number;
  items: Product[];
};

type ApiProduct = {
  id: number;
  name: string;
  price: number;
};

class CreateProduct implements Produto {
  id: number;
  name: string;
  price: number;

  constructor(item: ApiProduct) {
    this.id = item.id;
    this.name = item.name;
    this.price = item.price;
  }

  readProduct() {
    return `id: ${this.id}, name: ${this.name}, price: ${this.price}`;
  }
}

const i = { name: "1", price: 1, id: 1 };

const product = new CreateProduct(i);
