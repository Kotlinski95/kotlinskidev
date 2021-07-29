import { setPage } from '../../reducers/state'
import { useDispatch } from 'react-redux'
import { useEffect } from "react";
import Breadcrumbs from '../../components/breadcrumbs'
import Footer from '../../components/footer'
import PageTransitioning from '../../components/pageTransitioning/index'
import Project from '../../components/project'
import ContactForm from '../../components/contactForm'

const WebsitePage = (props) => {
  const { HandleMouseoverEffects,title } = props;
  const dispatch = useDispatch();
  dispatch(setPage("projects/website"));
  HandleMouseoverEffects();
  useEffect(() => {
    document.title = title || "";
  }, [title]);

  return (
    <>
      <PageTransitioning />
      <div>
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
export default WebsitePage;