import { setPage } from '../../reducers/state'
import { useDispatch } from 'react-redux'
import Breadcrumbs from '../../components/breadcrumbs'
import Footer from '../../components/footer'
import PageTransitioning from '../../components/pageTransitioning/index'
import Project from '../../components/project'
import ContactForm from '../../components/contactForm'
import {useEffect} from 'react';

const EstatePage = (props) => {
  const dispatch = useDispatch();
  dispatch(setPage("projects/star-wars-quiz"));
  const { HandleMouseoverEffects, title } = props;
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
export default EstatePage;