
import { setPage } from '../reducers/state'
import { useDispatch } from 'react-redux'
import { Hero } from '../components/hero'
import Footer from '../components/footer'

const HomePage = (props) => {
  const dispatch = useDispatch();
  dispatch(setPage("Homepage"));
  const { HandleLocomotiveScroll } = props;
  HandleLocomotiveScroll();
  const routingProps = {
    language
  }
  return (
    <div data-scroll-section>
     <div className="main-inner" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
        <Hero {...routingProps}/>
        <Footer />
      </div>
    </div>
  );
};
export default HomePage;