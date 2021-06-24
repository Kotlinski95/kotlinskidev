import { setPage } from '../../reducers/state'
import { useDispatch } from 'react-redux'
import Breadcrumbs from '../../components/breadcrumbs'
import Footer from '../../components/footer'
import PageTransitioning from '../../components/pageTransitioning/index'
import Project from '../../components/project'
import ContactForm from '../../components/contactForm'

const EstatePage = (props) => {
  const dispatch = useDispatch();
  dispatch(setPage("projects/star-wars-quiz"));
  const { HandleLocomotiveScroll, HandleMouseoverEffects } = props;
  HandleLocomotiveScroll();
  HandleMouseoverEffects();
  return (
    <>
      <PageTransitioning />
      <div data-scroll-section>
        <div className="main-inner" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%' }}>
          <Breadcrumbs />
          <Project />
          <ContactForm/>
        </div>
        <Footer />
      </div>
    </>
  );
};
export default EstatePage;