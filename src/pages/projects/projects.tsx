import TypedText from '../../components/typedText'
import { setPage } from '../../reducers/state'
import { useDispatch } from 'react-redux'
import Breadcrumbs from '../../components/breadcrumbs'
import ProjectTile from '../../components/projectTile'
import portfolio from '../../assets/projects/portfolio.png'
import startwars from '../../assets/projects/starwars.png'
import chess from '../../assets/projects/chess.png'
import realestate from '../../assets/projects/realestate.png'
import Footer from '../../components/footer'

const ProjectsPage = (props) => {
  const dispatch = useDispatch();
  dispatch(setPage("Projects"));
  const { HandleLocomotiveScroll } = props;
  HandleLocomotiveScroll();
  return (
    <div data-scroll-section>
      <div className="main-inner" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
        <Breadcrumbs />
        <h2 className="projects-hello">{language.pages.projects.header}</h2>
        <div className="projects-wrapper">
          <ProjectTile logo={portfolio} width="100%" heigh="100%" title={language.pages.projects.portfolio} imgTitle={language.pages.projects.portfolio} url="/projects/portfolio" />
          <ProjectTile logo={startwars} width="100%" heigh="100%" title={language.pages.projects.quiz} imgTitle={language.pages.projects.quiz} url="/projects/star-wars-quiz" />
          <ProjectTile logo={chess} width="100%" heigh="100%" title={language.pages.projects.chess} imgTitle={language.pages.projects.chess} url="/projects/coders-chess" />
          <ProjectTile logo={realestate} width="100%" heigh="100%" title={language.pages.projects.estate} imgTitle={language.pages.projects.estate} url="/projects/real-estate" />
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default ProjectsPage;