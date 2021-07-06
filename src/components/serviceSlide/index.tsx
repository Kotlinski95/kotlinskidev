import './index.scss'
import { Slide} from 'pure-react-carousel';
import Button from '../button'

const ServiceSlide = (props) => {
    return (
          <Slide index={props.index}>
            <div className="service-slide-wrapper">
                <img src={props.src} ></img>
                <div className="service-slide-content">
                    <h2>{props.header}</h2>
                    <p>{props.text}</p>
                    <Button link={props.link} text={props.buttonText} />
                </div>
            </div>
          </Slide>
    )
  }
  
  export default ServiceSlide;