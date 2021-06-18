import './index.scss'
import { Link } from 'react-router-dom';
const StackTile = (props) => {
    return(
        <div className="stack-tile-wrapper cursor_hover" style={{width: `${props.width}`, height: `${props.height}`, color: `${props.color}`}} data-scroll title={props.title}>
            <Link className="stack-tile-link" to={props.url}></Link>
            {
            props.svg ? props.svg : <img src={props.logo} alt="Logo" className="stack-tile-logo" title={props.imgTitle}></img>
            }
                <p className="stack-tile-title">{props.title}</p>
        </div>
    );
};

export default StackTile;