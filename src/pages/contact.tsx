import TypedText from '../components/typedText'
import { setPage } from '../reducers/state'
import { useDispatch } from 'react-redux'
import Breadcrumbs from '../components/breadcrumbs'
import ContactForm from '../components/contactForm'
import Footer from '../components/footer'
import PageTransitioning from '../components/pageTransitioning/index'

const ContactPage = (props) => {
  const dispatch = useDispatch();
  dispatch(setPage("Contact"));
  const { HandleLocomotiveScroll, HandleMouseoverEffects } = props;
  HandleLocomotiveScroll();
  HandleMouseoverEffects();

  return (
    <>
    <PageTransitioning/>
    <div data-scroll-section>
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