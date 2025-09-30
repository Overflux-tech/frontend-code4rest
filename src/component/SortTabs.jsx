import React from "react";
import "remixicon/fonts/remixicon.css";

export default function SortTabs({ sortBy, setSortBy, viewType, setViewType }) {
  return (
    <div className="flex flex-col md:flex-row items-center justify-end mb-4 gap-3 md:gap-0">
      <div className="flex gap-2">
        <button
          onClick={() => setViewType("grid")}
          className={`p-2 rounded transition cursor-pointer ${
            viewType === "grid" ? "text-black" : "text-gray-400"
          }`}
        >
          <i className="ri-layout-grid-2-line text-xl"></i>
        </button>

        <button
          onClick={() => setViewType("list")}
          className={`p-2 rounded transition cursor-pointer ${
            viewType === "list" ? "text-black" : "text-gray-400"
          }`}
        >
          <i className="ri-list-check text-xl"></i>
        </button>

        {/* ✅ Responsive container */}
        <div className="inline-flex border rounded-lg overflow-hidden whitespace-nowrap min-w-max overflow-x-auto">
          <button
            onClick={() => setSortBy("best-seller")}
            className={`flex-1 px-3 md:px-4 py-2 text-xs md:text-sm font-medium transition ${
              sortBy === "best-seller"
                ? "bg-black text-white"
                : "bg-white text-black hover:bg-gray-100"
            }`}
          >
            Best Seller
          </button>

          <button
            onClick={() => setSortBy("best-rated")}
            className={`flex-1 px-3 md:px-4 py-2 text-xs md:text-sm font-medium transition border-l ${
              sortBy === "best-rated"
                ? "bg-black text-white"
                : "bg-white text-black hover:bg-gray-100"
            }`}
          >
            Best Rated
          </button>

          <button
            onClick={() => setSortBy("latest")}
            className={`flex-1 px-3 md:px-4 py-2 text-xs md:text-sm font-medium transition border-l ${
              sortBy === "latest"
                ? "bg-black text-white"
                : "bg-white text-black hover:bg-gray-100"
            }`}
          >
            Latest
          </button>
        </div>
      </div>
    </div>
  );
}
