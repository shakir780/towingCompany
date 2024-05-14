import ReadytoHelp from "../assets/ReadyToHelp.jpg";
import { useInView, motion } from "framer-motion";
import { useRef } from "react";
export default function ReadyToHelp() {
  const ref = useRef(null);
  const inView = useInView(ref, {
    once: true,
  });
  return (
    <div
      className="h-screen lg:mt-[500px] md:mt-0 mt-[500px]  md:bg-fixed"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${ReadytoHelp.src}) `,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        // backgroundAttachment: "fixed",
        width: "100%",
        height: "450px",
        padding: "50px 15px 50px 15px",
      }}
    >
      <div className=" flex flex-col gap-6 md:gap-20 items-center justify-center py-8 px-8 ">
        <div className="flex flex-col gap-6 md:gap-10">
          <motion.span
            ref={ref}
            initial={{ y: 50, opacity: 0 }} // Initial animation values (start from slightly below and invisible)
            animate={inView ? { y: 0, opacity: 1 } : {}} // Animation when in view
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-extrabold uppercase text-2xl md:text-5xl text-center text-white"
          >
            We are Ready for 24/7 <br /> hour to help you
          </motion.span>
          <motion.span
            ref={ref}
            initial={{ y: 50, opacity: 0 }} // Initial animation values (start from slightly below and invisible)
            animate={inView ? { y: 0, opacity: 1 } : {}} // Animation when in view
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-white text-center md:w-[700px] leading-7"
          >
            Available round-the-clock, our dedicated team stands prepared to
            assist you anytime, anywhere. Count on us for prompt and reliable
            towing services whenever you need them
          </motion.span>
        </div>
        <motion.span
          ref={ref}
          initial={{ y: 50, opacity: 0 }} // Initial animation values (start from slightly below and invisible)
          animate={inView ? { y: 0, opacity: 1 } : {}} // Animation when in view
          transition={{ duration: 0.5, delay: 0.6 }}
          className="bg-yellow-400 hover:text-yellow-400 cursor-pointer hover:bg-black transition-all px-8 py-4 font-bold uppercase rounded-full self-center"
        >
          Contact Us
        </motion.span>
      </div>
    </div>
  );
}
