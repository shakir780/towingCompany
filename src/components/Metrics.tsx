import { useInView, motion } from "framer-motion";
import { useRef } from "react";
import { AiOutlineGlobal } from "react-icons/ai";
import { GiTowTruck } from "react-icons/gi";
import { IoPeople } from "react-icons/io5";
import { PiClockClockwiseBold } from "react-icons/pi";

export default function Metrics() {
  const ref = useRef(null);
  const inView = useInView(ref, {
    once: true,
  });
  return (
    <div className="h-[100vh]  md:h-[60vh] lg:h-[80vh]   ">
      <div
        ref={ref}
        className="flex md:flex-row flex-wrap flex-col gap-8 md:gap-24 justify-center items-center px-20 py-20  bg-black"
      >
        <motion.div
          ref={ref}
          initial={{ y: 100, opacity: 0 }} // Initial animation values (start from slightly below and invisible)
          animate={inView ? { y: 0, opacity: 1 } : {}} // Animation when in view
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col items-center gap-3 "
        >
          <span className="text-yellow-400 text-7xl">
            <PiClockClockwiseBold />
          </span>
          <span className="text-4xl font-bold text-white">29</span>
          <span className="text-white text-lg font-bold">
            Years Of Experience
          </span>
        </motion.div>
        <motion.div
          ref={ref}
          initial={{ y: 100, opacity: 0 }} // Initial animation values (start from slightly below and invisible)
          animate={inView ? { y: 0, opacity: 1 } : {}} // Animation when in view
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col items-center  gap-3"
        >
          <span className="text-yellow-400 text-7xl">
            <AiOutlineGlobal />
          </span>
          <span className="text-4xl font-bold text-white">50</span>
          <span className="text-white text-lg font-bold">
            Offices Worldwide
          </span>
        </motion.div>
        <motion.div
          ref={ref}
          initial={{ y: 50, opacity: 0 }} // Initial animation values (start from slightly below and invisible)
          animate={inView ? { y: 0, opacity: 1 } : {}} // Animation when in view
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col items-center gap-3"
        >
          <span className="text-yellow-400 text-7xl">
            <GiTowTruck />
          </span>
          <span className="text-4xl font-bold text-white">2550</span>
          <span className="text-white text-lg font-bold">Vehicles Towed</span>
        </motion.div>
        <motion.div
          ref={ref}
          initial={{ y: 50, opacity: 0 }} // Initial animation values (start from slightly below and invisible)
          animate={inView ? { y: 0, opacity: 1 } : {}} // Animation when in view
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex flex-col items-center gap-3"
        >
          <span className="text-yellow-400 text-7xl">
            <PiClockClockwiseBold />
          </span>
          <span className="text-4xl font-bold text-white">50</span>
          <span className="text-white text-lg font-bold">Active Members</span>
        </motion.div>
        <motion.div
          ref={ref}
          initial={{ y: 50, opacity: 0 }} // Initial animation values (start from slightly below and invisible)
          animate={inView ? { y: 0, opacity: 1 } : {}} // Animation when in view
          transition={{ duration: 0.5, delay: 1 }}
          className="flex flex-col items-center gap-3 font-bold "
        >
          <span className="text-yellow-400 text-7xl">
            <IoPeople />
          </span>
          <span className="text-3xl text-white font-bold">29</span>
          <span className="text-white text-lg font-bold">
            Years Of Experience
          </span>
        </motion.div>
      </div>
    </div>
  );
}
