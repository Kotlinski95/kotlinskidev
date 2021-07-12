import { setPage } from '../../reducers/state'
import { useDispatch } from 'react-redux'
import Breadcrumbs from '../../components/breadcrumbs'
import Footer from '../../components/footer'
import PageTransitioning from '../../components/pageTransitioning/index'
import Project from '../../components/project'
import ContactForm from '../../components/contactForm'
import {useEffect} from 'react';

const ChessPage = (props) => {
  const dispatch = useDispatch();
  dispatch(setPage("projects/coders-chess"));
  const { HandleLocomotiveScroll, HandleMouseoverEffects, title } = props;
  HandleLocomotiveScroll();
  HandleMouseoverEffects();
  useEffect(() => {
    document.title = title || "";
}, [title]);
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
export default ChessPage;