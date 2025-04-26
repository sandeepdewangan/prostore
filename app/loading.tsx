import Image from "next/image";
import React from "react";
import loader from "@/public/images/loader.gif";

const LoadingPage = () => {
  return (
    <div className="flex justify-center h-screen items-center">
      <Image src={loader} height={150} width={150} alt="Loading..." />
    </div>
  );
};

export default LoadingPage;
