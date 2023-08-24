'use client'
import React, { Component } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, EffectCoverflow } from 'swiper/modules';

import './carousel.scss';


export default function CarouselIndex()
{
   const CarouselImages = ['assets/carousel-images/one.jpg', 'assets/carousel-images/two.jpg', 'assets/carousel-images/three.jpg',]
      
   
   return(
      <div className='swiper-container'> 
      <div className='empty'/>
         <Swiper
         initialSlide={1}
         effect={'coverflow'}
         grabCursor={true}
         centeredSlides={true}
         loop={false}
         slidesPerView={'auto'}
         coverflowEffect={{
           rotate: 0,
           stretch: 0,
           depth: 100,
           modifier: 2.5,
         }}
         pagination={{ el: '.swiper-pagination', clickable: true }}
         navigation={{
           nextEl: '.swiper-button-next',
           prevEl: '.swiper-button-prev',
           
         }}
         modules={[EffectCoverflow, Pagination, Navigation]}
         className="swiper_container"

           >
        <SwiperSlide><img src={CarouselImages[0]}/><h1>Play solo</h1></SwiperSlide>
        <SwiperSlide><img src={CarouselImages[1]}/><h1>Play with friends</h1></SwiperSlide>
        <SwiperSlide><img src={CarouselImages[2]}/><h1>Compete with others</h1></SwiperSlide>
        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow"> {"<"}
         </div>
          <div className="swiper-button-next slider-arrow">{">"}
        </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
   
    </div>
   )
}


/*  {key: "firstImage",content: <img src={'assets/carousel-images/one.jpg'}/>}, */