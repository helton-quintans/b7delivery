import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import styles from "./style.module.css";

export const Banner = () => {
  return (
    <div className={styles.container}>
      <Swiper
        className={styles.swiper}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
      >
        <SwiperSlide className={styles.slide}>
          <div className={styles.slideImg}>1</div>
          {/* <img src="/temp/banner1.png" alt="banner 1" /> */}
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <div className={styles.slideImg}>2</div>
          {/* <img src="/temp/banner2.png" alt="banner 2" /> */}
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
