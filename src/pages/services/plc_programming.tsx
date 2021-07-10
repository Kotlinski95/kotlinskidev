import TypedText from '../../components/typedText'
import { setPage } from '../../reducers/state'
import { useDispatch } from 'react-redux'
import Breadcrumbs from '../../components/breadcrumbs'
import Footer from '../../components/footer'
import PageTransitioning from '../../components/pageTransitioning/index'
import ServiceCarousel from '../../components/serviceCarousel'

import plc from '../../assets/landing_page/plc.jpg'
import industry from '../../assets/landing_page/industry.jpg'
import smart_home from '../../assets/landing_page/smart_home.jpg'

import plc_mobile from '../../assets/landing_page/plc_mobile.jpg'
import industry_mobile from '../../assets/landing_page/industry_mobile.jpg'
import smart_home_mobile from '../../assets/landing_page/smart_home_mobile.jpg'

const PlcProgrammingPage = (props) => {
  const dispatch = useDispatch();
  dispatch(setPage("Contact"));
  const { HandleLocomotiveScroll, HandleMouseoverEffects } = props;
  HandleLocomotiveScroll();
  HandleMouseoverEffects();

  const data = [
    {
      image: plc,
      imageMobile: plc_mobile,
      header: language.pages.services.plc.inner.header1,
      text: language.pages.services.plc.inner.text1,
      link: language.pages.services.plc.link,
      buttonText: language.pages.services.buttonText,
      popup: {
        title: language.pages.services.popup.title,
        text: language.pages.services.popup.text,
        buttonText: language.pages.services.popup.buttonText
      }
    },
    {
      image: industry,
      imageMobile: industry_mobile,
      header: language.pages.services.plc.inner.header2,
      text: language.pages.services.plc.inner.text2,
      link: language.pages.services.plc.link,
      buttonText: language.pages.services.buttonText,
      popup: {
        title: language.pages.services.popup.title,
        text: language.pages.services.popup.text,
        buttonText: language.pages.services.popup.buttonText
      }
    },
    {
      image: smart_home,
      imageMobile: smart_home_mobile,
      header: language.pages.services.plc.inner.header3,
      text: language.pages.services.plc.inner.text3,
      link: language.pages.services.plc.link,
      buttonText: language.pages.services.buttonText,
      popup: {
        title: language.pages.services.popup.title,
        text: language.pages.services.popup.text,
        buttonText: language.pages.services.popup.buttonText
      }
    }
  ]
  return (
    <>
      <PageTransitioning />
      <div data-scroll-section>
        <div className="main-inner" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%' }}>
          <Breadcrumbs />
          <ServiceCarousel slides={Object.keys(data).length} visibleSlides={1} data={data}/>
        </div>
        <Footer />
      </div>
    </>
  );
};
export default PlcProgrammingPage;