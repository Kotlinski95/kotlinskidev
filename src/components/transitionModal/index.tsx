import './index.scss'
import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Button from '../button';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        modal: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
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

const TransitionModal = (props) => {
    const classes = useStyles();

    return (
        <div className='transition-modal'>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={props.open}
                onClose={props.handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={props.open}>
                    <div className="transition-popup__wrapper">
                    <div className={classes.paper}>
                        <CloseIcon className="modal-close" onClick={props.handleClosePopup}/>
                        <h2 id="transition-modal-title">{props.title}</h2>
                        <p id="transition-modal-description">{props.text}</p>
                        <Button onClick={props.handleClose} link={props.link} text={props.buttonText} />
                    </div>
                    </div>
                </Fade>
            </Modal>
        </div>
    );
}

export default TransitionModal;