import './index.scss'
import React from 'react';
import { CarouselProvider, Slider, ButtonBack, ButtonNext, DotGroup } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import ServiceSlide from '../serviceSlide';

const ServiceCarousel = (props) => {
  const isMobile = _store.getState().pageState.mobile;
    return (
        <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={125}
        totalSlides={props.slides}
        visibleSlides={ isMobile ? 1: props.visibleSlides }
      >
        <Slider>
        {

          props.data.map((element,index) => {
            const image = isMobile ? element.imageMobile : element.image;
            return (
              <React.Fragment key={index}>
                <ServiceSlide  index={index} buttonText={element.buttonText} link={element.link} src={image} header={element.header} text={element.text} popup={element.popup}></ServiceSlide>
              </React.Fragment>
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