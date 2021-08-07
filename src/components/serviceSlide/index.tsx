import './index.scss';
import { Slide} from 'pure-react-carousel';
import Button from '../button';
import {useState} from 'react';
import TransitionModal from '../../components/transitionModal';
import { handleTrackingEvent } from '../../analytics';
import CustomImage from '../customImage'

const ServiceSlide = (props) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
      setOpen(true);
      handleTrackingEvent("Service", "Opened service details", { page: `${_store.getState().pageState.page}`, name: props.header });
  };

  const handleClose = () => {
    setOpen(false);
};

    return (
          <Slide index={props.index}>
            <div className="service-slide-wrapper">
                <CustomImage src={props.src} width='100%' height='100%' title={props.header} alt={props.header}></CustomImage>
                <div className="service-slide-content">
                    <h2>{props.header}</h2>
                    <p>{props.text}</p>
                    <Button onClick={handleOpen} link={props.link} text={props.buttonText} />
                    <TransitionModal open={open} handleClose={handleClose} handleClosePopup={handleClose} title={props.popup.title} text={props.popup.text} buttonText={props.popup.buttonText}/>
                </div>
            </div>
          </Slide>
    )
  }
  
  export default ServiceSlide;