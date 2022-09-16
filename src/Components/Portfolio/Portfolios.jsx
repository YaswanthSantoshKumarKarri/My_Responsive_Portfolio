import React from "react";
import "./Portfolios.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./Portfolios.css";
import todo_pomodoro from "../../img/todo_pomodoro.png";
import Ecommerce from "../../img/ecommerce.png";
import HOC from "../../img/hoc.png";
import MusicApp from "../../img/musicapp1.png";
import { themeContext } from "../../Context";
import { useContext } from "react";
const Portfolios = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      <span
        className="portfoliospan1"
        style={{ color: darkMode ? "white" : "" }}
      >
        Recent Projects
      </span>
      <span>Portfolio</span>

      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <a href="https://gentle-gecko-6ee0a1.netlify.app">
            <img src={HOC} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Ecommerce} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={MusicApp} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={todo_pomodoro} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolios;
