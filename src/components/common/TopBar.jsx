import React from "react";
import { FaPhoneAlt } from "react-icons/fa";

const TopBar = () => {
  return (
    <div className="container mx-auto flex items-center justify-between pt-4">
      {/* logo */}
      <div className="text-white text-2xl font-bold">انجمن زرتشتیان کرمان</div>
      {/* left btn */}
      <div className="flex items-center">
        <button class="flex gap-3 shadow-sm shadow-white cursor-pointer text-white font-semibold bg-gradient-to-r from-[#005f5f] to-[#02baba] px-7 py-3 rounded-full border border-[#02baba] hover:scale-105 duration-200  0">
          ورود/ثبت نام
        </button>
        <button class="flex gap-3 mr-2 shadow-sm shadow-white cursor-pointer text-white font-semibold bg-gradient-to-r from-[#005f5f] to-[#02baba] px-4 py-3 rounded-full border border-[#02baba] hover:scale-105 duration-200  0">
          <FaPhoneAlt />
        </button>
      </div>{" "}
    </div>
  );
};

export default TopBar;
