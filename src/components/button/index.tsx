import './index.scss'
import { Link } from 'react-router-dom';

type propsType = {
    link?: string
    text?: string
    onClick?: any
}
const Button = (props: propsType) => {
    const {
        link,
        onClick,
        text,
    } = props;
    return (
            link ?
                <Link to={link} title={`Link to ${link}`} aria-label={`Link to ${link}`} referrer-policy='no-referrer' rel='noopener'><button onClick={onClick} className="btn cursor_hover">{text}</button></Link>
                :
                <button onClick={onClick} className="btn cursor_hover">{text}</button>
    )
  }

  export default Button;