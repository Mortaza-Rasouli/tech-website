"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import {
  FiMenu,
  FiX,
  FiChevronUp,
  FiChevronDown,
  FiSearch,
  FiSmartphone,
  FiMonitor,
  FiTablet,
  FiHeadphones,
  FiCamera,
} from "react-icons/fi";

import { CiShoppingBasket } from "react-icons/ci";
import { LuUser, LuWatch } from "react-icons/lu";
import { GrGamepad } from "react-icons/gr";
import { IoGitNetworkOutline } from "react-icons/io5";
import { TbSunLow } from "react-icons/tb";

const productItems = [
  {
    title: "Mobile Phones",
    href: "/products/mobile-phones",
    icon: FiSmartphone,
  },
  {
    title: "Laptops & Computers",
    href: "/products/laptops",
    icon: FiMonitor,
  },
  {
    title: "Tablets & E-reader",
    href: "/products/tablets",
    icon: FiTablet,
  },
  {
    title: "Wearables",
    href: "/products/wearables",
    icon: LuWatch,
  },
  {
    title: "Audio",
    href: "/products/audio",
    icon: FiHeadphones,
  },
  {
    title: "Cameras",
    href: "/products/cameras",
    icon: FiCamera,
  },
  {
    title: "Gaming",
    href: "/products/gaming",
    icon: GrGamepad,
  },
  {
    title: "Networking",
    href: "/products/networking",
    icon: IoGitNetworkOutline,
  },
  {
    title: "Accessories",
    href: "/products/accessories",
    icon: TbSunLow,
  },
];

const otherNavItems = [
  {
    title: "Blog",
    href: "/blog",
  },
  {
    title: "FAQ",
    href: "/faq",
  },
  {
    title: "Contact Us",
    href: "/contactUs",
  },
];

export default function MobileHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [isProductsOpen, setIsProductsOpen] = useState(true);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="min-[461px]:hidden">
      {/* mobile header*/}

      <header className="relative flex h-20 items-center justify-between px-8">
        {/* menu icon */}
        <button
          type="button"
          onClick={() => setIsMenuOpen(true)}
          aria-label="Open menu"
        >
          <FiMenu className="h-6 w-6 text-[#0C0C0C]" />
        </button>

        {/* name website */}
        <Link
          href="/"
          className="font-inter text-[16px] font-medium text-[#0951BE]"
        >
          Tech Heim
        </Link>

        {/* right icons */}
        <div className="flex items-center gap-4">
          <Link href="/cart" aria-label="Shopping cart">
            <CiShoppingBasket className="h-6 w-6 text-[#0C0C0C]" />
          </Link>

          <Link href="/profile" aria-label="User profile">
            <LuUser className="h-6 w-6 text-[#0C0C0C]" />
          </Link>
        </div>
      </header>

      {/* mobile search bar */}

      <div className="px-8">
        <div className="flex h-12 items-center rounded-lg bg-[#EDEDED] px-4">
          <input
            type="text"
            placeholder="What can we help you to find?"
            className="
              w-full bg-transparent font-inter font-light text-[12px] outline-none placeholder:text-[#717171]"
          />

          <FiSearch className="h-6 w-6 shrink-0 text-[#777]" />
        </div>
      </div>

      {isMenuOpen && (
        <button
          type="button"
          aria-label="Close menu"
          onClick={closeMenu}
          className="fixed inset-0 z-40 cursor-default bg-black/60"
        />
      )}

      {/* side menu */}

      <aside
        className={`
          fixed left-0 top-0 z-50 h-full w-[72%]
          max-w-97.5 overflow-y-auto bg-white px-8 py-7 transition-transform duration-300 ease-in-out
${isMenuOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {/* menu header */}
        <div className="flex items-center justify-between">
          {/* logo */}
          <Link href="/" onClick={closeMenu}>
            <Image src="/logo.png" alt="Tech Heim" width={42} height={47} />
          </Link>

          {/* close button */}
          <div className="w-6 h-6 flex items-center justify-center rounded-full border-2 border-[#444444]">
            <button type="button" onClick={closeMenu} aria-label="Close menu">
              <FiX className="h-4 w-4 text-[#444444]" />
            </button>
          </div>
        </div>

        {/* products */}

        <div className="mt-12">
          <button
            type="button"
            onClick={() => setIsProductsOpen(!isProductsOpen)}
            className="
              flex w-full items-center justify-between font-inter text-[16px] font-light text-[#0C68F4]"
          >
            <span>Products</span>

            {isProductsOpen ? (
              <FiChevronUp className="h-4 w-4" />
            ) : (
              <FiChevronDown className="h-4 w-4" />
            )}
          </button>

          {/* Product Categories */}
          <div
            className={`overflow-hidden transition-all duration-300
              ${
                isProductsOpen
                  ? "mt-4 ml-3 max-h-175 opacity-100"
                  : "max-h-0 opacity-0"
              }
            `}
          >
            <div className="flex flex-col gap-4">
              {productItems.map((item) => {
                const Icon = item.icon;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={closeMenu}
                    className="
                      flex items-center gap-3 font-inter font-light text-[14px] text-[#505050]"
                  >
                    <Icon className="h-4 w-4 shrink-0" />

                    <span>{item.title}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        {/* others links */}

        <nav className="mt-6 flex flex-col gap-4">
          {otherNavItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={closeMenu}
              className="font-inter text-[16px] font-light text-[#444444]"
            >
              {item.title}
            </Link>
          ))}
        </nav>
      </aside>
    </div>
  );
}
