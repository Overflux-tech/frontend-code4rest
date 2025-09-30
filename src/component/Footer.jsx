import React from 'react'
import "remixicon/fonts/remixicon.css";

const Footer = () => {
  return (
    <footer className="bg-[#fdfaf1] text-center py-8">
      {/* Logo */}
      <div className="flex justify-center mb-4">
        <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center">
          <span className="text-white text-3xl font-bold relative">
            <img
              src="/images/cod4rest logo.png"
              alt="logo"
              className="w-full rounded-t-xl"
            />
          </span>
        </div>
      </div>

      {/* Email */}
      <div className="flex items-center justify-center space-x-2 text-gray-800 font-semibold mb-4">
        < i className="ri-mail-line"></i>
        <a href="mailto:code4rest@gmail.com">code4rest@gmail.com</a>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-400 mx-auto max-w-4xl my-4"></div>

      {/* Copyright */}
      <p className="text-sm text-gray-600">
        © 2025 – All Rights Reserved | Created By Code4rest
      </p>
    </footer>
  )
}

export default Footer