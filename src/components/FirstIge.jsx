import React from "react";
import img1 from "../assets/IMG_8263.jpg";
import img2 from "../assets/IMG_8278.jpg";
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
        duration: 0.3,
        delay: delay,
      },
    },
  };
};

export const SlideDown = (delay) => {
  return {
    init: {
      y: "-100%",
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

const FirstIge = () => (
  <section className="container mx-auto">
    <div className="flex items-center justify-between">
      <motion.h2
        variants={SlideUp(0.5)}
        initial="init"
        whileInView="animate"
        className="my-10 font-bold text-5xl text-[#0a3637]"
      >
        آخرین اخبار زرتشتیان کرمان
      </motion.h2>
      <motion.button
        variants={SlideDown(0.5)}
        initial="init"
        whileInView="animate"
        class="relative group cursor-pointer text-sky-50  overflow-hidden h-16 w-64 rounded-md bg-[#037373] p-2 flex justify-center items-center font-extrabold"
      >
        <div class="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-40 h-40 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-[#02baba]"></div>
        <div class="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-32 h-32 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-[#04cbcb]"></div>
        <div class="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-24 h-24 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-[#20d3d3]"></div>
        <div class="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-14 h-14 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-[#2fe8e8]"></div>
        <p class="z-10 font-bold">ادامه اخبار</p>
      </motion.button>
    </div>
    <div className="grid grid-cols-2 gap-5">
      <div className="flex flex-col items-center justify-between">
        <motion.div
          variants={SlideUp(0.7)}
          initial="init"
          whileInView="animate"
          className="shadow-md rounded-3xl  flex items-center justify-end cursor-pointer hover:scale-105 transition-all duration-300"
        >
          <img src={img2} className="w-32 h-full ml-5 rounded-r-3xl " alt="" />
          <div className="flex flex-col space-y-6 p-5 ">
            <h3 className="font-bold text-[#0a3637] tracking-tighter">
              حضور ارزیابان شورای جهانی صنایع دستی در آتشکده زرتشتیان یزد
            </h3>
            <p className="text-sm tracking-tighter">
              در روز یکشنبه 5 اسفندماه 1403 برابر با خیرایزد و اسفند ماه 3762
              زرتشتی، ارزیابان شورای جهانی صنایع دستی که تحت نظر سازمان یونسکو
              فعالیت می کندد، از آتشکده زرتشتیان
            </p>
          </div>
        </motion.div>
        <motion.div
          variants={SlideUp(0.9)}
          initial="init"
          whileInView="animate" className="shadow-md rounded-3xl  flex items-center justify-end cursor-pointer hover:scale-105 transition-all duration-300">
          <img src={img2} className="w-32 h-full ml-5 rounded-r-3xl " alt="" />
          <div className="flex flex-col space-y-6 p-5 ">
            <h3 className="font-bold text-[#0a3637] tracking-tighter">
              حضور ارزیابان شورای جهانی صنایع دستی در آتشکده زرتشتیان یزد
            </h3>
            <p className="text-sm tracking-tighter">
              در روز یکشنبه 5 اسفندماه 1403 برابر با خیرایزد و اسفند ماه 3762
              زرتشتی، ارزیابان شورای جهانی صنایع دستی که تحت نظر سازمان یونسکو
              فعالیت می کندد، از آتشکده زرتشتیان
            </p>
          </div>
        </motion.div>{" "}
        <motion.div
          variants={SlideUp(1.2)}
          initial="init"
          whileInView="animate" className="shadow-md rounded-3xl  flex items-center justify-end cursor-pointer hover:scale-105 transition-all duration-300">
          <img src={img2} className="w-32 h-full ml-5 rounded-r-3xl " alt="" />
          <div className="flex flex-col space-y-6 p-5 ">
            <h3 className="font-bold text-[#0a3637] tracking-tighter">
              حضور ارزیابان شورای جهانی صنایع دستی در آتشکده زرتشتیان یزد
            </h3>
            <p className="text-sm tracking-tighter">
              در روز یکشنبه 5 اسفندماه 1403 برابر با خیرایزد و اسفند ماه 3762
              زرتشتی، ارزیابان شورای جهانی صنایع دستی که تحت نظر سازمان یونسکو
              فعالیت می کندد، از آتشکده زرتشتیان
            </p>
          </div>
        </motion.div>
      </div>
      <div className="">
        <img src={img1} className="h-full" alt="" />
      </div>
    </div>
  </section>
);

export default FirstIge;
