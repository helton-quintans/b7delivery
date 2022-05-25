import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import styles from "./style.module.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import Image from "next/image";

// Import Swiper styles
import "swiper/css/bundle";

export const SwiperHome = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className={styles.swiper}
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </>
  );
};
