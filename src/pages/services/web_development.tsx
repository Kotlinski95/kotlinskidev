import { setPage } from '../../reducers/state'
import { useDispatch } from 'react-redux'
import Breadcrumbs from '../../components/breadcrumbs'
import Footer from '../../components/footer'
import PageTransitioning from '../../components/pageTransitioning/index'
import ServiceCarousel from '../../components/serviceCarousel'

import programming from '../../assets/landing_page/programming.png'
import rwd from '../../assets/landing_page/rwd.jpg'
import spa from '../../assets/landing_page/spa.jpg'
import cleancode from '../../assets/landing_page/cleancode.jpg'
import administration from '../../assets/landing_page/administration.jpg'
import javascript from '../../assets/landing_page/javascript.jpg'

import programming_mobile from '../../assets/landing_page/programming_mobile.jpg'
import rwd_mobile from '../../assets/landing_page/rwd_mobile.jpg'
import spa_mobile from '../../assets/landing_page/spa_mobile.jpg'
import cleancode_mobile from '../../assets/landing_page/cleancode_mobile.jpg'
import administration_mobile from '../../assets/landing_page/administration_mobile.jpg'
import javascript_mobile from '../../assets/landing_page/javascript_mobile.jpg'

const WebDevelopmentPage = (props) => {
  const dispatch = useDispatch();
  dispatch(setPage("Contact"));
  const { HandleLocomotiveScroll, HandleMouseoverEffects } = props;
  HandleLocomotiveScroll();
  HandleMouseoverEffects();

  const data = [
    {
      image: programming,
      imageMobile: programming_mobile,
      header: language.pages.services.web.inner.header1,
      text: language.pages.services.web.inner.text1,
      link: language.pages.services.web.link,
      buttonText: language.pages.services.buttonText,
      popup: {
        title: language.pages.services.popup.title,
        text: language.pages.services.popup.text,
        buttonText: language.pages.services.popup.buttonText
      }
    },
    {
      image: rwd,
      imageMobile: rwd_mobile,
      header: language.pages.services.web.inner.header2,
      text: language.pages.services.web.inner.text2,
      link: language.pages.services.web.link,
      buttonText: language.pages.services.buttonText,
      popup: {
        title: language.pages.services.popup.title,
        text: language.pages.services.popup.text,
        buttonText: language.pages.services.popup.buttonText
      }
    },
    {
      image: spa,
      imageMobile: spa_mobile,
      header: language.pages.services.web.inner.header3,
      text: language.pages.services.web.inner.text3,
      link: language.pages.services.web.link,
      buttonText: language.pages.services.buttonText,
      popup: {
        title: language.pages.services.popup.title,
        text: language.pages.services.popup.text,
        buttonText: language.pages.services.popup.buttonText
      }
    },
    {
      image: cleancode,
      imageMobile: cleancode_mobile,
      header: language.pages.services.web.inner.header4,
      text: language.pages.services.web.inner.text4,
      link: language.pages.services.web.link,
      buttonText: language.pages.services.buttonText,
      popup: {
        title: language.pages.services.popup.title,
        text: language.pages.services.popup.text,
        buttonText: language.pages.services.popup.buttonText
      }
    },
    {
      image: administration,
      imageMobile: administration_mobile,
      header: language.pages.services.web.inner.header5,
      text: language.pages.services.web.inner.text5,
      link: language.pages.services.web.link,
      buttonText: language.pages.services.buttonText,
      popup: {
        title: language.pages.services.popup.title,
        text: language.pages.services.popup.text,
        buttonText: language.pages.services.popup.buttonText
      }
    },
    {
      image: javascript,
      imageMobile: javascript_mobile,
      header: language.pages.services.web.inner.header6,
      text: language.pages.services.web.inner.text6,
      link: language.pages.services.web.link,
      buttonText: language.pages.services.buttonText,
      popup: {
        title: language.pages.services.popup.title,
        text: language.pages.services.popup.text,
        buttonText: language.pages.services.popup.buttonText
      }
    },
  ]
  return (
    <>
      <PageTransitioning />
      <div data-scroll-section>
        <div className="main-inner main-services" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%' }}>
          <Breadcrumbs />
          <ServiceCarousel slides={Object.keys(data).length} visibleSlides={1} data={data}/>
        </div>
        <Footer />
      </div>
    </>
  );
};
export default WebDevelopmentPage;