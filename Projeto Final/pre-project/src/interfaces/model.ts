export interface Product {
  name: string;
  price: number;
}

export class SingleProduct {
  name: string;
  price: number;

  constructor(item: Product) {
    this.name = item.name;
    this.price = item.price + item.price * 0.1;
  }
}
