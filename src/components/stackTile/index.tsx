import './index.scss'
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazyload';
import CustomImage from '../customImage'

const StackTile = (props) => {
    return(
        <div className="stack-tile-wrapper cursor_hover" style={{width: `${props.width}`, height: `${props.height}`, color: `${props.color}`}} data-scroll title={props.title}>
            <Link className="stack-tile-link" to={props.url} title={`Link to ${props.url}`} aria-label={`Link to ${props.url}`} referrer-policy = 'no-referrer' rel='noopener'></Link>
            {
            props.svg ? props.svg : <CustomImage src={props.logo} height={props.height} width={props.width} alt={props.imgTitle}  className="stack-tile-logo" title={props.imgTitle}></CustomImage>
            }
                <p className="stack-tile-title">{props.title}</p>
        </div>
    );
};

export default StackTile;