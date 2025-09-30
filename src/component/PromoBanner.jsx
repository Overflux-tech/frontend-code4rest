import React from "react";

export default function PromoBanner() {
    return (
        <div className="w-full bg-white border-b border-gray-300 py-4 text-center text-xs md:text-sm">
        {/* <div className="w-full bg-white border-b border-gray-300 py-4 text-center text-xs md:text-sm fixed top-0 left-0 z-50"> */}
            <p className="text-gray-700 font-semibold">
                Use My Exclusive Promo Code{" "}
                <span className="text-red-600 font-bold">[Code4rest]</span>{" "}
                For <span className="text-red-600 font-bold">10% OFF</span> On All MonsterONE Plans!
            </p>
        </div>
    );
}
