import { setPage } from '../../reducers/state'
import { useDispatch } from 'react-redux'
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
  const { HandleLocomotiveScroll, HandleMouseoverEffects } = props;
  HandleLocomotiveScroll();
  HandleMouseoverEffects();
  const data = [
    {
      image: programming_mobile,
      imageMobile: programming_mobile,
      header: language.pages.services.web.header,
      text: language.pages.services.web.text,
      link: language.pages.services.web.link,
      buttonText: language.pages.services.buttonText
    },
    {
      image: rwd_mobile,
      imageMobile: rwd_mobile,
      header: language.pages.services.shopify.header,
      text: language.pages.services.shopify.text,
      link: language.pages.services.shopify.link,
      buttonText: language.pages.services.buttonText
    },
    {
      image: administration_mobile,
      imageMobile: administration_mobile,
      header: language.pages.services.plc.header,
      text: language.pages.services.plc.text,
      link: language.pages.services.plc.link,
      buttonText: language.pages.services.buttonText
    }
  ]
  return (
    <>
      <PageTransitioning />
      <div data-scroll-section>
        <div className="main-inner" style={{position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%' }}>
          <Breadcrumbs />
          <ServiceCarousel slides={Object.keys(data).length} visibleSlides={3} data={data}/>
        </div>
        <Footer />
      </div>
    </>
  );
};
export default ServicesPage;