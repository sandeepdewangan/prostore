import React from "react";
import Product from "./product";

interface Props {
  data: any;
  title?: string;
}

const Products = ({ data, title }: Props) => {
  return (
    <div>
      <div className="text-2xl pb-2 font-bold">{title}</div>
      {data.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {data.map((product: any) => (
            <Product key={product.name} product={product} />
          ))}
        </div>
      ) : (
        <p>No products found!</p>
      )}
    </div>
  );
};

export default Products;
