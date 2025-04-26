import Products from "@/components/product/products";
import sampleData from "@/db/sample-data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
};

const HomePage = () => {
  return (
    <div>
      <Products data={sampleData.products} title="New Arrivals" />
    </div>
  );
};

export default HomePage;
