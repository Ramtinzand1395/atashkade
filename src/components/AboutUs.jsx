import React from "react";
import img from "../assets/20250223_164514.jpg";
import { motion } from "framer-motion";

export const SlideLeft = (delay) => {
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
export const SlideRight = (delay) => {
  return {
    init: {
      y: "-100%",
      opacity: 0,
      display:"hidden"
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
const AboutUs = () => {
  return (
    <div className="container mx-auto flex items-center ">
      <motion.img
        variants={SlideLeft(0.8)}
        initial="init"
        whileInView="animate"
        src={img}
        className="w-[500px] rounded-3xl object-cover h-[40vh]"
        alt=""
      />
      <motion.div
        variants={SlideRight(0.8)}
        whileInView="animate"
        initial="init"
        className="mr-5 space-y-10"
      >
        <h3 className="font-bold text-3xl text-[#0a3637]">
          درباره انجمن زرتشتیان کرمان
        </h3>
        <p>
          نجمن های زرتشتیان نقش بسزایی در حفظ یکپارچگی و مصالح دینی و فرهنگی و
          اجتماعی جامعه زرتشتی داشته اند بطوریکه عدم وجود چنین سازمانی موجب بروز
          مشکلات فراوانی می گردد که گریبان جامعه را می گیرد. تاریخچه انجمن ها در
          بین زرتشتیان به روزگاران کهن باز می گردد و در عهد ساسانی که دین
          زرتشتی، دین رسمی کشور بوده است، جایگاه و اهمیت وجود انجمن ها را به
          وضوح می توان دید. با وجود تغییرات گسترده ای که جامعه زرتشتی در طول
          تاریخ به خود دیده است همچنان نیاز به انجمن و فعالیت های گروهی اهمیت
          ویژه ای دارد ….
        </p>
        <button class="flex gap-3 shadow-sm shadow-white cursor-pointer text-white font-semibold bg-gradient-to-r from-[#005f5f] to-[#02baba] px-10 py-3 rounded-2xl border border-[#02baba] hover:scale-105 duration-200  hover:border-[#02baba]  hover:from-[#028585]  hover:to-[#02baba] ">
          بیشتر
        </button>
      </motion.div>
    </div>
  );
};

export default AboutUs;
