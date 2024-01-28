import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./css/BackgroundSlider.css";

import { Autoplay, EffectFade } from "swiper/modules";
import { iPageData, slideItemType } from "../reducer/PageModel";

export const BackgroudSlider: React.FC< {data: iPageData}> = ( { data } ) => {
    return (
    
        <Swiper
            modules={[Autoplay,EffectFade]}
            speed={2500}
            
            autoplay={{ delay:4000, waitForTransition: true }}
        allowTouchMove={false}
      className="central-swiper"
    >
      {
        data.backgroundSlides.map((slide: slideItemType) => (
          <SwiperSlide className="slide" key={slide.order}>
            <img src={`${import.meta.env.VITE_API_URL}${slide.imageUrl}`}></img>
          </SwiperSlide>
        ))
      }
      </Swiper>
      
      
  );
}
