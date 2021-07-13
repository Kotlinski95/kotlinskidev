import './index.scss'
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazyload';

const StackTile = (props) => {
    return(
        <div className="stack-tile-wrapper cursor_hover" style={{width: `${props.width}`, height: `${props.height}`, color: `${props.color}`}} data-scroll title={props.title}>
            <Link className="stack-tile-link" to={props.url}></Link>
            {
            props.svg ? props.svg : <LazyLoad height={props.height} width={props.width} once><img src={props.logo} alt="Logo" style={{width: `${props.width}`, height: `${props.height}`}} className="stack-tile-logo" title={props.imgTitle}></img></LazyLoad>
            }
                <p className="stack-tile-title">{props.title}</p>
        </div>
    );
};

export default StackTile;