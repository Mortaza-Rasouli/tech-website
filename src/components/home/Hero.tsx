import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative h-110 min-[330px]:max-[481px]:h-45  flex items-center justify-between lg:px-15">
      {/* text */}
      <div className="absolute top-20 min-[330px]:max-[481px]:top-12">
        <h1 className="whitespace-nowrap font-inter text-[54px] font-semibold leading-none text-[#042352] min-[330px]:max-[481px]:text-2xl">
          Tech Heim
        </h1>

        <p className="whitespace-nowrap mt-2 font-inter text-[28px] font-medium text-[#042352] min-[330px]:max-[481px]:text-[10px]">
          &quot; Join the{" "}
          <span className="text-[#F45E0C]">digital revolution </span> &quot;
        </p>

        <button
          type="button"
          className="mt-16 rounded-lg bg-[#F45E0C] px-15 py-2.5 font-inter text-[16px] whitespace-nowrap
            text-white min-[330px]:max-[481px]:text-[10px] min-[330px]:max-[481px]:px-4 min-[330px]:max-[481px]:rounded-sm
            min-[330px]:max-[481px]:py-2 min-[330px]:max-[481px]:mt-6"
        >
          Explore More
        </button>
      </div>

      {/* laptop */}
      <div className="absolute h-auto top-5 right-20 min-[330px]:max-[481px]:top-5 min-[330px]:max-[481px]:right-2">
        <Image
          src="/images/laptop2.png"
          alt="Laptop"
          width={500}
          height={443}
          className="min-[330px]:max-[481px]:w-45 min-[330px]:max-[481px]:h-auto"
        />
      </div>
    </div>
  );
}
