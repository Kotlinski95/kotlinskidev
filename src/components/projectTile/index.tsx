import './index.scss'
import { Link } from 'react-router-dom';
import AnimatedArrow from '../../components/animatedArrow'
const ProjectTile = (props) => {
    return(
        <div className="project-tile-wrapper" style={{width: `${props.width}`, height: `${props.height}`}}>
            <Link className="project-tile-link" to={props.url}></Link>
                <img src={props.logo} alt="Logo" className="project-tile-logo"></img>
                <p className="project-tile-title">{props.title}</p>
                <AnimatedArrow text={language.pages.home.about.seemore} justify="center" textSize="28px" top="0px" bottom="auto" link={props.url}/>
        </div>
    );
};

export default ProjectTile;