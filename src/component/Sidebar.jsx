import React, { useState } from "react";
import "remixicon/fonts/remixicon.css";

const CATEGORIES = [
  { label: "WordPress Theme", value: "wordpress" },
  { label: "React Theme", value: "react" },
  { label: "HTML Theme", value: "html" },
  { label: "Shopify Theme", value: "shopify" },
  { label: "WooCommerce Theme", value: "woocommerce" },
  { label: "Top Rated Theme", value: "top-rated" },
];
const TOPICS = [
  "Animals & Pets",
  "Medical Templates",
  "Real Estate Templates",
  "Design & Photography",
  "Art & Culture",
  "Electronics Templates",
  "Education & Books",
];
const FEATURES = ["Responsive", "HTML 5", "Dropdown Menu", "Bootstrap", "jQuery", "Blog", "Google Map"];
const COLORS = ["Gold", "Yellow", "Black", "Red", "Blue", "Orange", "Brown"];
const COMPAT = ["Figma", "Adobe Photoshop", "Adobe Illustrator"];

export default function Sidebar({
  selectedCategories,
  setSelectedCategories,
  onSaleOnly,
  setOnSaleOnly,
  updatedRecentlyOnly,
  setUpdatedRecentlyOnly,
  selectedFeatures,
  setSelectedFeatures,
  selectedColors,
  setSelectedColors,
  compatibleWith,
  setCompatibleWith,
  viewType,
}) {
  const [open, setOpen] = useState({
    categories: true,
    topics: true,
    features: true,
    colors: true,
    compatible: true,
  });

  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleList = (setter, list, value) => {
    if (list.includes(value)) setter(list.filter((x) => x !== value));
    else setter([...list, value]);
  };

  const Section = ({ title, id, children }) => (
    <div className="border-b border-gray-200 pb-4 mb-4">
      <button
        onClick={() => setOpen({ ...open, [id]: !open[id] })}
        className="flex justify-between items-center w-full text-base font-bold text-gray-800 tracking-wide"
      >
        {title}
        <i
          className={`ri-arrow-down-s-line text-lg transition-transform duration-200 ${open[id] ? "rotate-180" : "rotate-0"}`}
        ></i>
      </button>
      {open[id] && <div className="mt-3 space-y-2">{children}</div>}
    </div>
  );

  console.log('selectedCategories----', selectedCategories)
  return (
    <>
      {/* 📱 Mobile Filter Button */}
      <div className="lg:hidden mb-4">
        <button
          onClick={() => setMobileOpen(true)}
          className="px-4 py-2 bg-black text-white text-sm rounded-md flex items-center gap-2"
        >
          <i className="ri-filter-3-line"></i> Filters
        </button>
      </div>

      {/* 📦 Sidebar */}
      <aside
        className={`fixed lg:static top-0 left-0 z-50 bg-white h-full lg:h-fit w-72 transform transition-transform duration-300 ease-in-out shadow-lg lg:shadow-none p-5 text-sm overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent ${mobileOpen ? "translate-x-0" : "-translate-x-full"
          } lg:translate-x-0`}
      >
        {/* 📱 Close button for mobile */}
        <div className="flex justify-between items-center mb-4 lg:hidden">
          <h2 className="text-lg font-semibold">Filters</h2>
          <button onClick={() => setMobileOpen(false)} className="text-2xl text-gray-600">
            <i className="ri-close-line"></i>
          </button>
        </div>

        {/* Search */}
        {viewType === "grid" && (
          <div className="mb-5 relative">
            <input
              type="text"
              placeholder="Email"
              className="w-full px-4 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black transition"
            />
            <i className="ri-search-line absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg"></i>
          </div>
        )}

        {/* Categories */}
        <Section title="Categories" id="categories">
          {CATEGORIES.map((c) => (
            <label key={c.value} className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={selectedCategories.includes(c.value)} // ✅ check by value
                onChange={() =>
                  toggleList(setSelectedCategories, selectedCategories, c.value) // ✅ store backend value
                }
                className="h-4 w-4 accent-black"
              />
              <span className="text-[14px] text-black font-normal">{c.label}</span> {/* ✅ show label */}
            </label>
          ))}
        </Section>


        {/* Topics */}
        <Section title="Topics" id="topics">
          <div className="max-h-40 overflow-y-auto pr-1 space-y-2 custom-scroll">
            {TOPICS.map((t) => (
              <label key={t} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={selectedCategories.includes(t)}
                  onChange={() => toggleList(setSelectedCategories, selectedCategories, t)}
                  className="h-4 w-4 accent-black"
                />
                <span className="text-[14px] text-black font-normal">{t}</span>
              </label>
            ))}
          </div>
        </Section>

        {/* On Sale */}
        <div className="border-b border-gray-200 pb-4 mb-4">
          <label className="inline-flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={onSaleOnly}
              onChange={() => setOnSaleOnly(!onSaleOnly)}
              className="h-4 w-4 accent-black"
            />
            <span className="text-[14px] font-bold text-gray-800">
              On Sale <span className="text-black font-normal">(Yes)</span>
            </span>
          </label>
        </div>

        {/* Features */}
        <Section title="Features" id="features">
          <div className="max-h-40 overflow-y-auto pr-1 space-y-2 custom-scroll">
            {FEATURES.map((f) => (
              <label key={f} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={selectedFeatures.includes(f)}
                  onChange={() => toggleList(setSelectedFeatures, selectedFeatures, f)}
                  className="h-4 w-4 accent-black"
                />
                <span className="text-[14px] text-black font-normal">{f}</span>
              </label>
            ))}
          </div>
        </Section>

        {/* Colors */}
        <Section title="Colors" id="colors">
          <div className="max-h-40 overflow-y-auto pr-1 space-y-2 custom-scroll">
            {COLORS.map((c) => (
              <label key={c} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={selectedColors.includes(c)}
                  onChange={() => toggleList(setSelectedColors, selectedColors, c)}
                  className="h-4 w-4 accent-black"
                />
                <span className="text-[14px] text-black font-normal">{c}</span>
              </label>
            ))}
          </div>
        </Section>

        {/* Updated */}
        <div className="border-b border-gray-200 pb-4 mb-4">
          <label className="inline-flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={updatedRecentlyOnly}
              onChange={() => setUpdatedRecentlyOnly(!updatedRecentlyOnly)}
              className="h-4 w-4 accent-black"
            />
            <span className="text-[14px] font-bold text-gray-800">
              Updated <span className="text-black font-normal">(in last 6 months)</span>
            </span>
          </label>
        </div>

        {/* Compatible With */}
        <Section title="Compatible With" id="compatible">
          {COMPAT.map((c) => (
            <label key={c} className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={compatibleWith.includes(c)}
                onChange={() => toggleList(setCompatibleWith, compatibleWith, c)}
                className="h-4 w-4 accent-black"
              />
              <span className="text-[14px] text-black font-normal">{c}</span>
            </label>
          ))}
        </Section>
      </aside>
    </>
  );
}
