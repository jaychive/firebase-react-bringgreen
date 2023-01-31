// import swiperDBlink from '../json/swiperinof.json';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper"

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import React from 'react';

function ProdSwiper(props) {
  // const prodSwiper = swiperDBlink.products;
  // return (
  //   <div className='container'>
  //     <Swiper
  //       slidesPerView={5}
  //       spaceBetween={50}
  //       loop={true}
  //       loopFillGroupWithBlank={true}
  //       centeredSlides={true}
  //       autoplay={{
  //         delay: 2500,
  //         disableOnInteraction: false,
  //       }}
  //       pagination={{
  //         clickable: true,
  //       }}
  //       navigation={true}
  //       modules={[Pagination, Navigation, Autoplay]}
  //       className="mySwiper"
  //     >
  //     {
  //       prodSwiper.map((value, index) => {
  //         return (
  //           <SwiperSlide className={`d-flex flex-column ${value.cls}`} key={value.cls + index}>
  //             <img src={value.prodImg} alt={value.prodName} className="" />
  //             <h4>{value.prodName}</h4>
  //             <p>올리브영 할인가</p>
  //             <strong>{value.price}</strong>
  //           </SwiperSlide>
  //         )
  //       })
  //     }
  //     </Swiper>
  //   </div>
  // );
}

export default ProdSwiper;