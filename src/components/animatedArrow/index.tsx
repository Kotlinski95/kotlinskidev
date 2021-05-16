import './index.scss';
import { Link } from 'react-router-dom';

const AnimatedArrow = (props) => {
    return (
        <>
            <div className="arrow-container" style={{ justifyContent: `${props.justify}`, bottom: `${props.bottom}`, top: `${props.top}` }}>
                <ul>
                    <li>
                        <Link className="animated-arrow" to={props.link}>
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
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default AnimatedArrow;

