"use client";

import { Button } from "@/components/ui/button";
import { ArrowBigLeft, ShoppingBag } from "lucide-react";
import React from "react";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen gap-3">
      <ShoppingBag size={48} className="text-orange-400" />
      <span className="text-2xl ">Page Not Found!</span>
      <Button
        variant="outline"
        className="text-md"
        onClick={() => (window.location.href = "/")}
      >
        <ArrowBigLeft /> Go back
      </Button>
    </div>
  );
};

export default NotFoundPage;
