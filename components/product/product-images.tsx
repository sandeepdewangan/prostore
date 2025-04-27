"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useState } from "react";

const ProductImages = ({ images }: { images: string[] }) => {
  const [current, setCurrent] = useState(0);
  return (
    <div className="flex flex-col gap-y-2">
      <Image src={images[current]} height={500} width={500} alt="Image" />
      <div className="flex">
        {images.map((img, index) => (
          <Image
            key={index}
            src={img}
            height={100}
            width={100}
            alt="Image"
            onClick={() => setCurrent(index)}
            className={cn(
              "border mr-1 cursor-pointer hover:border-orange-600",
              current === index && "border-orange-600"
            )}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
