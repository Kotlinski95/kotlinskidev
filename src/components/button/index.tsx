import './index.scss'
import { Link } from 'react-router-dom';

const Button = (props) => {
    return (
        <Link to={props.link}><button onClick={props.onClick} className="btn cursor_hover">{props.text}</button></Link>
    )
  }

  export default Button;