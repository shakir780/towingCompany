import React from "react";
import Image from "next/image";
import avatar1 from "../assets/avatar1.jpg";

const TestimonialCard = ({ text, author, position, avatar }) => {
  return (
    <div className="flex flex-col items-center gap-2">
      <span className="text-center">{text}</span>
      <div className="flex gap-2 items-center">
        <Image
          src={avatar}
          alt="testimonial-author"
          className="w-[50px] rounded-full"
        />
        <div className="flex flex-col">
          <span className="font-bold">{author}</span>
          <span>{position}</span>
        </div>
      </div>
    </div>
  );
};
export const Testimonials = () => {
  return (
    <div className="h-screen py-[100px]">
      <div className="flex">
        <div className="bg-yellow-400 py-20">
          <div className=" p-[50px]  ">
            <div className="flex flex-col  items-center gap-16">
              <span className="font-bold text-6xl">Testimonials</span>

              <div>
                <TestimonialCard
                  text="The towing service was incredibly prompt and professional. They arrived within minutes of my call and safely towed my car to the nearest repair shop. Highly recommended!"
                  author="John Smith"
                  position="Car Owner"
                  avatar={avatar1}
                />
                <TestimonialCard
                  text="I was amazed by the efficiency and care shown by the motorcycle towing team. They handled my bike with utmost caution and delivered it to the designated location without any issues."
                  author="Sarah Johnson"
                  position="Motorcycle Enthusiast"
                  avatar={avatar1}
                />
                <TestimonialCard
                  text="The fire insurance policy provided by this company offers comprehensive coverage at competitive rates. I feel secure knowing that my property is protected against fire-related risks."
                  author="David Lee"
                  position="Property Owner"
                  avatar={avatar1}
                />
              </div>
            </div>
          </div>
          <div className="bg-red-400 py-20">
            <div className=" p-[50px]  ">
              <div className="flex flex-col  items-center gap-16">
                <span className="font-bold text-5xl">Testimonial</span>
                <span className="text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim,
                  dolor itaque laudantium maiores cupiditate pariatur, doloribus
                </span>
                <div className="flex gap-2">
                  <Image
                    src={avatar1}
                    alt="local-shop-owner"
                    className="w-[50px] rounded-full"
                  />
                  <div className="flex flex-col">
                    <span>Shah fellipino</span>
                    <span>Ceo</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
