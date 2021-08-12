import './index.scss'
import CustomImage from '../customImage'
import { InView } from 'react-intersection-observer';
import React, { useState, useEffect } from 'react';
import TransitionModal from '../../components/transitionModal';

const StackTile = (props) => {
    const [openTile, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div >
            <InView triggerOnce threshold={0.3}>
                {({ inView, ref, entry }) => (
                    <div ref={ref}
                        className='stack-tile-wrapper cursor_hover'
                        style={{ width: `${props.width}`, height: `${props.height}`, color: `${props.color}` }}
                        title={props.title}
                    >
                        {
                            props.svg ?
                                <svg
                                    className='stack-tile-svg'
                                    onClick={handleOpen}
                                    style={{
                                        transform: inView ? 'rotateX(0)' : 'rotateX(90deg)',
                                        color: inView ? 'inherit' : '#fff',
                                        opacity: inView ? '1' : '0',
                                    }}>{props.svg}
                                </svg> :
                                <CustomImage
                                    onClick={handleOpen}
                                    src={props.logo}
                                    height={props.height}
                                    width={props.width}
                                    alt={props.imgTitle}
                                    className="stack-tile-img"
                                    title={props.imgTitle}
                                    style={{
                                        transform: inView ? 'rotateX(0)' : 'rotateX(90deg)',
                                        color: inView ? 'inherit' : '#fff',
                                        opacity: inView ? '1' : '0',
                                    }}>
                                </CustomImage>
                        }
                        <p
                            className="stack-tile-title"
                            onClick={handleOpen}
                            style={{
                                opacity: inView ? '1' : '0',
                            }}
                        >{props.title}</p>
                    </div>
                )}
            </InView>
            <TransitionModal open={openTile}>
                <props.component handleClose={handleClose} handleClosePopup={handleClose} />
            </TransitionModal>
        </div>
    );
};

export default StackTile;