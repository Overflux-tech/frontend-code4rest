
import React from "react";

export default function TemplateGridCard({ item }) {

  return (
    <div
      key={item.id}
      className="bg-white rounded-xl border border-[#E4E4E4] transition duration-300"
    >
      {/* 🖼️ Image */}
      <div className="relative">
        <img
          src={item.singleImage}
          alt={item.title}
          className="w-full h-46 rounded-t-xl"
        />

        {/* SALE badge */}
        {item.isSaleOn && (
          <span className="absolute top-2 right-2 bg-red-600 text-white text-xs px-2 py-1 rounded font-semibold shadow">
            SALE
          </span>
        )}
      </div>

      {/* 📄 Content */}
      <div className="p-3 text-left">

        {/* Title */}
        <h3 className="text-base font-semibold leading-tight mb-1 truncate">
          {item.title}
        </h3>
        {/* Sales section */}
        <div className="flex items-center justify-between mb-4">
          {/* Sales */}
          <p className="text-xs text-gray-600 flex items-center gap-1 font-medium">
            <i className="ri-shopping-bag-fill text-black"></i> {item.sales.toLocaleString()} Sales
          </p>

          {/* Price */}
          <div className="flex items-center gap-2">
            {item.isSaleOn && (
              <span className="line-through text-sm text-gray-400">
                ${item.discountPrice}
              </span>
            )}
            <span className="text-xl font-semibold text-red-600">
              ${item.price}
            </span>
          </div>
        </div>
        {/* Buttons */}
        <div className="flex gap-2">
          <button className="bg-black text-white text-sm p-[7px] font-semibold rounded w-full hover:bg-gray-800 transition whitespace-nowrap">
            Buy Now
          </button>
          <button className="text-sm p-[7px] border rounded w-full font-semibold hover:bg-gray-100 transition whitespace-nowrap">
            Live Demo
          </button>

        </div>
      </div>
    </div>
  );
}
