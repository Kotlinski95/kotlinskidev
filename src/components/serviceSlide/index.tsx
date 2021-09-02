import './index.scss';
import { Slide} from 'pure-react-carousel';
import Button from '../button';
import {useState} from 'react';
import TransitionModal from '../../components/transitionModal';
import { handleTrackingEvent } from '../../analytics';
import CustomImage from '../customImage'
import { nanoid } from 'nanoid'
import CloseIcon from '@material-ui/icons/Close';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        paper: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            backgroundColor: '#1a4137',
            color: '#e1f7f1',
            border: '2px solid #000',
            borderRadius: '15px',
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3),
        },
    }),
);

const ServiceContent = (props) => {
  const classes = useStyles();
  return (
    <div className="transition-popup__wrapper" style={{outline: 0}}>
    <div className={classes.paper}>
        <CloseIcon className="modal-close" onClick={props.handleClosePopup}/>
        <h2 id="transition-modal-title">{props.title}</h2>
        <p id="transition-modal-description">{props.text}</p>
        <Button onClick={props.handleClose} link={props.link} text={props.buttonText} />
    </div>
    </div>
  )
}

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
                    <Button key={nanoid()} onClick={handleOpen} link={props.link} text={props.buttonText} />
                    <TransitionModal open={open}>
                      <ServiceContent handleClose={handleClose} handleClosePopup={handleClose} title={props.popup.title} text={props.popup.text} buttonText={props.popup.buttonText}/>
                    </TransitionModal>
                </div>
            </div>
          </Slide>
    )
  }
  
  export default ServiceSlide;