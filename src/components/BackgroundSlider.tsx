import photo1 from "../assets/propias/meeting-interaction.jpg";
import photo2 from "../assets/propias/jm-alone.jpg";
import photo3 from "../assets/propias/luisa-alone.jpg";
import photo4 from "../assets/propias/jm-alone2.jpg";
import photo5 from "../assets/propias/meeting-table.jpg";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./css/BackgroundSlider.css";

import { Autoplay,EffectCoverflow } from "swiper/modules";

export function BackgroudSlider() {
  return (
    
    <Swiper

      modules={[ Autoplay,EffectCoverflow]}
        speed={2500}
        effect="coverflow"
        coverflowEffect={ {depth: 20, stretch: 10 }}
        autoplay={{ delay:4000, waitForTransition: true }}
        allowTouchMove={false}
      className="central-swiper"
    >
      <SwiperSlide className="slide">
        <img src={photo1}></img>
      </SwiperSlide>

      <SwiperSlide className="slide">
        <img src={photo2}></img>
      </SwiperSlide>

      <SwiperSlide className="slide">
        <img src={photo3}></img>
      </SwiperSlide>

      <SwiperSlide className="slide">
        <img src={photo4}></img>
      </SwiperSlide>

      <SwiperSlide className="slide">
        <img src={photo5}></img>
      </SwiperSlide>

      </Swiper>
      
      
  );
}
