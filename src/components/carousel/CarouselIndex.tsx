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
         className="swiper_container" >
        <SwiperSlide>
          <img src={CarouselImages[0]}/><h1>Play solo</h1>
          <p className='swiper_description'>Train solo, mastering the secrets of fast typing in Fast Typer's singleplayer mode. Beat records, uncover words, and refine your keyboard skills. It's your time for word mastery!</p>
        </SwiperSlide>

        <SwiperSlide>
          <img src={CarouselImages[1]}/>
          <h1>Play with friends</h1>
          <p className='swiper_description'>Throw down the gauntlet and invite your friends to a showdown in Fast Typer's multiplayer mode. Battle it out for the coveted title of Keyboard Master as you go head-to-head in a fierce typing contest. </p>
        </SwiperSlide>

        <SwiperSlide>
          <img src={CarouselImages[2]}/>
          <h1>Compete with others</h1>
          <p className='swiper_description'> Immerse yourself in the excitement of international competition as you strive to outtype opponents spanning diverse cultures. Elevate the thrill by participating in monthly tournaments that bring together wordsmiths of varying skills. </p>
         </SwiperSlide>
        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow"> {" "}
         </div>
          <div className="swiper-button-next slider-arrow">{" "}
        </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
   
    </div>
   )
}


/*  {key: "firstImage",content: <img src={'assets/carousel-images/one.jpg'}/>}, */