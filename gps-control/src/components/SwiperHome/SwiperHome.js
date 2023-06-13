import React, { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import SwiperCore, { Keyboard, Mousewheel } from "swiper/core";
import "./swiper.css";
import modalImg1 from "../../assets/modal1.jpg"
import modalImg2 from "../../assets/Modal_carga.jpg"
import modalImg3 from "../../assets/Modal_comportamiento.jpg"
import modalImg4 from "../../assets/Modal_conductores.jpg"
import modalImg5 from "../../assets/Modal_flota.jpg"

const SwiperHome = (e) => {
  SwiperCore.use([Keyboard, Mousewheel]);
  const [swiper, setSwiper] = useState(null);
  const [inicialSlide, setInicialSlide] =useState(e.inicialSlide)

  const swiperRef = useRef(null);
  useEffect(() => {
    focusSlide(e.focusOnSlide);
    setInicialSlide(e.inicialSlide)
  }, [
    e.focusOnSlide, e.inicialSlide
  ]);

  const handleSwiperInit = (swiper) => {
    setSwiper(swiper);
  };

  const focusSlide = (slideIndex) => {
    if (swiper) {
      swiper.slideTo(slideIndex);
    }
  };
  return (
    <div
      style={{
        overflow: "hidden",
        alignItems: "center",
      }}
    >
      <Swiper
        centeredSlides={true}
        navigation={true}
        modules={[Pagination, Navigation]}
        initialSlide={inicialSlide}
        mousewheel={true}
        ref={swiperRef}
        onSwiper={(swiper) => handleSwiperInit(swiper)}
        breakpoints={{
          200: {
            spaceBetween: 10,
            slidesPerView: 2,
          },
          650: {
            slidesPerView: 1,
          },
        }}
        className="swiper_home"
      >
        <SwiperSlide className="swiper_home_slide" ><img alt="swiper" src={modalImg1}></img></SwiperSlide>
        <SwiperSlide className="swiper_home_slide" ><img alt="swiper" src={modalImg2}></img></SwiperSlide>
        <SwiperSlide className="swiper_home_slide" ><img alt="swiper" src={modalImg3}></img></SwiperSlide>
        <SwiperSlide className="swiper_home_slide" ><img alt="swiper" src={modalImg4}></img></SwiperSlide>
        <SwiperSlide className="swiper_home_slide" ><img alt="swiper" src={modalImg5}></img></SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperHome;
