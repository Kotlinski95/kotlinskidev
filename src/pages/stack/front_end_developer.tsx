import { setPage } from '../../reducers/state'
import { useDispatch } from 'react-redux'
import {useEffect} from 'react'
import Breadcrumbs from '../../components/breadcrumbs'
import StackFrontEnd from '../../components/stackFrontEnd'
import Footer from '../../components/footer'
import PageTransitioning from '../../components/pageTransitioning/index'


const FrontEndDeveloperPage = (props) => {
  const dispatch = useDispatch();
  dispatch(setPage("stack/front-end-developer"));
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
          <StackFrontEnd />
        </div>
        <Footer />
      </div>
    </>
  );
};
export default FrontEndDeveloperPage;