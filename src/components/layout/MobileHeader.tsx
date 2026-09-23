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
  const [isProductsOpen, setIsProductsOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="min-[481px]:hidden">
      {/* mobile header */}
      <header className="relative flex h-20 items-center justify-between  min-[330px]:max-[481px]:h-16">
        {/* menu icon */}
        <button
          type="button"
          onClick={() => setIsMenuOpen(true)}
          aria-label="Open menu"
        >
          <FiMenu className="h-6 w-6 text-[#0C0C0C] min-[330px]:max-[481px]:h-5 min-[330px]:max-[481px]:w-5" />
        </button>

        {/* name website */}
        <Link
          href="/"
          className="font-inter text-[16px] font-medium text-[#0951BE] min-[330px]:max-[481px]:text-[14px]"
        >
          Tech Heim
        </Link>

        {/* right icons */}
        <div className="flex items-center gap-4 min-[330px]:max-[481px]:gap-3">
          <Link href="/cart" aria-label="Shopping cart">
            <CiShoppingBasket className="h-6 w-6 text-[#0C0C0C] min-[330px]:max-[481px]:h-5 min-[330px]:max-[481px]:w-5" />
          </Link>

          <Link href="/profile" aria-label="User profile">
            <LuUser className="h-6 w-6 text-[#0C0C0C] min-[330px]:max-[481px]:h-5 min-[330px]:max-[481px]:w-5" />
          </Link>
        </div>
      </header>

      {/* mobile search bar */}
      <div>
        <div className="flex h-11 items-center rounded-sm bg-[#EDEDED] min-[330px]:max-[481px]:h-10 min-[330px]:max-[481px]:px-4">
          <input
            type="text"
            placeholder="What can we help you to find?"
            className="w-full bg-transparent font-inter text-[12px] font-light outline-none placeholder:text-[#717171] min-[330px]:max-[481px]:text-[10px]"
          />

          <FiSearch className="h-6 w-6 shrink-0 text-[#777] min-[330px]:max-[481px]:h-5 min-[330px]:max-[481px]:w-5" />
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
        className={`fixed left-0 top-0 z-50 h-full w-[72%] max-w-97.5 overflow-y-auto bg-white px-8 py-7 transition-transform duration-300 ease-in-out min-[330px]:max-[481px]:w-[78%] min-[330px]:max-[481px]:px-6 min-[330px]:max-[481px]:py-6 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* menu header */}
        <div className="flex items-center justify-between">
          {/* logo */}
          <Link href="/" onClick={closeMenu}>
            <Image
              src="/logo.png"
              alt="Tech Heim"
              width={42}
              height={47}
              className="min-[330px]:max-[481px]:h-9.5 min-[330px]:max-[481px]:w-8.5"
            />
          </Link>

          {/* close button */}
          <div className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-[#444444] min-[330px]:max-[481px]:h-5 min-[330px]:max-[481px]:w-5">
            <button type="button" onClick={closeMenu} aria-label="Close menu">
              <FiX className="h-4 w-4 text-[#444444] min-[330px]:max-[481px]:h-3 min-[330px]:max-[481px]:w-3" />
            </button>
          </div>
        </div>

        {/* products */}
        <div className="mt-12 min-[330px]:max-[481px]:mt-9">
          <button
            type="button"
            onClick={() => setIsProductsOpen(!isProductsOpen)}
            className={`flex w-full items-center justify-between font-inter text-[16px] font-light  min-[330px]:max-[481px]:text-[14px]
              ${isProductsOpen ? "text-[#0C68F4]" : "text-[#444444]"}`}
          >
            <span>Products</span>

            {isProductsOpen ? (
              <FiChevronUp className="h-5 w-5 min-[330px]:max-[481px]:h-3 min-[330px]:max-[481px]:w-3" />
            ) : (
              <FiChevronDown className="h-5 w-5 min-[330px]:max-[481px]:h-3 min-[330px]:max-[481px]:w-3" />
            )}
          </button>

          {/* Product Categories */}
          <div
            className={`overflow-hidden transition-all duration-300 min-[330px]:max-[481px]:ml-2 ${
              isProductsOpen
                ? "mt-4 ml-3 max-h-175 opacity-100 min-[330px]:max-[481px]:mt-3"
                : "max-h-0 opacity-0"
            }`}
          >
            <div className="flex flex-col gap-4 min-[330px]:max-[481px]:gap-3">
              {productItems.map((item) => {
                const Icon = item.icon;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={closeMenu}
                    className="flex items-center gap-3 font-inter text-[14px] font-light text-[#505050] min-[330px]:max-[481px]:gap-2 min-[330px]:max-[481px]:text-[12px]"
                  >
                    <Icon className="h-4 w-4 shrink-0 min-[330px]:max-[481px]:h-3 min-[330px]:max-[481px]:w-3" />

                    <span>{item.title}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        {/* others links */}
        <nav className="mt-6 flex flex-col gap-4 min-[330px]:max-[481px]:mt-5 min-[330px]:max-[481px]:gap-3">
          {otherNavItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={closeMenu}
              className="font-inter text-[16px] font-light text-[#444444] min-[330px]:max-[481px]:text-[14px]"
            >
              {item.title}
            </Link>
          ))}
        </nav>
      </aside>
    </div>
  );
}
