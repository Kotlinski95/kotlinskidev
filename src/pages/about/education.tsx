import TypedText from '../../components/typedText'
import {setPage} from '../../reducers/state'
import {useDispatch } from 'react-redux'
import Breadcrumbs from '../../components/breadcrumbs'

const EducationPage = () => {
  const dispatch = useDispatch();
  dispatch(setPage("aboutme/front-end-development"));
  return(
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%'}}>
      <Breadcrumbs />
      <TypedText />
    </div>
  );
};
export default EducationPage;