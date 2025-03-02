import React from "react";
import {
  IoLogoInstagram,
  IoLogoFacebook,
  IoLogoWhatsapp,
} from "react-icons/io";
const Footer = () => {
  return (
    <div className="mx-2 grid grid-cols-3 pt-10 gap-5 bg-[#0a3637] p-4 rounded-t-3xl text-white">
      <div className="space-y-7">
        <h2 className="font-bold text-2xl "> وب سایت خبری زرتشتیان کرمان</h2>
        <p>
          انجمن زرتشتیان کرمان از سال 1323 خورشیدی فعالیت خود را آغاز کرده است و
          اتشکده زرتشتیان کرمان و دخمه زرتشتیان کرمان از مهم ترین زیر مجموعه این
          انجمن هستند. ما را در شبکه های اجتماعی دنبال کنید:
        </p>
        <div className="flex items-center justify-evenly">
          <button class="group cursor-pointer relative inline-flex items-center justify-center w-[50px] h-[50px] bg-gradient-to-r from-[#027878] to-[#02baba] text-white rounded-full shadow-lg transform scale-100 transition-transform duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300">
            <IoLogoInstagram className="rotate-0 transition ease-out duration-300 scale-100 group-hover:-rotate-45 " />
          </button>
          <button class="group cursor-pointer relative inline-flex items-center justify-center w-[50px] h-[50px] bg-gradient-to-r from-[#027878] to-[#02baba] text-white rounded-full shadow-lg transform scale-100 transition-transform duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300">
            <IoLogoFacebook className="rotate-0 transition ease-out duration-300 scale-100 group-hover:-rotate-45 " />
          </button>{" "}
          <button class="group cursor-pointer relative inline-flex items-center justify-center w-[50px] h-[50px] bg-gradient-to-r from-[#027878] to-[#02baba] text-white rounded-full shadow-lg transform scale-100 transition-transform duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300">
            <IoLogoWhatsapp className="rotate-0 transition ease-out duration-300 scale-100 group-hover:-rotate-45 " />
          </button>
        </div>
      </div>
      <div className="">
        <h3 className="font-bold text-3xl ">دسترسی سریع</h3>
        <ul className="space-y-7 mt-5">
          <li>صفحه اصلی</li>
          <li>وبلاگ</li>
          <li>درباره ما</li>
          <li>تماس با ما</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
