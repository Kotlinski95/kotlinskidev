import './index.scss'
import React from 'react';
import { CarouselProvider, Slider, ButtonBack, ButtonNext, DotGroup } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import ServiceSlide from '../serviceSlide';



const ServiceCarousel = (props) => {
    return (
        <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={125}
        totalSlides={6}
      >
        <Slider>
        {
          props.data.map((element,index) => {
            return(
              <ServiceSlide key={index} index={index} src={element.image} header={element.header} text={element.text}></ServiceSlide>
            );
          })
        }
        </Slider>
        <div className="carousel__back cursor_hover"><ButtonBack>Back</ButtonBack></div>
        <div className="carousel__next cursor_hover"><ButtonNext>Next</ButtonNext></div>
        <DotGroup/>
      </CarouselProvider>
    )
  }
  
  export default ServiceCarousel;