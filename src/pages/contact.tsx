import TypedText from '../components/typedText'
import { setPage } from '../reducers/state'
import { useDispatch } from 'react-redux'
import {useEffect} from 'react'
import Breadcrumbs from '../components/breadcrumbs'
import ContactForm from '../components/contactForm'
import Footer from '../components/footer'
import PageTransitioning from '../components/pageTransitioning/index'

const ContactPage = (props) => {
  const dispatch = useDispatch();
  dispatch(setPage("Contact"));
  const { HandleMouseoverEffects, title } = props;
  HandleMouseoverEffects();
  useEffect(() => {
    document.title = title || "";
}, [title]);

  return (
    <>
    <PageTransitioning/>
    <div>
      <div className="main-inner" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%' }}>
        <Breadcrumbs />
        <ContactForm />
      </div>
      <Footer />
    </div>
    </>
  );
};
export default ContactPage;