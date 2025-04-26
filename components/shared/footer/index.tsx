import { APP_NAME } from "@/lib/constants";
import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t">
      <div className="flex justify-center p-5">
        {currentYear} {APP_NAME}. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
