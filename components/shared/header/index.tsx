import { Button } from "@/components/ui/button";
import { APP_NAME } from "@/lib/constants";
import { LogIn, ShoppingBag, ShoppingCart } from "lucide-react";
import Link from "next/link";
import React from "react";
import ThemeToggle from "./theme-toggle";

const Header = () => {
  return (
    <div className="flex justify-between py-2 px-2 border-b">
      <div className="flex gap-x-1">
        <ShoppingBag size={28} color="orange" />
        <span className="text-2xl font-bold">{APP_NAME}</span>
      </div>
      <div>
        <ThemeToggle />
        <Button asChild variant="ghost">
          <Link href="/cart">
            <ShoppingCart /> Cart
          </Link>
        </Button>
        <Button asChild variant="ghost">
          <Link href="/signin">
            <LogIn /> Signin
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default Header;
