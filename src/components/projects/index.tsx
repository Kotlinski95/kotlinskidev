import './index.scss';
import ProjectTile from '../../components/projectTile'
import portfolio from '../../assets/projects/portfolio.png'
import startwars from '../../assets/projects/starwars.png'
import chess from '../../assets/projects/chess.png'
import realestate from '../../assets/projects/realestate.png'

const Projects = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%' }}>
            <h2 className="projects-hello">{language.pages.projects.header}</h2>
            <div className="projects-wrapper" data-scroll>
                <ProjectTile data-scroll logo={portfolio} width="100%" heigh="100%" title={language.pages.projects.portfolio} imgTitle={language.pages.projects.portfolio} url="/projects/portfolio" />
                <ProjectTile data-scroll logo={startwars} width="100%" heigh="100%" title={language.pages.projects.quiz} imgTitle={language.pages.projects.quiz} url="/projects/star-wars-quiz" />
                <ProjectTile data-scroll logo={chess} width="100%" heigh="100%" title={language.pages.projects.chess} imgTitle={language.pages.projects.chess} url="/projects/coders-chess" />
                <ProjectTile data-scroll logo={realestate} width="100%" heigh="100%" title={language.pages.projects.estate} imgTitle={language.pages.projects.estate} url="/projects/real-estate" />
            </div>
        </div>
    )
}

export default Projects;

