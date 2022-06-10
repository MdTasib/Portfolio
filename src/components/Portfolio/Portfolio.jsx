import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import Portfolio1 from '../../img/portfolio1.png';
import Portfolio2 from '../../img/portfolio2.png';
import Portfolio3 from '../../img/portfolio3.png';
import Portfolio4 from '../../img/portfolio4.png';
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
        <img src={Portfolio4} alt="" />
          
          <div className="description">
            <h4>Lukas</h4>
            <div className="link">
              <a href="https://lukas-bd.web.app" rel="noreferrer" target="_blank">
                LIVE
              </a>
              <a href="https://github.com/MdTasib/Lukas-client" rel="noreferrer" target="_blank">
                GITHUB
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Portfolio1} alt="" />
          <div className="description">
            <h4>Store House</h4>
            <div className="link">
              <a href="https://practice-firebase-4157f.web.app/" rel="noreferrer" target="_blank">
                LIVE
              </a>
              <a href="https://github.com/MdTasib/store-house-client" rel="noreferrer" target="_blank">
                GITHUB
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Portfolio3} alt="" />
          <div className="description">
            <h4>Photographoy</h4>
            <div className="link">
              <a href="https://photography-studiobd.web.app/" rel="noreferrer" target="_blank">
                LIVE
              </a>
              <a href="https://github.com/MdTasib/photography-studio" rel="noreferrer" target="_blank">
                GITHUB
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Portfolio2} alt="" />
          <div className="description">
            <h4>Red Onion</h4>
            <div className="link">
              <a href="https://red-onionbd.netlify.app" rel="noreferrer" target="_blank">
                LIVE
              </a>
              <a href="https://github.com/MdTasib/Red-onion-foods" rel="noreferrer" target="_blank">
                GITHUB
              </a>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
