import './index.scss'
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazyload';
import CustomImage from '../customImage'
import { InView } from 'react-intersection-observer';
import { useState } from 'react';

const StackTile = (props) => {
    const [editMode, setModeToggler] = useState(false);
    return (
        <InView triggerOnce threshold={0.3}>
        {({ inView, ref, entry }) => (
                <div ref={ref}
                    className='stack-tile-wrapper cursor_hover'
                    style={{ width: `${props.width}`, height: `${props.height}`, color: `${props.color}` }}
                    title={props.title}
                >
                <Link className="stack-tile-link" to={props.url}></Link>
                {
                        props.svg ?
                        <svg
                            className='stack-tile-svg'
                            style={{
                                    transform: inView ? 'rotateX(0)' : 'rotateX(90deg);',
                                    color: inView ? 'inherit' : '#fff',
                                    opacity: inView ? '1' : '0',
                            }}>{props.svg}
                        </svg> :
                            <CustomImage
                            src={props.logo}
                            height={props.height}
                            width={props.width}
                            alt={props.imgTitle}
                            className="stack-tile-img"
                            title={props.imgTitle}
                            style={{
                                transform: inView ? 'rotateX(0)' : 'rotateX(90deg);',
                                color: inView ? 'inherit' : '#fff',
                                opacity: inView ? '1' : '0',
                            }}>
                            </CustomImage>
                }
                    <p
                        className="stack-tile-title"
                        style={{
                            opacity: inView ? '1' : '0',
                        }}
                    >{props.title}</p>
            </div>
        )}
        </InView>

    );
};

export default StackTile;