// Exemplo

class Animal {
  name: string;
  age: number;
  race: string;

  constructor(name: string, age: number, race: string) {
    this.name = name;
    this.age = age;
    this.race = race;
  }

  doSound(): void {
    console.log("Miau");
  }
}

class Dog extends Animal {
  doSound(): void {
    console.log("Woof");
  }
}

//Exercicio 1

class Veiculo {
  marca: string;
  modelo: string;
  ano: number;

  constructor(marca: string, modelo: string, ano: number) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
  }

  description(): string {
    return `This car is a ${this.marca} with model ${this.modelo} from the year ${this.ano}`;
  }
}

class Carro extends Veiculo {
  portas: number;

  constructor(marca: string, modelo: string, ano: number, portas: number) {
    super(marca, modelo, ano);
    this.portas = portas;
  }

  description(): string {
    return `${super.description()} with ${this.portas} doors.`;
  }
}

const myCar = new Carro("Toyota", "Corolla", 2022, 4);

// Exercicio 2

type Player = {
  name: string;
  age: number;
  game: string;
};

const partialPlayer: Partial<Player> = { name: "João" };

const readonlyPlayer: Readonly<Player> = {
  name: "João",
  age: 31,
  game: "Minecraft",
};

const pickPlayer: Pick<Player, "name"> = { name: "Brito" };

const omitPlayer: Omit<Player, "age" | "game"> = { name: "João" };

// Exercicio 3

class ListHandler<T> {
  private items: T[] = [];

  add(item: T): void {
    this.items.push(item);
  }

  remove(item: T): void {
    this.items.includes(item)
      ? (this.items = this.items.filter((i) => i != item))
      : console.log("Item doesn't exist");
  }

  getAll(): T[] {
    return this.items;
  }
}

type Product = {
  name: string;
  price: number;
};

const product1: Product = { name: "Bag", price: 10 };
const product2: Product = { name: "Wallet", price: 5 };
const product3: Product = { name: "Shoes", price: 20 };

const cart = new ListHandler();
cart.add(product1);
cart.add(product2);
cart.add(product3);
cart.remove(product3);
