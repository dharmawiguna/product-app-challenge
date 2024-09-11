"use client";
import { Typography } from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import Pagination from "./pagination";

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
  category: string;
}

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filter, setFilter] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("asc");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const productsPerPage = 8;
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);

        const uniqueCategories = Array.from(
          new Set(data.products.map((product: Product) => product.category))
        ) as string[];

        setCategories(uniqueCategories);
      });
  }, []);

  const filteredProducts = products
    .filter((product) => (filter ? product.category === filter : true))
    .sort((a, b) =>
      sortOrder === "asc" ? a.price - b.price : b.price - a.price
    );

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="container mx-auto p-4">
      <div className="container mx-auto mb-20 text-center">
        <Typography
          variant="h2"
          color="blue-gray"
          className="mb-4"
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          Product List
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full px-4 font-normal !text-gray-500 lg:w-6/12"
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          Whether you have a mobile app idea that needs to come to life or a
          website that requires a facelift, I&apos;m here to turn your digital
          dreams into reality.
        </Typography>
      </div>
      <div className="flex justify-between items-center mb-4">
        <select
          onChange={(e) => {
            setFilter(e.target.value);
            setCurrentPage(1); // Reset ke halaman pertama setelah filter
          }}
          className="border p-2"
          defaultValue=""
        >
          <option value="">All Categories</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>

        <select
          onChange={(e) => setSortOrder(e.target.value)}
          className="border p-2"
        >
          <option value="asc">Sort by Price: Low to High</option>
          <option value="desc">Sort by Price: High to Low</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {currentProducts.map((product, index) => (
          <Link href={`/products/${product.id}`} key={index}>
            {/* <a className="block border p-4 rounded"> */}
            <div key={product.id} className="border p-4 rounded">
              <Image
                src={product?.thumbnail}
                alt={product?.title}
                className="w-full h-48 object-cover mb-4"
                width={120}
                height={120}
              />
              <h2 className="text-lg font-bold mb-2">{product.title}</h2>
              <p className="text-gray-700 mb-2">{product.description}</p>
              <p className="font-semibold">${product.price}</p>
            </div>
            {/* </a> */}
          </Link>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-8">
        <Pagination
          productsPerPage={productsPerPage}
          totalProducts={filteredProducts.length}
          paginate={paginate}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
};

export default ProductList;
