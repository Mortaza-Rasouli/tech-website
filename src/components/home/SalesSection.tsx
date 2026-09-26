import Image from "next/image";

export default function SalesSection() {
  return (
    <>
      <div className="lg:px-15">
        <div className="bg-[#063A88] relative mb-10 rounded-lg h-70">
          <Image
            src="/images/random-shape.png"
            width={500}
            height={400}
            alt="random-shape"
            className="absolute top-[-180] left-[-180] -rotate-90 opacity-10"
          />
        </div>
      </div>
    </>
  );
}
