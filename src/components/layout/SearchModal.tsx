"use client";

import { useState } from "react";
import { CiSearch } from "react-icons/ci";

export default function SearchModal() {
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);

  return (
    <>
      <div className="relative z-50">
        <button
          type="button"
          onClick={() => setIsSearchModalOpen(!isSearchModalOpen)}
          aria-label="Search"
        >
          <CiSearch className="h-6 w-6 cursor-pointer text-[#3c3c3c]" />
        </button>

        {/* search modal */}
        <div
          className={`absolute right-20 top-25 flex h-100 w-200 items-center justify-center rounded-lg bg-white
            transition-all duration-500 ease-in-out
            ${
              isSearchModalOpen
                ? "visible translate-y-0 scale-100 opacity-100"
                : "invisible -translate-y-5 scale-95 opacity-0"
            }
          `}
        >
          {/* search bar and close button */}
          <div>
            <div>{/* search bar */}</div>

            {/* close button */}
            <button></button>
          </div>
        </div>
      </div>

      {/* overlay */}
      <div
        onClick={() => setIsSearchModalOpen(false)}
        className={`
          fixed inset-0 -right-5 z-40 bg-black/50
          transition-opacity duration-500
          ${isSearchModalOpen ? "visible opacity-100" : "invisible opacity-0"}
        `}
      />
    </>
  );
}
