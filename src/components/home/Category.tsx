// import Image from "next/image";

// const categoryData = [
//   { id: 1, name: "Accessories", image: "/images/Accessories.png" },
//   { id: 2, name: "Camera", image: "/images/Camera.png" },
//   { id: 3, name: "Laptop", image: "/images/desktop.png" },
//   { id: 4, name: "Smart Phone", image: "/images/SmartPhone.png" },
//   { id: 5, name: "Gaming", image: "/images/Gaming.png" },
//   { id: 6, name: "Smart Watch", image: "/images/SmartWatch.png" },
// ];

// export default function Category() {
//   return (
//     <div
//       className="grid grid-cols-6 gap-5 lg:px-15 mb-10
//       min-[330px]:max-[481px]:flex min-[330px]:max-[481px]:gap-4
//       min-[330px]:max-[481px]:overflow-x-auto min-[330px]:max-[481px]:scrollbar-none
//       min-[330px]:max-[481px]:[&::-webkit-scrollbar]:hidden"
//     >
//       {categoryData.map((category) => (
//         <div
//           key={category.id}
//           className="flex flex-col items-center justify-center min-[330px]:max-[481px]:min-w-23.75 min-[330px]:max-[481px]:shrink-0
//           shadow-[0_4px_15px_rgba(0,0,0,0.1)] rounded-lg
//           transition-all duration-300 hover:-translate-y-1.5 cursor-pointer hover:shadow-[0_4px_15px_rgba(0,0,0,0.2)] ease-linear"
//         >
//           <div className="flex flex-col items-center justify-center p-3">
//             <div className="relative w-37 h-37 min-[330px]:max-[481px]:w-18.75 min-[330px]:max-[481px]:h-18.75">
//               <Image
//                 src={category.image}
//                 alt={category.name}
//                 fill
//                 sizes="(min-width: 1200px),30vw"
//                 className="object-contain min-[330px]:max-[481px]:w-16 h-15"
//               />
//             </div>
//             <h1 className="text-[#0C0C0C] font-inter font-light text-[16px] min-[330px]:max-[481px]:text-[12px]">
//               {category.name}
//             </h1>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

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
    <div
      className="grid grid-cols-6 gap-5 lg:px-15 mb-10
      min-[330px]:max-[481px]:flex min-[330px]:max-[481px]:gap-4
      min-[330px]:max-[481px]:overflow-x-auto min-[330px]:max-[481px]:scrollbar-none
      min-[330px]:max-[481px]:[&::-webkit-scrollbar]:hidden"
    >
      {categoryData.map((category) => (
        <div
          key={category.id}
          className="flex flex-col items-center justify-center min-[330px]:max-[481px]:min-w-23.75 min-[330px]:max-[481px]:shrink-0
          shadow-[0_4px_15px_rgba(0,0,0,0.1)] rounded-lg transition-all duration-300
           hover:-translate-y-1.5 cursor-pointer ease-linear hover:shadow-[0_4px_15px_rgba(0,0,0,0.2)]"
        >
          <div className="flex flex-col items-center justify-center py-3 gap-4">
            <div className="relative w-37 h-37 min-[330px]:max-[481px]:w-18.75 min-[330px]:max-[481px]:h-18.75">
              <Image
                src={category.image}
                alt={category.name}
                fill
                sizes="(min-width: 1200px) 148px, 30vw"
                className="object-contain"
              />
            </div>

            <h1 className="text-[#0C0C0C] font-inter font-light text-[16px] min-[330px]:max-[481px]:text-[12px]">
              {category.name}
            </h1>
          </div>
        </div>
      ))}
    </div>
  );
}
