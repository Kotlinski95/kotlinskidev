
import TypedText from '../components/typedText'
import {setPage} from '../reducers/state'
import {useDispatch } from 'react-redux'
const Home = () => {
  const dispatch = useDispatch();
  dispatch(setPage("Homepage"));
  return(
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%'}}>
      <TypedText />
    </div>
  );
};
export default Home;