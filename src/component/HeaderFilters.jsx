import React from "react";

const PLATFORMS = [
  {
    name: "WordPress",
    color: "bg-[#21759B] border-[#21759B]",
    image: "/images/wordpress.png"
  },
  {
    name: "HTML",
    color: "bg-[#E34F26] border-[#E34F26]",
    image: "/images/Frame (10).png"
  },
  {
    name: "Shopify",
    color: "bg-[#95BF47] border-[#95BF47]",
    image: "/images/Frame (11).png"
  },
  {
    name: "WooCommerce",
    color: "bg-[#96588A] border-[#96588A]",
    image: "/images/Group 144 (1).png"
  },
  {
    name: "Top",
    color: "text-[#F5A623] border-[#F5A623]",
    image: "/images/Frame (12).png"
  },
];


const HeaderFilters = ({ platforms, setPlatforms }) => {
  return (
    <header className="border-b border-black-300 pb-10">
      {/* Title */}
      <h1 className="text-3xl font-bold">Website Design Templates</h1>
      <p className="text-sm text-black-100 font-semibold mt-1">
        Best Premium Website Templates For Personal And Commercial Use
      </p>

      {/* Platform Buttons */}
      <nav className="mt-10 flex flex-wrap gap-4 items-center">
        {PLATFORMS.map((p) => {
          const isActive = (p.name === "Top" && platforms === "") || platforms === p.name;
          return (
            <button
              key={p.name}
              onClick={() => setPlatforms(p.name === "Top" ? "" : p.name)}
              className={`flex items-center justify-center gap-2 w-36 h-12 border transition-all duration-200 ${isActive
                  ? `${p.color} shadow-md scale-[1.03] text-white`
                  : "bg-white text-gray-700 border border-gray-300 hover:shadow-md hover:scale-[1.03]"
                }`}
            >
              {/* Logo + Text in one line */}
              <img
                src={p.image}
                alt={p.name}
                className="w-5 h-5 object-contain"
              />
              <span className={`font-medium text-sm ${isActive ? `${p.color}` : "text-gray-800"}`}>
                {p.name}
              </span>
            </button>
          );
        })}
      </nav>
    </header>
  );
};

export default HeaderFilters;
