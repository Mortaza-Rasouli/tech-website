"use client";

import Link from "next/link";
import { useState } from "react";
import { AiOutlineDollar } from "react-icons/ai";

import { BiUser } from "react-icons/bi";
import { CiLogout } from "react-icons/ci";
import { GoHeart } from "react-icons/go";
import { LuCircleUser } from "react-icons/lu";
import { SlHandbag } from "react-icons/sl";

const userData = [
  {
    title: "Orders",
    icon: SlHandbag,
    href: "/cart/orders",
  },
  {
    title: "Wish List",
    icon: GoHeart,
    href: "cart/wishlist",
  },
  {
    title: "Payment",
    icon: AiOutlineDollar,
    href: "cart/wishlist",
  },
  {
    title: "Log Out",
    icon: CiLogout,
    href: "profile/wishlist",
  },
];

type UserMenuProps = {
  isOpenMenu: boolean;
  setIsOpenMenu: (value: boolean) => void;
};

export default function UserMenu({ isOpenMenu, setIsOpenMenu }: UserMenuProps) {
  const [showEmail, setShowEmail] = useState(false);
  return (
    <>
      <div className="relative z-50">
        <button type="button" onClick={() => setIsOpenMenu(!isOpenMenu)}>
          <BiUser className="h-6 w-6 text-[#3c3c3c] cursor-pointer" />
        </button>

        {isOpenMenu && (
          <div className="absolute right-0 top-16.25 z-50 h-60 w-70 rounded-b-lg bg-white">
            {/* name and email user */}
            <button
              onClick={() => setShowEmail(!showEmail)}
              className="flex gap-4 pl-5 pt-5 cursor-pointer"
            >
              <LuCircleUser className="w-5 h-5 text-[#454545]" />
              <span
                className={`${showEmail ? "text-[#0C68F4]" : "text-[#0C0C0C]"}`}
              >
                Jimmy Smith
              </span>
            </button>

            {/*  user email */}
            <div
              className={`overflow-hidden pl-13 transition-all duration-500 ease-in-out ${
                showEmail
                  ? "max-h-10 opacity-100 translate-y-0"
                  : "max-h-0 opacity-0 -translate-y-2"
              }`}
            >
              <span className="text-[14px] font-inter font-light">
                Jimmy.smith1996@gmail.com
              </span>
            </div>

            {/* other links */}

            <div className="flex flex-col p-5 gap-3">
              {userData.map((user, index) => {
                const Icon = user.icon;
                return (
                  <Link
                    key={index}
                    href={user.href}
                    className="flex gap-4 items-center "
                  >
                    <Icon className="w-5 h-5 text-[#0C0C0C]" />
                    <span
                      className="text-[#0C0C0C] hover:text-[#0C68F4] text-[16px] font-inter font-light
                  transition-all duration-300"
                    >
                      {user.title}
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>

      <div
        className={`fixed inset-0 right-0 top-25 z-40 bg-black/50 transition-all duration-500 pointer-events-none
    ${isOpenMenu ? "translate-y-0 opacity-100" : "translate-y-0 opacity-0"}
  `}
        onClick={() => setIsOpenMenu(false)}
      />
    </>
  );
}
