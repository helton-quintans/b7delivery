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
  for (let i = 0; 1 < 9; i += 1) {}
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
        <SwiperSlide className={styles.swiperSlide}>Slide 1</SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>Slide 2</SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>Slide 3</SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>Slide 4</SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>Slide 5</SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>Slide 6</SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>Slide 7</SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>Slide 8</SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>Slide 9</SwiperSlide>
      </Swiper>
    </>
  );
};
