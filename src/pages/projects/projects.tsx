import { setPage } from '../../reducers/state'
import { useDispatch } from 'react-redux'
import Breadcrumbs from '../../components/breadcrumbs'
import Footer from '../../components/footer'
import Projects from '../../components/projects'


const ProjectsPage = (props) => {
  const dispatch = useDispatch();
  dispatch(setPage("Projects"));
  const { HandleLocomotiveScroll } = props;
  HandleLocomotiveScroll();
  return (
    <div data-scroll-section>
      <div className="main-inner" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
        <Breadcrumbs />
        <Projects/>
      </div>
      <Footer />
    </div>
  );
};
export default ProjectsPage;