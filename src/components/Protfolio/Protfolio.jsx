import React, { useContext } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Sidebar from "../../assets/img/sidebar.png";
import Ecommerce from "../../assets/img/ecommerce.png";
import HOC from "../../assets/img/hoc.png";
import MusicApp from "../../assets/img/musicapp.png";
import { themeContext } from "../../Context";

const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme && theme.state ? theme.state.darkMode : false;

  return (
    <div className="portfolio flex items-center justify-center flex-col mt-16 overflow-hidden p-4">
      <span
        className="text-black text-5xl font-bold"
        style={{ color: darkMode ? "white" : "" }}
      >
        Recent Projects
      </span>
      <span className="text-orange-300 text-5xl font-bold">Portfolio</span>
      <Swiper
        spaceBetween={10}
        slidesPerView={3}
        grabCursor={true}
        direction="horizontal"
        className="portfolio-slider overflow-visible mt-12 w-full"
      >
        <SwiperSlide>
          <img
            src={Sidebar}
            alt=""
            className="w-96 filter drop-shadow-2xl rounded-2xl"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={Ecommerce}
            alt=""
            className="w-96 filter drop-shadow-2xl rounded-2xl"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={MusicApp}
            alt=""
            className="w-96 filter drop-shadow-2xl rounded-2xl"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={HOC}
            alt=""
            className="w-96 filter drop-shadow-2xl rounded-2xl"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
