import ProductImages from "@/components/product/product-images";
import { Button } from "@/components/ui/button";
import { getProductBySlug } from "@/lib/actions/product.actions";
import { notFound } from "next/navigation";
import React from "react";

const ProductDetailPage = async (props: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await props.params;
  const product = await getProductBySlug(slug);
  if (!product) return notFound();

  return (
    <div className="flex flex-col">
      <div className="grid grid-cols-[2fr_2fr_1fr]">
        {/* Images */}
        <ProductImages images={product.images} />
        {/* Product details */}
        <div className="flex flex-col">
          <span>{product.brand}</span>
          <span className="font-bold py-5">{product.name}</span>
          <span>{product.rating} of 10 Reviews</span>
          <span className="font-bold text-2xl py-5">
            &#8377; {product.price}
          </span>
          <span>Description:</span>
          <span>{product.description}</span>
        </div>
        {/* Add to cart */}
        <div className="flex flex-col h-min border rounded-lg p-5">
          <div className="flex justify-between">
            <span>Price</span>
            <span>&#8377; {product.price}</span>
          </div>
          <div className="flex justify-between">
            <span>Status</span>
            <span>{product.stock ? "In Stock" : "Out of Stock"}</span>
          </div>
          <div className="flex flex-col items-stretch pt-2">
            <Button>Add to cart</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
