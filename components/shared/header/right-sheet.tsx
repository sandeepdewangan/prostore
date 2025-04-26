import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { LogIn, Menu, ShoppingCart } from "lucide-react";
import Link from "next/link";

import React from "react";
import ThemeToggle from "./theme-toggle";

const RightSheet = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" className="md:hidden">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>
        <div className="flex flex-col items-start pl-2">
          <Button asChild variant="ghost">
            <Link href="/cart">
              <ShoppingCart /> Cart
            </Link>
          </Button>
          <Button asChild variant="ghost">
            <Link href="/signin">
              <LogIn /> Sign-in
            </Link>
          </Button>
          <ThemeToggle />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default RightSheet;
