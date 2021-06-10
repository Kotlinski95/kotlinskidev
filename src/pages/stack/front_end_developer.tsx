import { setPage } from '../../reducers/state'
import { useDispatch } from 'react-redux'
import Breadcrumbs from '../../components/breadcrumbs'
import StackFrontEnd from '../../components/stackFrontEnd'
import Footer from '../../components/footer'


const FrontEndDeveloperPage = (props) => {
  const dispatch = useDispatch();
  dispatch(setPage("aboutme/front-end-developer"));
  const { HandleLocomotiveScroll } = props;
  HandleLocomotiveScroll();

  return (
    <div data-scroll-section>
      <div className="main-inner" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%' }}>
        <Breadcrumbs />
        <StackFrontEnd/>
      </div>
      <Footer />
    </div>
  );
};
export default FrontEndDeveloperPage;