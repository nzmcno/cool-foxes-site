import React from 'react'
import styled from 'styled-components'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Pagination, Navigation, Autoplay, EffectCards } from "swiper";

import img1 from '../assets/Nfts/bighead-1.png';
import img2 from '../assets/Nfts/bighead-2.png';
import img3 from '../assets/Nfts/bighead-3.png';
import img4 from '../assets/Nfts/bighead-4.png';
import img5 from '../assets/Nfts/bighead-5.png';
import img6 from '../assets/Nfts/bighead-6.png';
import img7 from '../assets/Nfts/bighead-7.png';

import Arrow from '../assets/Arrow.svg';

const Container = styled.div`
width:25vw;
height:70vh;

.swiper{
    width:100%;
    height:100%;

}
.swiper-slide{
    background-color: ${props => props.theme.carouselColor};

    border-radius:20px;
    display:flex;
    justify-content: center;
    align-items:center;

}
.swiper-button-next{
    color: ${props => props.theme.text};
    right:0;
    width:4rem;
    top:60%;
    background-image:url(${Arrow});
    background-position:center;
    background-size:cover;

    &:after{
        display:none;
    }

}
.swiper-button-prev{
    color: ${props => props.theme.text};
    left:0;
    top:60%;
    width:4rem;
    transform: rotate(180deg);
    background-image:url(${Arrow});
    background-position:center;
    background-size:cover;

    &:after{
        display:none;
    }

}
`;

const Carousel = () => {
  return (
    <Container>
        <Swiper
        autoplay={{
            delay:2000,
            disableOnInteraction:false,
        }}
        pagination={{
            type:'fraction',
        }}
        scrollbar={{
            draggable:true
        }}
        grabCursor={true}
        modules={[EffectCards, Pagination, Navigation,Autoplay]}
        navigation={true}
        effect={"cards"}
        className="mySwiper"
      >
        <SwiperSlide><img src={img1} alt="Cool Foxes" /> </SwiperSlide>
        <SwiperSlide><img src={img2} alt="Cool Foxes" /> </SwiperSlide>
        <SwiperSlide><img src={img3} alt="Cool Foxes" /> </SwiperSlide>
        <SwiperSlide><img src={img4} alt="Cool Foxes" /> </SwiperSlide>
        <SwiperSlide><img src={img5} alt="Cool Foxes" /> </SwiperSlide>
        <SwiperSlide><img src={img6} alt="Cool Foxes" /> </SwiperSlide>
        <SwiperSlide><img src={img7} alt="Cool Foxes" /> </SwiperSlide>
      </Swiper>
    </Container>
  )
}

export default Carousel