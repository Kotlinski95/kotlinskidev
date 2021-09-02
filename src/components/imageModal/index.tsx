import './index.scss'
import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        modal: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            maxWidth: '100vw',
            maxHeight: '100vh',
        },
    }),
);

const ImageModal = (props) => {
    const classes = useStyles();
    return (
        <div className='image-modal'>
            <Modal
                aria-labelledby="image-modal-title"
                aria-describedby="image-modal-description"
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
                    {props.children}
                </Fade>
            </Modal>
        </div>
    );
}

export default ImageModal;