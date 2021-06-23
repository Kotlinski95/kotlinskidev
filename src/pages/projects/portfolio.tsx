import { setPage } from '../../reducers/state'
import { useDispatch } from 'react-redux'
import { useEffect } from "react";
import Breadcrumbs from '../../components/breadcrumbs'
import Footer from '../../components/footer'
import PageTransitioning from '../../components/pageTransitioning/index'
import Project from '../../components/project'
import ContactForm from '../../components/contactForm'

const PortfolioPage = (props) => {
  const { HandleMouseoverEffects, HandleLocomotiveScroll, title } = props;
  const dispatch = useDispatch();
  dispatch(setPage("projects/portfolio"));
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
export default PortfolioPage;