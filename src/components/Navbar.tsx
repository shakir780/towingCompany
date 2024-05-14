import { GiHamburgerMenu } from "react-icons/gi";
import Logo from "../assets/logo (4).png";
import Image from "next/image";
import { useState } from "react";
import MobileNav from "./MobileNav";
import { IoMdClose } from "react-icons/io";
export default function Navbar() {
  const [openMobileNav, setOpenMobileNav] = useState(false);
  return (
    <div className="relative">
      <div className="md:px-10 px-4  shadow-2xl opacity-90 ">
        <div className="flex justify-between w-full items-center ">
          <div className=" flex items-center  ">
            <Image src={Logo} alt="logo" className="w-[100px]" />
            <span className="font-bold text-white text-lg md:text-3xl uppercase">
              SpeedyTow
            </span>
          </div>

          <div className="lg:flex text-white gap-6 text-lg items-center hidden ">
            <span>Home</span>
            <span>About</span>
            <span>Services</span>
            <span>Team</span>
            <span>Contact Us</span>
          </div>
          <div className="bg-[#FFE227] hidden lg:inline-block rounded-full px-6 py-4 text-black font-bold uppercase text-md">
            <span>Order Towing</span>
          </div>

          <span
            onClick={() => setOpenMobileNav(!openMobileNav)}
            className="bg-black text-yellow-500 px-3 py-2 text-2xl lg:hidden cursor-pointer"
          >
            {openMobileNav ? <IoMdClose /> : <GiHamburgerMenu />}
          </span>
        </div>
      </div>

      {openMobileNav && <MobileNav />}
    </div>
  );
}
