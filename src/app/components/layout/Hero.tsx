import Image from "next/image";

export default function Hero() {
  return (
    <>
      <div className="flex items-center justify-between">
        <div className="space-y-16">
          <h1 className="font-inter text-6xl font-semibold text-[#042352]">
            Tech Heim
          </h1>
          <p className="font-inter font-medium text-3xl text-[#042352]">
            &quot; Join the{" "}
            <span className="text-[#F45E0C]">digital revolution &quot;</span>
          </p>
          <button
            className="bg-[#F45E0C] py-2 px-6 rounded-lg text-[#FFFFFF] 
          text-[16px] font-inter"
          >
            Explore More
          </button>
        </div>
        <div>
          <Image
            src="/images/laptop.png"
            alt="laptop-image"
            height={443}
            width={500}
          />
        </div>
      </div>
    </>
  );
}
