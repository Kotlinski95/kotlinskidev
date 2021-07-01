import './index.scss'
import React from 'react';
import { CarouselProvider, Slider, ButtonBack, ButtonNext, DotGroup } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import ServiceSlide from '../serviceSlide';

const ServiceCarousel = () => {
    return (
        <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={125}
        totalSlides={3}
      >
        <Slider>
          <ServiceSlide index={0} src="https://storage.sg.content-cdn.io/cdn-cgi/image/width=1800,height=490,quality=75,format=auto/in-resources/6c57599f-2c43-4c82-806a-e07c3410f5d3/Images/userimages/home-page-banners/1-2-2021/up502.jpg" >I am the first Slide.</ServiceSlide>
          <ServiceSlide index={1}>I am the second Slide.</ServiceSlide>
          <ServiceSlide index={2}>I am the third Slide.</ServiceSlide>
        </Slider>
        <ButtonBack>Back</ButtonBack>
        <ButtonNext>Next</ButtonNext>
        <DotGroup/>
      </CarouselProvider>
    )
  }
  
  export default ServiceCarousel;