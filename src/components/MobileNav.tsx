import React from "react";

export default function MobileNav() {
  return (
    <div className="absolute z-50  w-full bg-white">
      <div className="flex flex-col gap-2 py-4  w-full justify-between font-bold">
        <span className="hover:bg-yellow-400 py-3 cursor-pointer px-3">
          Home
        </span>
        <span className="hover:bg-yellow-400 py-3 cursor-pointer px-3">
          About
        </span>
        <span className="hover:bg-yellow-400 py-3 cursor-pointer px-3">
          Services
        </span>
        <span className="hover:bg-yellow-400 py-3 cursor-pointer px-3">
          Team
        </span>
        <span className="hover:bg-yellow-400 py-3 cursor-pointer px-3">
          Contact Us
        </span>
      </div>
    </div>
  );
}
