import './index.scss'
import { Link } from 'react-router-dom';
import CustomImage from '../customImage';

const CategoryCollection = (props) => {
    return(
        <div className="tile-wrapper cursor_hover" style={{width: `${props.width}`, height: `${props.height}`}}>
            <Link className="tile-link" to={props.url} title={`Link to ${props.url}`} aria-label={`Link to ${props.url}`} referrer-policy = 'no-referrer' rel='preload'></Link>
                <CustomImage src={props.logo} alt={props.title} title={props.title} width='100%' height='100%' className="tile-logo"></CustomImage>
                <p className="tile-title">{props.title}</p>
        </div>
    );
};

export default CategoryCollection;