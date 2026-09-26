"use client";

import Link from "next/link";

import { useState } from "react";

import { CiSearch } from "react-icons/ci";

import { IoIosCloseCircleOutline } from "react-icons/io";

const mostSearchedItems = [
  { name: "MacBook Pro", href: "/search?query=MacBook%20Pro" },
  { name: "JBL speaker", href: "/search?query=JBL%20speaker" },
  { name: "AirPods Pro", href: "/search?query=AirPods%20Pro" },
  { name: "Canon", href: "/search?query=Canon" },
  { name: "Samsung S9", href: "/search?query=Samsung%20S9" },
  { name: "AirPods Max", href: "/search?query=AirPods%20Max" },
  { name: "Tablet", href: "/search?query=Tablet" },
  { name: "Asus", href: "/search?query=Anus" },
  { name: "Xiaomi", href: "/search?query=Xiaomi" },
  { name: "MagSafe", href: "/search?query=MagSafe" },
];

const mostUsedKeywords = [
  { name: "Tablets", href: "/search?query=Tablets" },
  { name: "Laptops", href: "/search?query=Laptops" },
  { name: "Headphones", href: "/search?query=Headphones" },
  { name: "USB Drive", href: "/search?query=USB%20Drive" },
  { name: "Smartphones", href: "/search?query=Smartphones" },
  { name: "Phone Cases", href: "/search?query=Phone%20Cases" },
  { name: "Smartwatch", href: "/search?query=Smartwatch" },
];

export default function SearchModal() {
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);

  const closeSearchModal = () => {
    setIsSearchModalOpen(false);
  };

  return (
    <>
      <div className="relative z-100">
        <button
          type="button"
          onClick={() => setIsSearchModalOpen(true)}
          aria-label="Search"
          className="relative z-100 pointer-events-auto"
        >
          <CiSearch className="h-6 w-6 cursor-pointer text-[#3c3c3c]" />
        </button>

        {/* search modal */}
        <div
          className={`absolute right-20 top-25 z-100 flex h-108 w-180 flex-col justify-between rounded-lg bg-white py-8
            transition-all duration-500 ease-in-out
            ${
              isSearchModalOpen
                ? "visible translate-y-0 scale-100 opacity-100 pointer-events-auto"
                : "invisible -translate-y-5 scale-95 opacity-0 pointer-events-none"
            }
          `}
        >
          {/* search bar and close button */}
          <div className="flex w-full items-center justify-between px-12">
            <div className="flex items-center justify-between rounded-lg border border-[#0C0C0C] px-4 py-3">
              <input
                type="text"
                placeholder="What can we help you to find ?"
                className="w-100 font-inter text-[14px] font-light outline-none placeholder:text-[#444444]"
              />

              <CiSearch className="h-6 w-6 text-[#444444]" />
            </div>

            {/* close button */}
            <button
              type="button"
              onClick={closeSearchModal}
              aria-label="Close search"
              className="relative z-110 pointer-events-auto cursor-pointer"
            >
              <IoIosCloseCircleOutline className="h-6 w-6 text-[#444444]" />
            </button>
          </div>

          {/* most searched items and most used keyword */}
          <div className="flex px-12">
            {/* most searched */}
            <div className="w-1/2">
              <h1 className="mb-10 font-inter text-xl font-medium text-[#0C0C0C]">
                The Most Searched Items
              </h1>

              <div className="grid grid-cols-2 gap-y-4">
                {mostSearchedItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="font-inter text-[16px] font-light text-[#444444] transition-colors hover:text-black"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* most used keyword */}
            <div className="w-1/2">
              <h1 className="mb-10 font-inter text-xl font-medium text-[#0C0C0C]">
                Most used keywords
              </h1>

              <div className="grid grid-cols-2 gap-y-4">
                {mostUsedKeywords.map((keyword) => (
                  <Link
                    key={keyword.name}
                    href={keyword.href}
                    className="font-inter text-[16px] font-light text-[#444444] transition-colors hover:text-black"
                  >
                    {keyword.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* overlay */}
      <div
        onClick={closeSearchModal}
        className={`
          fixed inset-0 -right-5 z-40 bg-black/50
          transition-opacity duration-500
          ${
            isSearchModalOpen
              ? "pointer-events-auto opacity-100"
              : "pointer-events-none opacity-0"
          }
        `}
      />
    </>
  );
}
