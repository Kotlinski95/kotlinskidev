import TypedText from '../../components/typedText'
import {setPage} from '../../reducers/state'
import {useDispatch } from 'react-redux'
import Breadcrumbs from '../../components/breadcrumbs'
import ProjectTile from '../../components/projectTile'
import portfolio from '../../assets/projects/portfolio.png'
import startwars from '../../assets/projects/starwars.png'
import chess from '../../assets/projects/chess.png'
import realestate from '../../assets/projects/realestate.png'

const ProjectsPage = () => {
  const dispatch = useDispatch();
  dispatch(setPage("Projects"));
  return(
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%'}}>
      <Breadcrumbs />
      <h2 className="projects-hello">{language.pages.projects.header}</h2>
      <div className="projects-wrapper">
        <ProjectTile logo={portfolio} width="100%" heigh="100%" title="HTML" imgTitle="HTML 5"/>
        <ProjectTile logo={startwars} width="100%" heigh="100%" title="HTML" imgTitle="HTML 5"/>
        <ProjectTile logo={chess} width="100%" heigh="100%" title="HTML" imgTitle="HTML 5"/>
        <ProjectTile logo={realestate} width="100%" heigh="100%" title="HTML" imgTitle="HTML 5"/>
      </div>
    </div>
  );
};
export default ProjectsPage;