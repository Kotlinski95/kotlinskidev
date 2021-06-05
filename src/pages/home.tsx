
import TypedText from '../components/typedText'
import { setPage } from '../reducers/state'
import { useDispatch } from 'react-redux'
import { HeroDesktop, HeroMobile } from '../components/hero'
import Footer from '../components/footer'

const HomePage = (props) => {
  const dispatch = useDispatch();
  dispatch(setPage("Homepage"));
  const { HandleLocomotiveScroll } = props;
  HandleLocomotiveScroll();
  return (
    <div data-scroll-section>
      <div className="main-inner" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%', position: 'relative' }}>
        <HeroDesktop language={language} />
        <HeroMobile language={language} />
      </div>
      <Footer />
    </div>
  );
};
export default HomePage;