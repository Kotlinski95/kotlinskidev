import './index.scss'
import { Link } from 'react-router-dom';

const Button = (props) => {
    return (
        <Link to={props.link} title={`Link to ${props.link}`} aria-label={`Link to ${props.link}`} referrer-policy = 'no-referrer' rel='noopener'><button onClick={props.onClick} className="btn cursor_hover">{props.text}</button></Link>
    )
  }

  export default Button;