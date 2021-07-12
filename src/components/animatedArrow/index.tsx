import './index.scss';
import { Link } from 'react-router-dom';
import { handleTrackingEvent } from '../../analytics';

const AnimatedArrow = (props) => {
    return (
        <>
            <div className="arrow-container cursor_hover" style={{ justifyContent: `${props.justify}`, bottom: `${props.bottom}`, top: `${props.top}` }}>
                <ul>
                    <li>
                        {props.link ?
                        <Link className="animated-arrow" to={props.link} onClick={()=>{
                            handleTrackingEvent("Arrow", "Animated arrow link clicked", { page: `${_store.getState().pageState.page}`, href : props.link });
                        }}>
                            <span className="the-arrow -left">
                                <span className="shaft"></span>
                            </span>
                            <span className="arrow-main">
                                <span className="text" style={{ fontSize: `${props.textSize}` }}>
                                    {props.text}
                                </span>
                                <span className="the-arrow -right">
                                    <span className="shaft"></span>
                                </span>
                            </span>
                        </Link> : null
                        }
                        {
                            props.href ?
                            <a className="animated-arrow" href={props.href} target="_blank" onClick={()=>{
                                handleTrackingEvent("Arrow", "Animated arrow link clicked", { page: `${_store.getState().pageState.page}`, href : props.href });
                            }}>
                                <span className="the-arrow -left">
                                    <span className="shaft"></span>
                                </span>
                                <span className="arrow-main">
                                    <span className="text" style={{ fontSize: `${props.textSize}` }}>
                                        {props.text}
                                    </span>
                                    <span className="the-arrow -right">
                                        <span className="shaft"></span>
                                    </span>
                                </span>
                            </a> : null
                        }

                    </li>
                </ul>
            </div>
        </>
    );
};

export default AnimatedArrow;

