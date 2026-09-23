"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { CiSearch, CiShoppingBasket } from "react-icons/ci";

import MobileHeader from "./MobileHeader";
import ProductsMenu from "./ProductsMenu";
import UserMenu from "./UserMenu";

const navItems = [
  { title: "Home", href: "/" },
  { title: "Products", href: "/products" },
  { title: "Blog", href: "/blog" },
  { title: "FAQ", href: "/faq" },
  { title: "Contact Us", href: "/contactUs" },
];

export default function Header() {
  const [isProductsMenuOpen, setIsProductsMenuOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header
        className="relative z-50 hidden h-25 items-center justify-between px-15 min-[481px]:flex 
      after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:bg-linear-to-r
       after:from-[#0C68F44D] after:via-[#0C68F4B2] after:to-[#0C68F44D]"
      >
        <Link href="/">
          <Image src="/logo.png" alt="Tech Heim" width={56} height={63} />
        </Link>

        <nav className="flex items-center space-x-14">
          {navItems.map((item) => {
            if (item.title === "Products") {
              return (
                <div
                  key={item.href}
                  onMouseEnter={() => setIsProductsMenuOpen(true)}
                  onMouseLeave={() => setIsProductsMenuOpen(false)}
                  className="group relative h-full"
                >
                  <Link
                    href={item.href}
                    className="block font-inter text-[18px] font-light text-[#0C0C0C] outline-none transition-all duration-300 ease-linear hover:text-[#0C68F4]"
                  >
                    {item.title}
                  </Link>

                  <ProductsMenu />
                </div>
              );
            }

            return (
              <Link
                key={item.href}
                href={item.href}
                className="font-inter text-[18px] font-light text-[#0C0C0C] outline-none transition-all duration-300 ease-linear hover:text-[#0C68F4]"
              >
                {item.title}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center justify-center space-x-5">
          <button type="button" aria-label="Search">
            <CiSearch className="h-6 w-6" />
          </button>

          <Link href="/cart" aria-label="Shopping cart">
            <CiShoppingBasket className="h-6 w-6" />
          </Link>

          {/* User menu */}
          <UserMenu isOpenMenu={isMenuOpen} setIsOpenMenu={setIsMenuOpen} />
        </div>
      </header>

      {isProductsMenuOpen && (
        <div className="fixed bottom-0 left-0 right-0 top-25 z-40 bg-black/60" />
      )}

      <MobileHeader />
    </>
  );
}
