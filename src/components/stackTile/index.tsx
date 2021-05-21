import './index.scss'
import { Link } from 'react-router-dom';
const StackTile = (props) => {
    return(
        <div className="stack-tile-wrapper" style={{width: `${props.width}`, height: `${props.height}`}}>
            <Link className="stack-tile-link" to={props.url}></Link>
            <img src={props.logo} alt="Logo" className="stack-tile-logo" title={props.imgTitle}></img>
                <p className="stack-tile-title">{props.title}</p>
        </div>
    );
};

export default StackTile;