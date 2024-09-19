import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper';

import port_1 from "./assets/port1.jpg";
import port_2 from "./assets/port2.jpg";
import port_3 from "./assets/port3.jpg";

function PortafolioSwiper() {
    return (
        <div className='container'>
            <h1 className='heading'>Producto</h1>
            <Swiper
            effect={ 'coverflow' }
            grabCursor={ true }
            centeredSlides={ true }
            loop={ true }
            slidesPerView={ 'auto' }
            coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 160,
                modifier:2.5,
            }}

            className='swiper_container'
            >
                <SwiperSlide>
                    <img src={port_1} alt="slide_image"/> 
                </SwiperSlide>
                <SwiperSlide>
                    <img src={port_2} alt="slide_image"/> 
                </SwiperSlide>
                <SwiperSlide>
                    <img src={port_3} alt="slide_image"/> 
                </SwiperSlide>

                <div className="slider-container">
                    <div className="swipper-button-prev slider-arrow">
                        <ion-icon name="arrow-back-outline"></ion-icon>
                    </div>
                    <div className="swipper-button-next slider-arrow">
                        <ion-icon name="arrow-forward-outline"></ion-icon>
                    </div>
                </div>

            </Swiper>
        </div>
    );
}


export default PortafolioSwiper;
