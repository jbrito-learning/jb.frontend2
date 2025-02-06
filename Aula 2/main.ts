// Exercicio 1

interface Car {
  brand: string;
  model: string;
  year?: number;
}

const carro: Car = {
  brand: "Toyota",
  model: "Corola",
  year: 2006,
};

console.log("Carro:", carro);

// Exercicio 2

type PaymentMethod = "card" | "mbway" | "paypal";

interface Payment {
  value: number;
  method: PaymentMethod;
  details: string;
  car: Car;
}

const processPayment = (p: Payment): string => {
  return `This purchase was made with ${p.method}`;
};

const pagamento: Payment = {
  value: 20,
  method: "card",
  details: "informação",
  car: carro,
};

console.log("Pagamento:", pagamento);
console.log("Metodo de pagamento:", processPayment(pagamento));
