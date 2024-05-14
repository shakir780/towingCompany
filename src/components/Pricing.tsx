import { IoIosClose } from "react-icons/io";
import { TiTick } from "react-icons/ti";
import { useInView, motion } from "framer-motion";
import { useRef } from "react";
export default function Pricing() {
  const ref = useRef(null);
  const inView = useInView(ref, {
    once: true,
  });
  return (
    <div
      ref={ref}
      className="h-screen pt-[100px] pb-[1800px] sm:pb-[2000px] md:pb-0 2xl:h-0"
    >
      {" "}
      <div className="flex flex-col gap-10 justify-center items-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 100 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex gap-3 items-center"
        >
          <div className="border-t-[3px] border-yellow-300 w-[50px]" />
          <span className="font-extrabold uppercase"> Our Pricing </span>
          <div className="border-t-[3px] border-yellow-300 w-[50px]" />
        </motion.div>
        <motion.span
          ref={ref}
          initial={{ opacity: 0, y: 100 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-3xl md:text-5xl font-extrabold"
        >
          Our Best Pricing
        </motion.span>
      </div>
      <div className="flex md:flex-row flex-col px-8  justify-center pt-[50px] items-center gap-3 md:gap-0 lg:gap-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 100 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="md:px-8 lg:px-16 px-16 w-full md:w-fit py-8 rounded-lg border border-black"
        >
          <div className=" flex flex-col justify-center items-center gap-4 ">
            <span className="bg-yellow-400 text-black px-6 text-xl py-2 rounded-full font-bold  text-nowrap">
              Silver Plan
            </span>

            <span className="text-6xl text-yellow-400 font-bold">$200</span>
            <span>Per Month</span>
          </div>
          <div className="pt-10 flex flex-col gap-10 items-center justify-center ">
            <div className="flex text-nowrap gap-2 items-center text-xl">
              <span>
                <TiTick />
              </span>
              <span>Motorcycle Towing</span>
            </div>
            <div className="flex text-nowrap gap-2 items-center text-xl">
              <span>
                <TiTick />
              </span>
              <span>Available 24*7</span>
            </div>
            <div className="flex text-nowrap gap-2 items-center text-xl">
              <span>
                <TiTick />
              </span>
              <span>Tire change</span>
            </div>
            <div className="flex text-nowrap gap-2 items-center text-xl">
              <span>
                <IoIosClose />
              </span>
              <span>Unlock Car door</span>
            </div>
            <span className="bg-yellow-400 w-fit self-center font-bold uppercase text-black px-8 py-4 rounded-full text-nowrap">
              Call Now
            </span>
          </div>
        </motion.div>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 100 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="md:px-8 lg:px-16 px-16 w-full md:w-fit py-8 rounded-lg border border-black"
        >
          <div className=" flex flex-col justify-center items-center gap-4 ">
            <span className="bg-yellow-400 text-black px-6 text-xl py-2 rounded-full font-bold  text-nowrap">
              Gold Plan
            </span>

            <span className="text-6xl text-black font-bold">$270</span>
            <span>Per Month</span>
          </div>
          <div className="pt-10 flex flex-col gap-10 items-center justify-center ">
            <div className="flex text-nowrap gap-2 items-center text-xl">
              <span>
                <TiTick />
              </span>
              <span>Motorcycle Towing</span>
            </div>
            <div className="flex text-nowrap gap-2 items-center text-xl">
              <span>
                <TiTick />
              </span>
              <span>Available 24*7</span>
            </div>
            <div className="flex text-nowrap gap-2 items-center text-xl">
              <span>
                <TiTick />
              </span>
              <span>Tire change</span>
            </div>
            <div className="flex text-nowrap gap-2 items-center text-xl">
              <span>
                <IoIosClose />
              </span>
              <span>Unlock Car door</span>
            </div>
            <span className="bg-black w-fit self-center font-bold uppercase text-yellow-400 px-8 py-4 rounded-full text-nowrap">
              Call Now
            </span>
          </div>
        </motion.div>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 100 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 1 }}
          className="md:px-8 lg:px-16 px-16 w-full md:w-fit py-8 rounded-lg border border-black"
        >
          <div className=" flex flex-col justify-center items-center gap-4 ">
            <span className="bg-black text-white px-6 text-xl  py-2 rounded-full font-bold  text-nowrap">
              Diamond Plan
            </span>

            <span className="text-6xl text-yellow-400 font-bold">$370</span>
            <span>Per Month</span>
          </div>
          <div className="pt-10 flex flex-col gap-10 items-center justify-center ">
            <div className="flex text-nowrap gap-2 items-center text-xl">
              <span>
                <TiTick />
              </span>
              <span>Motorcycle Towing</span>
            </div>
            <div className="flex text-nowrap gap-2 items-center text-xl">
              <span>
                <TiTick />
              </span>
              <span>Available 24*7</span>
            </div>
            <div className="flex gap-2 items-center text-xl">
              <span>
                <TiTick />
              </span>
              <span>Tire change</span>
            </div>
            <div className="flex gap-2 items-center text-xl">
              <span>
                <IoIosClose />
              </span>
              <span>Unlock Car door</span>
            </div>
            <span className="bg-yellow-400 w-fit self-center font-bold uppercase text-black px-8 py-4 rounded-full text-nowrap">
              Call Now
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
