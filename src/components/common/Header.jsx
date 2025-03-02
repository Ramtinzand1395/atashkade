import React from "react";
import TopBar from "./TopBar";
import Menu from "./Menu";
import img from "../../assets/atashkade.jpg";
import { motion } from "framer-motion";

export const SlideUp = (delay) => {
  return {
    init: {
      y: "100%",
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        delay: delay,
      },
    },
  };
};
const Header = () => {
  return (
    <header className="from-[#0a3637]  bg-red-500 to-[#0d4f51] bg-gradient-to-bl w-full h-[90vh]">
      <TopBar />
      <Menu />
      <div className=" flex items-center justify-between m-5">
        <div className=" flex items-start space-y-16 flex-col ">
          <motion.h2
            variants={SlideUp(0.8)}
            initial="init"
            animate="animate"
            className="font-bold text-white text-4xl"
          >
            وب سایت خبری زرتشتیان کرمان
          </motion.h2>
          <motion.p
            variants={SlideUp(1.4)}
            initial="init"
            animate="animate"
            className="  text-lg font-semibold w-[600px] text-white"
          >
            یک پایگاه خبری آنلاین است که به اطلاع‌رسانی درباره رویدادها، اخبار و
            فعالیت‌های جامعه زرتشتیان کرمان می‌پردازد. این وب‌سایت شامل بخش‌های
            متنوعی از جمله اخبار مذهبی، فرهنگی، اجتماعی و تاریخی مرتبط با جامعه
            زرتشتی است.{" "}
          </motion.p>
        </div>
        {/* left */}
        <div className="relative">
          <motion.img
            src={img}
            className="w-full h-[60vh] object-cover  mt-2 rounded-2xl"
            alt=""
            initial={{ opacity: 0, x: -100, y: 100 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          />

          <div className="absolute top-0 left-0 w-full h-[60vh] bg-teal-900/20"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
