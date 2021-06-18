import './index.scss'
import { Link } from 'react-router-dom';
const CategoryCollection = (props) => {
    return(
        <div className="tile-wrapper cursor_hover" style={{width: `${props.width}`, height: `${props.height}`}}>
            <Link className="tile-link" to={props.url}></Link>
                <img src={props.logo} alt="Logo" className="tile-logo"></img>
                <p className="tile-title">{props.title}</p>
        </div>
    );
};

export default CategoryCollection;