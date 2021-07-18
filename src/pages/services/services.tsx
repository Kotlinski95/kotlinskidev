import { setPage } from '../../reducers/state'
import { useDispatch } from 'react-redux'
import {useEffect} from 'react'
import Breadcrumbs from '../../components/breadcrumbs'
import Footer from '../../components/footer'
import PageTransitioning from '../../components/pageTransitioning/index'
import ServiceCarousel from '../../components/serviceCarousel'

import programming_mobile from '../../assets/landing_page/programming_mobile.jpg'
import rwd_mobile from '../../assets/landing_page/rwd_mobile.jpg'
import administration_mobile from '../../assets/landing_page/administration_mobile.jpg'

const ServicesPage = (props) => {
  const dispatch = useDispatch();
  dispatch(setPage("Contact"));
  const { HandleLocomotiveScroll, HandleMouseoverEffects, title } = props;
  HandleLocomotiveScroll();
  HandleMouseoverEffects();
  useEffect(() => {
    document.title = title || "";
}, [title]);
  const data = [
    {
      image: programming_mobile,
      imageMobile: programming_mobile,
      header: language.pages.services.web.header,
      text: language.pages.services.web.text,
      link: language.pages.services.web.link,
      buttonText: language.pages.services.buttonText,
      popup: {
        title: language.pages.services.popup.title,
        text: language.pages.services.popup.text,
        buttonText: language.pages.services.popup.buttonText
      }
    },
    {
      image: rwd_mobile,
      imageMobile: rwd_mobile,
      header: language.pages.services.shopify.header,
      text: language.pages.services.shopify.text,
      link: language.pages.services.shopify.link,
      buttonText: language.pages.services.buttonText,
      popup: {
        title: language.pages.services.popup.title,
        text: language.pages.services.popup.text,
        buttonText: language.pages.services.popup.buttonText
      }
    },
    {
      image: administration_mobile,
      imageMobile: administration_mobile,
      header: language.pages.services.plc.header,
      text: language.pages.services.plc.text,
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
    <div className="scroll-section">
      <PageTransitioning />
      <div data-scroll-section>
        <div className="main-inner main-services" style={{position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%' }}>
          <Breadcrumbs />
          <ServiceCarousel slides={Object.keys(data).length} visibleSlides={3} data={data}/>
        </div>
        <Footer />
      </div>
    </div>
  );
};
export default ServicesPage;