import React from "react";
import { Card, CardContent, CardHeader } from "../ui/card";
import Link from "next/link";
import Image from "next/image";
import { ProductModel } from "@/types";

const Product = ({ product }: { product: ProductModel }) => {
  return (
    <Card className="w-full max-w-lg">
      <CardHeader className="flex justify-center">
        <Link href={`/product/${product.slug}`}>
          <Image
            src={product.images[0]}
            alt={product.name}
            height={300}
            width={300}
          />
        </Link>
      </CardHeader>
      <CardContent>
        <div className="text-xs">{product.brand}</div>
        <Link href={`/product/${product.slug}`}>
          <div className="text-sm">{product.name}</div>
        </Link>
        <div className="flex justify-between pt-2">
          <div className="text-sm">{product.rating} stars</div>
          {product.stock > 0 ? (
            <div className="text-md font-bold">&#x20b9; {product.price}</div>
          ) : (
            <p className="text-red-400 text-sm">Out of stock!</p>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default Product;
