
import { setPage } from '../reducers/state'
import { useDispatch } from 'react-redux'
import { Hero } from '../components/hero'
import {useEffect} from 'react'
import Footer from '../components/footer'
import PageTransitioning from '../components/pageTransitioning/index'

const HomePage = (props) => {
  const dispatch = useDispatch();
  dispatch(setPage("Homepage"));
  const {HandleMouseoverEffects, title } = props;
  HandleMouseoverEffects();
      useEffect(() => {
        document.title = title || "";
    }, [title]);

  const routingProps = {
    language
  }
  return (
    <>
    <PageTransitioning/>
    <div>
     <div className="main-inner" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
        <Hero {...routingProps}/>
        <Footer />
      </div>
    </div>
    </>
  );
};
export default HomePage;