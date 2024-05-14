import { CiFacebook, CiInstagram, CiTwitter, CiYoutube } from "react-icons/ci";
import {
  FaCcAmex,
  FaCcMastercard,
  FaCcPaypal,
  FaCcVisa,
  FaFax,
  FaGoogle,
  FaPhoneAlt,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoCallSharp, IoLocationOutline } from "react-icons/io5";
import { MdEmail, MdOutlineMessage } from "react-icons/md";
import Logo from "../assets/logo (4).png";
import Image from "next/image";

export default function Footer() {
  return (
    <div className=" pt-[400px] md:pt-0 xl:pt-[400px] ">
      <div className="bg-[#121013] h-fit pb-16 ">
        <div className="grid grid-cols-1 md:grid-cols-4 pt-16 px-16 gap-6  ">
          <div className="flex flex-col gap-3  ">
            <div className=" flex items-center  ">
              <Image src={Logo} alt="logo" className="lg:w-[100px] w-[50px]" />
              <span className="font-bold text-white text-lg lg:text-3xl uppercase">
                SpeedyTow
              </span>
            </div>
          </div>
          <div className="md:pl-8 flex flex-col gap-3">
            <div className="flex flex-col gap-1">
              <span className="text-white font-bold text-md  uppercase">
                Quick links
              </span>
              <span className="w-[50px] h-[1px] bg-gray-200 opacity-75"></span>
              <span className="w-[30px] h-[1px] bg-gray-200 opacity-75"></span>
            </div>
            <div className="flex flex-col gap-2 text-white">
              <span>About Us</span>
              <span>Delivery Information</span>
              <span>Privacy Policy</span>
              <span>Pricing</span>
              <span>Blog</span>
            </div>
          </div>
          <div className="md:pl-8 flex flex-col gap-3">
            <div className="flex flex-col gap-1">
              <span className="text-white font-bold text-md  uppercase">
                Our Services
              </span>
              <span className="w-[50px] h-[1px] bg-gray-200 opacity-75"></span>
              <span className="w-[30px] h-[1px] bg-gray-200 opacity-75"></span>
            </div>
            <div className="flex flex-col gap-2 text-white">
              <span>Car Towing</span>
              <span>Battery Replacement</span>
              <span>Motorcycle towing</span>
              <span>Roadside Assistance</span>
              <span>Tyre Replacement</span>
            </div>
          </div>
          <div className="md:pl-8 flex flex-col gap-3">
            <div className="flex flex-col gap-1">
              <span className="text-white font-bold text-md  uppercase">
                Contact
              </span>
              <span className="w-[50px] h-[1px] bg-gray-200 opacity-75"></span>
              <span className="w-[30px] h-[1px] bg-gray-200 opacity-75"></span>
            </div>
            <div className="flex flex-col gap-2 text-white">
              <div className="flex gap-2 items-center">
                <span>
                  <IoLocationOutline />
                </span>
                <span>Jalan Raya Renon No. 99 DPS - Bali</span>
              </div>
              <div className="flex gap-2 items-center">
                <span>
                  <MdEmail />
                </span>
                <span>Info@SpeedyTow.com</span>
              </div>
              <div className="flex gap-2 items-center">
                <span>
                  <FaPhoneAlt />
                </span>
                <span>+(62) 444-567-1608</span>
              </div>
            </div>
          </div>
        </div>
        <hr className="mt-10  text-gray-400" />
        <div className="py-4 md:px-16 flex flex-col gap-4 md:flex-row justify-between items-center">
          <span className="text-white text-sm px-4 text-center">
            Powered By SpeedyTow - 24/7 Towing services © 2024
          </span>
          <div className="flex items-center justify-between gap-3 text-white text-2xl">
            <span>
              <FaCcVisa />
            </span>
            <span>
              <FaCcPaypal />
            </span>
            <span>
              <FaCcMastercard />
            </span>
            <span>
              <FaCcVisa />
            </span>
            <span>
              <FaCcAmex />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
