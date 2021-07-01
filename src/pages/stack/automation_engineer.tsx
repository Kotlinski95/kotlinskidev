import { setPage } from '../../reducers/state'
import { useDispatch } from 'react-redux'
import Breadcrumbs from '../../components/breadcrumbs'
import Footer from '../../components/footer'
import PageTransitioning from '../../components/pageTransitioning/index'
import StackAutomation from '../../components/stackAutomation'

const AutomationEngineerPage = (props) => {
  const dispatch = useDispatch();
  dispatch(setPage("stack/automation-engineer"));
  const { HandleLocomotiveScroll, HandleMouseoverEffects } = props;
  HandleLocomotiveScroll();
  HandleMouseoverEffects();
  return (
    <>
      <PageTransitioning />
      <div data-scroll-section>
        <div className="main-inner" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%' }}>
          <Breadcrumbs />
          <StackAutomation />
        </div>
        <Footer />
      </div>
    </>
  );
};
export default AutomationEngineerPage;