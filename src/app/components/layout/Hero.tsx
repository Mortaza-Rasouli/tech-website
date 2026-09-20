// import Image from "next/image";

// export default function Hero() {
//   return (
//     <>
//       <div className="flex items-center justify-between mt-1 px-15">
//         <div className="space-y-16">
//           <h1 className="font-inter text-6xl font-semibold text-[#042352]">
//             Tech Heim
//           </h1>
//           <p className="font-inter font-medium text-3xl text-[#042352]">
//             &quot; Join the{" "}
//             <span className="text-[#F45E0C]">digital revolution &quot;</span>
//           </p>
//           <button
//             className="bg-[#F45E0C] py-2 px-6 rounded-lg text-[#FFFFFF]
//           text-[16px] font-inter"
//           >
//             Explore More
//           </button>
//         </div>
//         <div>
//           <Image
//             src="/images/laptop.png"
//             alt="laptop-image"
//             height={443}
//             width={500}
//           />
//         </div>
//       </div>
//     </>
//   );
// }

import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="
        relative
        mt-1
        h-67.5
        overflow-hidden

        min-[461px]:flex
        min-[461px]:h-auto
        min-[461px]:items-center
        min-[461px]:justify-between
        min-[461px]:overflow-visible
        min-[461px]:px-15
      "
    >
      {/* Text */}
      <div
        className="
          absolute
          left-5
          top-13.75
          z-10

          min-[461px]:static
          min-[461px]:space-y-16
        "
      >
        <h1
          className="
            font-inter
            text-[32px]
            font-semibold
            leading-none
            text-[#042352]

            min-[461px]:text-6xl
          "
        >
          Tech Heim
        </h1>

        <p
          className="
            mt-4
            font-inter
            text-[14px]
            font-medium
            text-[#042352]

            min-[461px]:mt-0
            min-[461px]:text-3xl
          "
        >
          &quot; Join the{" "}
          <span className="text-[#F45E0C]">digital revolution &quot;</span>
        </p>

        <button
          type="button"
          className="
            mt-16
            rounded-lg
            bg-[#F45E0C]
            px-5
            py-2.5
            font-inter
            text-[14px]
            text-white

            min-[461px]:mt-0
            min-[461px]:px-6
            min-[461px]:py-2
            min-[461px]:text-[16px]
          "
        >
          Explore More
        </button>
      </div>

      {/* Laptop */}
      <div
        className="
          absolute
          right-7
          top-10
          z-0

          min-[461px]:static
          min-[461px]:z-auto
        "
      >
        <Image
          src="/images/laptop.png"
          alt="Laptop"
          width={500}
          height={443}
          priority
          className="
            h-auto
            w-55

            min-[461px]:w-125
          "
        />
      </div>
    </section>
  );
}
