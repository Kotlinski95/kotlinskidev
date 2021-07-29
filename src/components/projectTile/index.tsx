import './index.scss'
import { Link } from 'react-router-dom';
import AnimatedArrow from '../../components/animatedArrow'
import {
    RevealImage,
    Image
} from "../../styled-components";

const ProjectTile = (props) => {
    return(
        <div className="project-tile-wrapper" style={{width: `${props.width}`, height: `${props.height}`, overflow: 'hidden'}}>
            <RevealImage>
                <Link className="project-tile-link" to={props.url}></Link>
                <Image className="cursor_hover" src={props.logo} alt="Logo" />
                <p className="project-tile-title">{props.title}</p>
                <AnimatedArrow text={language.pages.home.about.seemore} justify="center" textSize="28px" top="0px" bottom="auto" link={props.url} />
            </RevealImage>
        </div>
    );
};

export default ProjectTile;