
import TypedText from '../components/typedText'
import {setPage} from '../reducers/state'
import {useDispatch } from 'react-redux'
import {HeroDesktop, HeroMobile} from '../components/hero'

const HomePage = () => {
  const dispatch = useDispatch();
  dispatch(setPage("Homepage"));
  return(
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%', position: 'relative'}}>
      <HeroDesktop/>
      <HeroMobile/>
    </div>
  );
};
export default HomePage;