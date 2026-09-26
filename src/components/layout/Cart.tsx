import { useState } from "react";
import { CiShoppingBasket } from "react-icons/ci";

export default function Cart() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  return (
    <>
      <div className="relative z-50">
        {/* button cart */}
        <button onClick={() => setIsCartOpen(!isCartOpen)}>
          <CiShoppingBasket className="h-6 w-6 cursor-pointer text-[#3c3c3c]" />
        </button>

        {/* cart */}
        <div
          className={`absolute flex flex-col items-center justify-center right-0 top-16.25 h-110 w-80 rounded-b-lg bg-white
            transition-all duration-500 ease-in-out
            ${isCartOpen ? "opacity-100" : "opacity-0"}
          `}
        >
          <h1>Your cart is empty.</h1>
        </div>
      </div>

      {/* overlay */}
      <div
        onClick={() => setIsCartOpen(false)}
        className={`
          fixed inset-0 top-25 -right-5 z-40 bg-black/50
          transition-opacity duration-500 pointer-events-none
          ${isCartOpen ? "opacity-100" : "opacity-0"}
        `}
      />
    </>
  );
}
