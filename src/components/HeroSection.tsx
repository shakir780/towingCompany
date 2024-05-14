import Navbar from "./Navbar";
import HeroImg from "../assets/tow-truck-marion.jpeg";
import Image from "next/image";
import { PiClockClockwiseBold } from "react-icons/pi";
import { useInView, motion } from "framer-motion";
import { useRef } from "react";
export default function HeroSection() {
  const ref = useRef(null);
  const inView = useInView(ref, {
    once: true,
  });
  return (
    <div className="pb-10">
      <div
        className="lg:h-screen h-[500px] md:h-[700px] relative  "
        style={{
          backgroundColor: "yellow",
          backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) ),url(https://stearnscompanies.com/eds/wp-content/uploads/2022/02/tow-truck-marion.jpeg)`,
          width: "100%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <Navbar />

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 100 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex justify-center items-center text-center py-32 text-5xl md:text-7xl flex-col capitalize text-white font-extrabold"
        >
          <span>we provide</span>
          <span>highest quality</span>
          <span className="text-yellow-400">towing services</span>
        </motion.div>
        <motion.div
          ref={ref}
          initial={{ x: "100%", opacity: 0 }} // Initial animation values (off-screen to the right)
          animate={inView ? { x: 0, opacity: 1 } : {}} // Animation when in view
          transition={{ duration: 0.5 }} // Animation duration
          className="right-0 pr-24 mb-5 w-full md:w-fit absolute bottom-[-100px]"
        >
          <div className="bg-black shadow-xl md:w-fit w-[400px] md:rounded-full items-center justify-center text-white px-10 py-6 md:px-20 gap-2 md:py-8 flex flex-col font-bold">
            <div className="gap-2 items-center flex md:flex-row flex-col">
              <span className="text-3xl text-yellow-400">
                <PiClockClockwiseBold />
              </span>
              <span className="md:text-2xl text-2xl">24/7 Towing services</span>
            </div>
            <span className="md:text-4xl text-2xl">(880) 323 236 111</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
