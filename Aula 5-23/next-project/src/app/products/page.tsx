import Link from "next/link";

const ProductsPage = () => {
  return (
    <div className="mb-8 text-center">
      <h1 className="text-3xl font-bold mb-4">API Demo Pages</h1>
      <div className="flex gap-4 justify-center">
        <Link
          href="/products-fetch"
          className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
          Fetch API Demo
        </Link>
        <Link
          href="/products-axios"
          className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
        >
          Axios Demo
        </Link>
      </div>
    </div>
  );
};

export default ProductsPage;
