import Image from "next/image";
import towTruck1 from "../assets/towtruck1.png";
import towTruck2 from "../assets/towtruck2.jpeg";
import { TiTick } from "react-icons/ti";
import { FaPlay } from "react-icons/fa";
import { useInView, motion } from "framer-motion";
import { useRef } from "react";
export default function AboutUs() {
  const ref = useRef(null);
  const inView = useInView(ref, {
    once: true,
  });
  return (
    <div className="max-w-7xl mx-auto  2xl:pb-0 py-[200px]">
      <div className="flex md:flex-row flex-col xl:items-center px-16 md:px-10 justify-center xl:gap-0  ">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: -100 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="relative items-center md:pl-20  w-full md:px-3 xl:px-20   pb-[200px] sm:pb-[350px] mb:pb-0"
        >
          <div className="hidden xl:block">
            <Image
              src={towTruck1}
              alt="towtruck1"
              className="w-[600px] object-cover rounded-e-lg "
              style={{
                clipPath:
                  "polygon(0 0, 42% 0, 100% 0, 100% 100%, 88% 100%, 88% 60%, 0 61%)",
              }}
            />
          </div>
          <div>
            <div className="xl:top-[170px] md:h-[300px]  xl:w-[420px] xl:h-[200px] md:w-[280px] top-[150px] md:top-[200px]   xl:left-[80px] absolute">
              <Image
                src={towTruck2}
                alt="towtruck2"
                className=" w-full  h-full object-cover "
              />
            </div>
          </div>
          <div className="bg-black rounded-md   md:w-fit  xl:absolute xl:top-0  ">
            <div className="flex xl:flex-row flex-col gap-3 px-5 md:px-20 py-5 md:py-10 xl:px-16 xl:py-8  ">
              <span className="md:text-4xl text-6xl font-extrabold text-yellow-400">
                29
              </span>
              <span className="text-white  font-bold text-2xl">
                Years of <br className="hidden md:block" /> Experience
              </span>
            </div>
          </div>
        </motion.div>

        <div className="flex w-full justify-center md:pb-28 pt-[100px] md:pt-0 ">
          <motion.div
            ref={ref}
            initial={{ y: 50, opacity: 0 }} // Initial animation values (start from slightly below and invisible)
            animate={inView ? { y: 0, opacity: 1 } : {}} // Animation when in view
            transition={{ duration: 0.5, delay: 0.2 }} // Animation duration and delay
            className="flex-col flex gap-4"
          >
            <motion.div
              initial={{ y: 50, opacity: 0 }} // Initial animation values (start from slightly below and invisible)
              animate={inView ? { y: 0, opacity: 1 } : {}} // Animation when in view
              transition={{ duration: 0.5, delay: 0.4 }} // Animation duration and delay
              className="flex gap-2  items-center md:pl-0 pl-5"
            >
              <span className="font-bold uppercase">About Us</span>
              <div className="border-t-[3px] border-yellow-400 w-[80px]"></div>
            </motion.div>

            <motion.span
              initial={{ y: 50, opacity: 0 }} // Initial animation values (start from slightly below and invisible)
              animate={inView ? { y: 0, opacity: 1 } : {}} // Animation when in view
              transition={{ duration: 0.5, delay: 0.6 }} // Animation duration and delay
              className="text-black font-extrabold capitalize pl-5 md:pl-0  text-3xl md:text-5xl"
            >
              Experience In <br /> Towing Service
            </motion.span>

            <motion.span
              initial={{ y: 50, opacity: 0 }} // Initial animation values (start from slightly below and invisible)
              animate={inView ? { y: 0, opacity: 1 } : {}} // Animation when in view
              transition={{ duration: 0.5, delay: 0.8 }} // Animation duration and delay
              className="md:w-[500px] px-5 md:px-0"
            >
              Years of hands-on expertise navigating the roadways, providing
              prompt and reliable towing solutions. Our seasoned team brings a
              wealth of experience in roadside assistance, vehicle recovery, and
              safe transportation, ensuring peace of mind for every customer we
              serve.
            </motion.span>

            <motion.div
              initial={{ y: 50, opacity: 0 }} // Initial animation values (start from slightly below and invisible)
              animate={inView ? { y: 0, opacity: 1 } : {}} // Animation when in view
              transition={{ duration: 0.5, delay: 1.0 }} // Animation duration and delay
              className="grid grid-cols-1 md:grid-cols-2 gap-6 md:pl-0 pl-5"
            >
              <motion.div
                initial={{ y: 50, opacity: 0 }} // Initial animation values (start from slightly below and invisible)
                animate={inView ? { y: 0, opacity: 1 } : {}} // Animation when in view
                transition={{ duration: 0.5, delay: 1.2 }} // Animation duration and delay
                className="flex flex-col gap-4"
              >
                <motion.div
                  initial={{ y: 50, opacity: 0 }} // Initial animation values (start from slightly below and invisible)
                  animate={inView ? { y: 0, opacity: 1 } : {}} // Animation when in view
                  transition={{ duration: 0.5, delay: 1.4 }} // Animation duration and delay
                  className="flex gap-2"
                >
                  <span className="bg-yellow-400 rounded-full p-1 self-center  text-white">
                    <TiTick />
                  </span>
                  <span className="text-lg">Free Maintenance</span>
                </motion.div>
                <motion.div
                  initial={{ y: 50, opacity: 0 }} // Initial animation values (start from slightly below and invisible)
                  animate={inView ? { y: 0, opacity: 1 } : {}} // Animation when in view
                  transition={{ duration: 0.5, delay: 1.6 }} // Animation duration and delay
                  className="flex gap-2"
                >
                  <span className="bg-yellow-400 rounded-full p-1 self-center text-white">
                    <TiTick />
                  </span>
                  <span className="text-lg">Perfect work</span>
                </motion.div>
              </motion.div>
              <motion.div
                initial={{ y: 50, opacity: 0 }} // Initial animation values (start from slightly below and invisible)
                animate={inView ? { y: 0, opacity: 1 } : {}} // Animation when in view
                transition={{ duration: 0.5, delay: 1.8 }} // Animation duration and delay
                className="flex flex-col gap-4"
              >
                <motion.div
                  initial={{ y: 50, opacity: 0 }} // Initial animation values (start from slightly below and invisible)
                  animate={inView ? { y: 0, opacity: 1 } : {}} // Animation when in view
                  transition={{ duration: 0.5, delay: 2.0 }} // Animation duration and delay
                  className="flex gap-2"
                >
                  <span className="bg-yellow-400 rounded-full p-1 self-center  text-white">
                    <TiTick />
                  </span>
                  <span className="text-lg">Professional Service</span>
                </motion.div>
                <motion.div
                  initial={{ y: 50, opacity: 0 }} // Initial animation values (start from slightly below and invisible)
                  animate={inView ? { y: 0, opacity: 1 } : {}} // Animation when in view
                  transition={{ duration: 0.5, delay: 2.2 }} // Animation duration and delay
                  className="flex gap-2"
                >
                  <span className="bg-yellow-400 rounded-full p-1 self-center text-white">
                    <TiTick />
                  </span>
                  <span className="text-lg">Satisfaction Guaranteed</span>
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ y: 50, opacity: 0 }} // Initial animation values (start from slightly below and invisible)
              animate={inView ? { y: 0, opacity: 1 } : {}} // Animation when in view
              transition={{ duration: 0.5, delay: 2.4 }} // Animation duration and delay
              className="flex md:flex-row flex-col gap-4 pl-5 pt-5"
            >
              <span className="text-black font-bold bg-yellow-400 w-fit p-[18px] rounded-full uppercase">
                Learn More
              </span>
              <span className="text-yellow-400 font-bold bg-black p-[18px] rounded-full w-fit md:self-center uppercase">
                <FaPlay />
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
