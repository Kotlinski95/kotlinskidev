import './index.scss'
import { Slide} from 'pure-react-carousel';

const ServiceSlide = (props) => {
    return (
          <Slide index={props.index}>
              <div className="service-slide-wrapper">
                  <img src={props.src} ></img>
                  <div className="service-slide-content">
                  <h2>
                I am the first Slide.
                </h2>
                <p>
                    I am First slide description
                </p>
                      </div>

              </div>
              
          </Slide>
    )
  }
  
  export default ServiceSlide;