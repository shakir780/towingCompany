import React, { useRef } from "react";
import Gallery1 from "../assets/gallery1.jpg";
import Gallery2 from "../assets/gallery2.jpg";
import Gallery3 from "../assets/gallery3.jpg";
import Gallery4 from "../assets/gallery4.jpg";
import Image from "next/image";
import { useInView, motion } from "framer-motion";
export default function OurGallery() {
  const ref = useRef(null);
  const inView = useInView(ref, {
    once: true,
  });
  return (
    <div
      ref={ref}
      className="h-screen px-2 lg:px-16  py-[800px] md:py-0 lg:py-[500px]   "
    >
      <div className="flex flex-col gap-10 justify-center items-center">
        <motion.div
          ref={ref}
          initial={{ y: 50, opacity: 0 }} // Initial animation values (start from slightly below and invisible)
          animate={inView ? { y: 0, opacity: 1 } : {}} // Animation when in view
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex gap-3 items-center"
        >
          <div className="border-t-[3px] border-yellow-300 w-[50px]" />
          <span className="font-extrabold uppercase"> Our Gallery </span>
          <div className="border-t-[3px] border-yellow-300 w-[50px]" />
        </motion.div>
        <motion.span
          ref={ref}
          initial={{ y: 50, opacity: 0 }} // Initial animation values (start from slightly below and invisible)
          animate={inView ? { y: 0, opacity: 1 } : {}} // Animation when in view
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-3xl md:text-5xl font-bold"
        >
          Our Recent Work
        </motion.span>
      </div>
      <div className="flex flex-col gap-2 py-20 justify-center items-center">
        <motion.div
          ref={ref}
          initial={{ y: 50, opacity: 0 }} // Initial animation values (start from slightly below and invisible)
          animate={inView ? { y: 0, opacity: 1 } : {}} // Animation when in view
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex md:flex-row flex-col gap-2"
        >
          <Image
            src={Gallery1}
            className="rounded-xl w-[350px] lg:w-[550px]"
            alt="gallery1"
          />
          <Image
            src={Gallery2}
            className="rounded-xl w-[350px] lg:w-[550px]"
            alt="gallery2"
          />
        </motion.div>
        <motion.div
          ref={ref}
          initial={{ y: 50, opacity: 0 }} // Initial animation values (start from slightly below and invisible)
          animate={inView ? { y: 0, opacity: 1 } : {}} // Animation when in view
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex md:flex-row flex-col gap-2"
        >
          <Image
            src={Gallery3}
            className="rounded-xl w-[350px] lg:w-[550px]"
            alt="gallery3"
          />
          <Image
            src={Gallery4}
            className="rounded-xl w-[350px] lg:w-[550px]"
            alt="gallery4"
          />
        </motion.div>
      </div>
    </div>
  );
}
