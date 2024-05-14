import breakDown from "../assets/breakdown.png";
import Crane from "../assets/crane.png";
import Towtruck from "../assets/tow-truck.png";
import Image from "next/image";
import { useInView, motion } from "framer-motion";
import { useRef } from "react";
export default function OurServices() {
  const ref = useRef(null);
  const inView = useInView(ref, {
    once: true,
  });
  return (
    <div className="h-screen  py-[500px] md:py-0  px-4   ">
      <div
        ref={ref}
        className="flex flex-col gap-10 justify-center items-center"
      >
        <motion.div
          ref={ref}
          initial={{ y: 100, opacity: 0 }} // Initial animation values (start from slightly below and invisible)
          animate={inView ? { y: 0, opacity: 1 } : {}} // Animation when in view
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex gap-3 items-center"
        >
          <div className="border-t-[3px] border-yellow-300 w-[50px]" />
          <span className="font-extrabold uppercase"> Our Services </span>
          <div className="border-t-[3px] border-yellow-300 w-[50px]" />
        </motion.div>

        <motion.span
          ref={ref}
          initial={{ y: 100, opacity: 0 }} // Initial animation values (start from slightly below and invisible)
          animate={inView ? { y: 0, opacity: 1 } : {}} // Animation when in view
          transition={{ duration: 0.5, delay: 0.4 }}
          className="font-semibold text-3xl md:text-6xl text-center"
        >
          Emergency Roadside <br /> Assistant
        </motion.span>
        <div className="flex lg:flex-row flex-col  gap-3 items-center">
          <motion.div
            ref={ref}
            initial={{ y: 100, opacity: 0 }} // Initial animation values (start from slightly below and invisible)
            animate={inView ? { y: 0, opacity: 1 } : {}} // Animation when in view
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col gap-6  md:w-[380px] rounded-lg justify-center items-center border border-black px-3 py-3"
          >
            <Image src={breakDown} width={80} alt="breakdown" />
            <span className="font-extrabold text-xl">Car Towing</span>
            <span className="text-center">
              Our professional car towing service provides reliable assistance
              when your vehicle breaks down or encounters an accident. With
              swift response times, we ensure your vehicle is safely transported
              to the desired destination.
            </span>
          </motion.div>
          <motion.div
            ref={ref}
            initial={{ y: 100, opacity: 0 }} // Initial animation values (start from slightly below and invisible)
            animate={inView ? { y: 0, opacity: 1 } : {}} // Animation when in view
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex flex-col gap-6  md:w-[380px] rounded-lg justify-center items-center border border-black px-3 py-3"
          >
            <Image src={Crane} width={80} alt="breakdown" />
            <span className="font-extrabold text-xl">Motorcycle Towing</span>
            <span className="text-center">
              Trust our motorcycle towing experts to handle the safe transport
              of your bike. Whether it's a breakdown or a roadside mishap, we're
              equipped to provide efficient and secure towing services for
              motorcycles of all sizes.
            </span>
          </motion.div>
          <motion.div
            ref={ref}
            initial={{ y: 100, opacity: 0 }} // Initial animation values (start from slightly below and invisible)
            animate={inView ? { y: 0, opacity: 1 } : {}} // Animation when in view
            transition={{ duration: 0.5, delay: 1 }}
            className="flex flex-col gap-6  md:w-[380px] rounded-lg justify-center items-center border border-black px-3 py-3"
          >
            <Image src={Towtruck} width={80} alt="breakdown" />
            <span className="font-extrabold text-xl">Fire Insurance</span>
            <span className="text-center">
              Our comprehensive fire insurance coverage ensures protection for
              your valuable assets against fire-related damages. With flexible
              policies and dedicated support, safeguard your property
            </span>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
