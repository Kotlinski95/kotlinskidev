import TypedText from '../../components/typedText'
import { setPage } from '../../reducers/state'
import { useDispatch } from 'react-redux'
import Breadcrumbs from '../../components/breadcrumbs'
import Footer from '../../components/footer'
import PageTransitioning from '../../components/pageTransitioning/index'

const PortfolioPage = (props) => {
  const dispatch = useDispatch();
  dispatch(setPage("projects/portfolio"));
  const { HandleLocomotiveScroll, HandleMouseoverEffects } = props;
  HandleLocomotiveScroll();
  HandleMouseoverEffects();
  return (
    <>
      <PageTransitioning />
      <div data-scroll-section>
        <div className="main-inner" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%' }}>
          <Breadcrumbs />
          <TypedText />
        </div>
        <Footer />
      </div>
    </>
  );
};
export default PortfolioPage;