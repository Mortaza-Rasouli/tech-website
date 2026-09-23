import Link from "next/link";

import {
  FiSmartphone,
  FiMonitor,
  FiTablet,
  FiHeadphones,
  FiCamera,
  FiWatch,
} from "react-icons/fi";
import { GrGamepad } from "react-icons/gr";
import { TbSunLow } from "react-icons/tb";
import { IoGitNetworkOutline } from "react-icons/io5";

const productCategories = [
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
    icon: FiWatch,
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

export default function ProductsMenu() {
  return (
    <div
      className="invisible absolute left-1/2 top-full z-50 mt-9.25 w-90 -translate-x-1/2 translate-y-2
     rounded-b-xl bg-white p-5 opacity-0 shadow-xl transition-all duration-300 
     group-hover:visible group-hover:translate-y-0 group-hover:opacity-100"
    >
      <div>
        <div className="flex flex-col ">
          {productCategories.map((category) => {
            const Icon = category.icon;

            return (
              <Link
                key={category.href}
                href={category.href}
                className="flex items-center gap-3 rounded-md px-3 py-2 font-inter text-[18px] 
                font-light text-[#0C0C0C] transition-colors duration-400 "
              >
                <Icon className="h-4 w-4 shrink-0" />
                <span className="hover:text-[#0C68F4]">{category.title}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
