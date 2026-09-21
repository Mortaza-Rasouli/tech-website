import Image from "next/image";

const categoryData = [
  { id: 1, name: "Accessories", image: "/images/Accessories.png" },
  { id: 2, name: "Camera", image: "/images/Camera.png" },
  { id: 3, name: "Laptop", image: "/images/desktop.png" },
  { id: 4, name: "Smart Phone", image: "/images/SmartPhone.png" },
  { id: 5, name: "Gaming", image: "/images/Gaming.png" },
  { id: 6, name: "Smart Watch", image: "/images/SmartWatch.png" },
];

export default function Category() {
  return (
    <>
      <div className="grid grid-cols-6 gap-5  px-15 mb-5">
        {categoryData.map((category) => (
          <div
            key={category.id}
            className="flex flex-col justify-between items-center bg-blue-200"
          >
            <Image
              src={category.image}
              alt={category.name}
              height={148}
              width={148}
              className="object-contain"
            />

            <h1 className="text-[#0C0C0C] font-inter font-light text-[16px]">
              {category.name}
            </h1>
          </div>
        ))}
      </div>
    </>
  );
}
