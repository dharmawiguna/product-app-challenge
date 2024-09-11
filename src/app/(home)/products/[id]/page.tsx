import { Navbar } from "@/components";
import Image from "next/image";

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  images: string[];
  stock: number;
}

async function getProduct(id: string): Promise<Product> {
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  return res.json();
}

export async function generateStaticParams() {
  const res = await fetch("https://dummyjson.com/products");
  const products = await res.json();

  return products.products.map((product: Product) => ({
    id: product.id.toString(),
  }));
}

const ProductDetail = async ({ params }: { params: { id: string } }) => {
  const product = await getProduct(params.id);

  return (
    <div className="container mx-auto p-4">
      <Navbar />
      <div className="flex flex-col md:flex-row mt-10">
        <div className="flex-1 shadow-md rounded-md">
          {product.images.map((image, index) => (
            <Image
              key={index}
              src={image}
              alt={product.title}
              width={500}
              height={400}
              className="w-full object-cover"
            />
          ))}
        </div>

        {/* Product Details */}
        <div className="flex-1 p-4">
          <h1 className="text-2xl font-bold mb-4 text-teal-600">
            {product.title}
          </h1>
          <p className="text-gray-700 mb-4">{product.description}</p>
          <p className="text-xl font-semibold mb-4">${product.price}</p>
          <p
            className={`mb-4 ${
              product.stock > 0 ? "text-green-500" : "text-red-500"
            }`}
          >
            {product.stock > 0 ? "In Stock" : "Out of Stock"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
