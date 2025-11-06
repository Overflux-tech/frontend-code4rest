// import React from "react";

// export default function TemplateCard({ item }) {
//   return (
//     <div className="bg-white border border-gray-200 rounded-md flex flex-col md:flex-row overflow-hidden shadow-sm hover:shadow-md transition-all">
//       {/* 📸 Image Section */}
//       <div className="relative w-full md:w-72 flex-shrink-0">
//         <img
//           src={item.image}
//           alt={item.title}
//           className="w-full h-48 md:h-full object-cover rounded-t-md md:rounded-l-md"
//         />

//         {item.oldPrice && (
//           <div className="absolute top-3 right-3 bg-red-600 text-white text-xs font-semibold px-3 py-1 rounded-md">
//             SALE
//           </div>
//         )}
//       </div>

//       {/* 📄 Content Section */}
//       <div className="flex-1 p-4 md:p-6 flex flex-col justify-between text-center md:text-left">
//         <div>
//           <h3 className="text-base md:text-lg font-semibold truncate">
//             {item.title}
//           </h3>
//           <p className="text-xs md:text-sm text-start text-gray-500 mt-1">
//             {item.category}
//           </p>
//           <div className="border-b-0 md:border-b md:border-gray-200 md:pb-3 mb-3"></div>

//           <p className="hidden md:block text-sm text-gray-600 mt-3 leading-relaxed">
//             {item.description}
//           </p>
//         </div>
//       </div>

//       {/* 💰 Price & CTA Section */}
//       <div className="border-t md:border-t-0 border-gray-200 md:border-l p-4 md:p-6 flex flex-col justify-center items-center min-w-[200px] self-center w-full md:w-auto">
//         {/* Price & Sales on one line */}
//         <div className="flex items-center justify-between w-full md:justify-center md:flex-col gap-1 mb-3">

//           <div className="flex items-center gap-2">
//             {item.oldPrice && (
//               <div className="text-gray-400 line-through text-sm font-semibold">
//                 ${item.oldPrice}
//               </div>
//             )}
//             <div
//               className={`text-xl md:text-2xl font-semibold ${item.oldPrice === null ? "text-black" : "text-red-600"
//                 }`}
//             >
//               ${item.price}
//             </div>
//           </div>

//           <div className="flex items-center text-gray-400 text-xs md:text-sm font-normal">
//             <img src="/images/Group.png" alt="sales" className="mr-1 w-4 h-4" />
//             {item.sales?.toLocaleString()} Sales
//           </div>
//         </div>

//         {/* CTA Buttons */}
//         <div className="flex flex-row gap-2 w-full text-sm">
//           <button className="flex-1 bg-black text-white font-medium px-4 py-2 rounded-md hover:bg-gray-800 transition whitespace-nowrap">
//             Buy Now
//           </button>
//           <button className="flex-1 border font-medium px-4 py-2 rounded-md hover:bg-gray-100 transition whitespace-nowrap">
//             Live Demo
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }
import React from "react";

export default function TemplateCard({ item }) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg flex flex-col md:flex-row overflow-hidden border border-[#E4E4E4] transition-all duration-200">

      {/* 🖼️ Image */}
      <div className="relative w-full md:w-72 flex-shrink-0">
        <img
          src={item.singleImage}
          alt={item.title}
          className="w-full h-52 md:h-full object-cover"
        />

        {item.isSaleOn && (
          <div className="absolute top-3 right-3 bg-red-600 text-white text-xs font-semibold px-3 py-1 rounded-md">
            SALE
          </div>
        )}
      </div>

      {/* 📄 Content */}
      <div className="flex-1 px-5 py-4 md:py-6 flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 hover:text-blue-600 transition">
            {item.title}
          </h3>
          <p className="text-sm text-gray-500 mt-1">{item.category}</p>
          <div className="border-b-0 md:border-b md:border-gray-200 md:pb-3 mb-3"></div>
          <div className="hidden md:block text-sm text-gray-600 mt-3 leading-relaxed">
            {item.description}
          </div>
        </div>
      </div>

      {/* 💰 Price & CTA */}
      <div className="border-t md:border-t-0 md:border-l self-center border-gray-200 px-4 py-4 md:py-6 flex flex-col items-center justify-center w-full md:w-56 text-center">
        {/* Price */}
        {/* <div className="flex flex-col items-center mb-4"> */}
        <div className="flex items-center justify-between w-full md:justify-center md:flex-col gap-1 mb-3">

          <div className="flex items-center gap-2">
            {item.isSaleOn && (
              <span className="text-gray-400 line-through text-sm font-semibold">
                ${item.discountPrice}
              </span>
            )}
            <span
              className={`text-2xl font-semibold ${item.isSaleOn ? "text-red-600" : "text-black"
                }`}
            >
              ${item.price}
            </span>
          </div>
          <div className="flex items-center text-gray-500 text-sm mt-1">
            <img src="/images/Group.png" alt="sales" className="w-4 h-4 mr-1" />
            {item.sales?.toLocaleString()} Sales
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-2 w-full">
          <button className="flex-1 bg-black text-white font-medium py-2 rounded-md hover:bg-gray-800 transition">
            Buy Now
          </button>
          <button className="flex-1 border border-gray-300 font-medium py-2 rounded-md hover:bg-gray-100 transition">
            Live Demo
          </button>
        </div>
      </div>
    </div>
  );
}
