import Image from "next/image";
import Team1 from "../assets/team1.jpg";
import Team2 from "../assets/team2.jpg";
import Team3 from "../assets/team3.jpg";
import { FaFacebookF, FaLinkedin, FaTwitter } from "react-icons/fa";
import { useInView, motion } from "framer-motion";
import { useRef } from "react";

export default function OurExpertTeam() {
  const ref = useRef(null);
  const inView = useInView(ref, {
    once: true,
  });

  console.log(inView);
  return (
    <div
      ref={ref}
      className="h-screen 2xl:max-w-5xl py-[900px] pb-[1300px] sm:py-[900px] md:py-[200px] 2xl:mx-auto px-4 md:px-16  "
    >
      <div>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }} //
          className="flex gap-2  items-center"
        >
          <span className="font-bold uppercase">Our Team</span>
          <div className="border-t-[3px] border-yellow-400 w-[80px]"></div>
        </motion.div>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 100 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }} //
          className="flex justify-between py-10"
        >
          <span className="text-2xl md:text-5xl font-bold text-black">
            Meet Our Expert Team
          </span>
          <span className="bg-yellow-400 hidden md:inline-block rounded-full font-bold py-4 px-6 uppercase  self-center">
            See More
          </span>
        </motion.div>

        <div className="flex md:flex-row flex-col gap-28 md:gap-6 items-center justify-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 100 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }} //
            className="border-[6px]   w-[360px] rounded-lg border-black relative  "
          >
            <Image src={Team1} alt="team1" className="w-full " />
            <div className="absolute flex flex-col gap-2  items-center top-[20px] right-[10px]">
              <span className="bg-black text-yellow-400 px-3 py-3">
                <FaFacebookF />
              </span>
              <span className="bg-black text-yellow-400 px-3 py-3">
                <FaTwitter />
              </span>
              <span className="bg-black text-yellow-400 px-3 py-3">
                {" "}
                <FaLinkedin />
              </span>
            </div>
            <div className=" absolute bottom-[-100px] lg:bottom-[-60px] lg:left-[30px]  flex flex-col gap-3 items-center justify-center bg-black w-full lg:w-[300px] px-3 py-2  lg:px-14 lg:py-4 rounded-xl ">
              <span className="text-white lg:text-3xl text-center font-bold">
                Trump Smith
              </span>
              <span className="text-yellow-400 font-bold :text-2xl">
                Manger
              </span>
            </div>
          </motion.div>
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 100 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }} //
            className="border-[6px] rounded-lg border-black relative    w-[360px]"
          >
            <div className="absolute flex flex-col gap-2 items-center top-[20px] right-[10px]">
              <span className="bg-black text-yellow-400 px-3 py-3">
                <FaFacebookF />
              </span>
              <span className="bg-black text-yellow-400 px-3 py-3">
                <FaTwitter />
              </span>
              <span className="bg-black text-yellow-400 px-3 py-3">
                {" "}
                <FaLinkedin />
              </span>
            </div>
            <Image src={Team2} alt="team1" className="w-full" />
            <div className=" absolute bottom-[-100px] lg:bottom-[-60px] lg:left-[30px]  flex flex-col gap-3 items-center justify-center bg-black w-full lg:w-[300px] px-3 py-2 lg:px-14 lg:py-4 rounded-xl ">
              <span className="text-white lg:text-3xl text-center font-bold">
                Jolly Nick
              </span>
              <span className="text-yellow-400 font-bold :text-2xl">
                Employee
              </span>
            </div>
          </motion.div>

          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 100 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.8 }} //
            className="border-[6px] rounded-lg border-black relative    w-[360px]"
          >
            <div className="absolute flex flex-col gap-2 items-center top-[20px] right-[10px]">
              <span className="bg-black text-yellow-400 px-3 py-3">
                <FaFacebookF />
              </span>
              <span className="bg-black text-yellow-400 px-3 py-3">
                <FaTwitter />
              </span>
              <span className="bg-black text-yellow-400 px-3 py-3">
                {" "}
                <FaLinkedin />
              </span>
            </div>
            <Image src={Team3} alt="team1" className="w-full" />
            <div className=" absolute bottom-[-100px] lg:bottom-[-60px] lg:left-[30px]  flex flex-col gap-3 items-center justify-center bg-black w-full lg:w-[300px] px-3 py-2 lg:px-14 lg:py-4 rounded-xl ">
              <span className="text-white lg:text-3xl text-center font-bold">
                Sam Jack
              </span>
              <span className="text-yellow-400 font-bold :text-2xl">
                Manager
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
