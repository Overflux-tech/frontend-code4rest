import { useState } from "react";
import { Link } from "react-router-dom";
import "remixicon/fonts/remixicon.css";
import PromoBanner from "./PromoBanner";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <PromoBanner />
      <header className="bg-yellow-500 text-black w-screen">
        <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-full ">
              <img
                src="/images/cod4rest logo.png"
                alt="logo"
                className="w-full rounded-t-xl" />
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8 font-medium">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <Link to="/about" className="hover:text-white transition-colors">About Us</Link>
            <Link to="/website" className="hover:text-white transition-colors">Website</Link>
            <Link to="/application" className="hover:text-white transition-colors">Application</Link>
            <Link to="/categories" className="hover:text-white transition-colors">Categories</Link>
          </nav>

          {/* Contact Button */}
          <div className="hidden md:block">
            <Link
              to="/contact"
              className="rounded-md border border-black bg-black px-4 py-2 text-sm font-semibold text-white hover:bg-transparent hover:text-black transition-colors"
            >
              Contact Now
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-black text-2xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <i className="ri-close-line"></i> : <i className="ri-menu-line"></i>}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <nav className="md:hidden px-6 pb-4 space-y-2 font-medium bg-yellow-500">
            <Link to="/" className="block hover:text-white transition-colors">Home</Link>
            <Link to="/about" className="block hover:text-white transition-colors">About Us</Link>
            <Link to="/website" className="block hover:text-white transition-colors">Website</Link>
            <Link to="/application" className="block hover:text-white transition-colors">Application</Link>
            <Link to="/categories" className="block hover:text-white transition-colors">Categories</Link>
            <Link
              to="/contact"
              className="block rounded-md border border-black bg-black px-4 py-2 text-sm font-semibold text-white hover:bg-transparent hover:text-black transition-colors"
            >
              Contact Now
            </Link>
          </nav>
        )}
      </header>
    </>
  );
}
