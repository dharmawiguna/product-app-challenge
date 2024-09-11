// components
import { Footer, Navbar } from "@/components";

// sections
import HorizontalRow from "@/components/horizontal-row";
import ProductList from "@/components/product-list";
import Hero from "./hero";

export default function Portfolio() {
  return (
    <>
      <Navbar />
      <Hero />
      <HorizontalRow />
      <ProductList />
      <HorizontalRow />
      <Footer />
    </>
  );
}
