import TypedText from '../components/typedText'
import {setPage} from '../reducers/state'
import {useDispatch } from 'react-redux'
const Contact = () => {
  const dispatch = useDispatch();
  dispatch(setPage("Contact"));
  return(
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%'}}>
      <TypedText />
    </div>
  );
};
export default Contact;