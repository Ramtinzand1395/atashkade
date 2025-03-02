import React from "react";
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import { motion } from "framer-motion";

export const SlideLeft = (delay) => {
  return {
    init: {
      x: "100%",
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        delay: delay,
      },
    },
  };
};
const Amaken = () => {
  return (
    <div className="grid grid-cols-4 gap-2 container mx-auto my-20">
      <motion.img
        variants={SlideLeft(0.8)}
        initial="init"
        whileInView="animate"
        src={img1}
        className="w-full h-[50vh] object-cover rounded-b-2xl"
        alt=""
      />
      <motion.img
        variants={SlideLeft(1)}
        initial="init"
        whileInView="animate"
        src={img2}
        className="w-full h-[50vh] object-cover rounded-b-2xl"
        alt=""
      />
      <motion.img
        variants={SlideLeft(1.2)}
        initial="init"
        whileInView="animate"
        src={img1}
        className="w-full h-[50vh] object-cover rounded-b-2xl"
        alt=""
      />
      <motion.img
        variants={SlideLeft(1.4)}
        initial="init"
        whileInView="animate"
        src={img2}
        className="w-full h-[50vh] object-cover rounded-b-2xl"
        alt=""
      />
    </div>
  );
};

export default Amaken;
