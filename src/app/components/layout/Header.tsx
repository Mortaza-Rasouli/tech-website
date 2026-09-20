import Image from "next/image";
import Link from "next/link";

import { CiSearch, CiShoppingBasket } from "react-icons/ci";
import { LuUser } from "react-icons/lu";

import MobileHeader from "./MobileHeader";

const navItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Products",
    href: "/products",
  },
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

export default function Header() {
  return (
    <>
      {/* laptop header */}
      <header
        className="relative hidden h-25 items-center justify-between px-15 min-[461px]:flex
           after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:bg-linear-to-r after:from-[#0C68F44D] after:via-[#0C68F4B2] after:to-[#0C68F44D]"
      >
        {/* logo */}
        <Link href="/">
          <Image src="/logo.png" alt="Tech Heim" width={56} height={63} />
        </Link>

        {/* navbar */}
        <nav className="space-x-14">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-inter text-[18px] font-light text-[#0C0C0C] outline-none"
            >
              {item.title}
            </Link>
          ))}
        </nav>

        {/* laptop icons */}
        <div className="flex items-center space-x-5">
          <button type="button" aria-label="Search">
            <CiSearch className="h-6 w-6" />
          </button>

          <Link href="/cart" aria-label="Shopping cart">
            <CiShoppingBasket className="h-6 w-6" />
          </Link>

          <Link href="/profile" aria-label="User profile">
            <LuUser className="h-6 w-6" />
          </Link>
        </div>
      </header>

      {/* mobile header */}
      <MobileHeader />
    </>
  );
}
