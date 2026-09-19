import Image from "next/image";
import Link from "next/link";
import { CiSearch, CiShoppingBasket } from "react-icons/ci";
import { LuUser } from "react-icons/lu";

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
      <header
        className="relative h-25 px-15 flex items-center justify-between after:absolute
       after:bottom-0 after:left-0 after:h-px after:w-full after:bg-linear-to-r
        after:from-[#0C68F44D] after:via-[#0C68F4B2] after:to-[#0C68F44D]"
      >
        <Image src="/logo.png" alt="Tech Heim" width={56} height={63} />
        <div className="space-x-14">
          {navItems.map((item) => (
            <Link
              href={item.href}
              key={item.href}
              className="text-[#0C0C0C] text-[18px] font-light font-inter outline-none"
            >
              {item.title}
            </Link>
          ))}
        </div>

        {/* icons desktop version */}
        <div className="flex space-x-5">
          <CiSearch className="w-6 h-6" />
          <CiShoppingBasket className="w-6 h-6" />
          <LuUser className="w-6 h-6" />
        </div>
      </header>
    </>
  );
}
