import './index.scss';
import ProjectTile from '../../components/projectTile'
import portfolio from '../../assets/projects/portfolioBasic.png'
import startwars from '../../assets/projects/starwars.png'
import chess from '../../assets/projects/chess.png'
import realestate from '../../assets/projects/realestate.png'
import website from '../../assets/projects/website.png'

const Projects = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%' }}>
            <h2 className="projects-hello">{language.pages.projects.header}</h2>
            <div className="projects-wrapper">
            <ProjectTile logo={website} width="100%" heigh="100%" title={language.pages.projects.website} imgTitle={language.pages.projects.website} url="/projects/website" />
            <ProjectTile logo={startwars} width="100%" heigh="100%" title={language.pages.projects.quiz} imgTitle={language.pages.projects.quiz} url="/projects/star-wars-quiz" />
            <ProjectTile logo={chess} width="100%" heigh="100%" title={language.pages.projects.chess} imgTitle={language.pages.projects.chess} url="/projects/coders-chess" />
            <ProjectTile logo={realestate} width="100%" heigh="100%" title={language.pages.projects.estate} imgTitle={language.pages.projects.estate} url="/projects/real-estate" />
             <ProjectTile logo={portfolio} width="100%" heigh="100%" title={language.pages.projects.portfolio} imgTitle={language.pages.projects.portfolio} url="/projects/portfolio" />
            </div>
        </div>
    )
}

export default Projects;

