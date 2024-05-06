import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import profilePic1 from "../../assets/img/profile1.jpg";
import profilePic2 from "../../assets/img/profile2.jpg";
import profilePic3 from "../../assets/img/profile3.jpg";
import profilePic4 from "../../assets/img/profile4.jpg";

const Testimonial = () => {
  const clients = [
    {
      img: profilePic1,
      review:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officiis molestiae quod tempora laudantium, cumque error a nisi placeat quae exercitationem, maiores reiciendis! Eaque dicta minima, iure maiores dolorum sed.",
    },
    {
      img: profilePic2,
      review:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officiis molestiae quod tempora laudantium, cumque error a nisi placeat quae exercitationem, maiores reiciendis! Eaque dicta minima, iure maiores dolorum sed.",
    },
    {
      img: profilePic3,
      review:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officiis molestiae quod tempora laudantium, cumque error a nisi placeat quae exercitationem, maiores reiciendis! Eaque dicta minima, iure maiores dolorum sed.",
    },
    {
      img: profilePic4,
      review:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officiis molestiae quod tempora laudantium, cumque error a nisi placeat quae exercitationem, maiores reiciendis! Eaque dicta minima, iure maiores dolorum sed.",
    },
  ];

  return (
    <div className="px-6 py-0 md:py-10 h-screen flex items-center justify-center md:mt-28 flex-col gap-8 relative">
      <div className="self-start   ml-28">
        <span className="text-4xl font-bold">Clients always get </span>
        <span className="text-4xl font-bold text-orange-300">
          Exceptional Work{" "}
        </span>
        <span className="text-4xl font-bold">from me...</span>
        {/* <div className="blur t-blur1 absolute left-96 top-40 w-24 h-24 bg-purple"></div>
        <div className="blur t-blur2 absolute left-0 top-24 w-24 h-24 bg-skyblue"></div> */}
      </div>
      <Swiper
        slidesPerView={1}
        pagination={{ clickable: true }}
        className="w-full h-3/4"
      >
        {clients.map((client, index) => (
          <SwiperSlide key={index} className="flex items-center justify-center">
            <div className="testimonial flex flex-col items-center justify-around shadow-2xl p-8 w-3/5 h-72 border-2 border-emerald-200  rounded-2xl">
              <img src={client.img} alt="" className="w-16 h-16 rounded-full" />
              <span className="text-gray">{client.review}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonial;
