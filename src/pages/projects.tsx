import TypedText from '../components/typedText'
import {setPage} from '../reducers/state'
import {useDispatch } from 'react-redux'
const Projects = () => {
  const dispatch = useDispatch();
  dispatch(setPage("Projects"));
  return(
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%'}}>
      <TypedText />
    </div>
  );
};
export default Projects;