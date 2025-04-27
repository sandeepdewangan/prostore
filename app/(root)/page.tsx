import Products from "@/components/product/products";
import { getLatestProducts } from "@/lib/actions/product.actions";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
};

const HomePage = async () => {
  const latestProducts = await getLatestProducts();
  return (
    <div>
      <Products data={latestProducts} title="New Arrivals" />
    </div>
  );
};

export default HomePage;
