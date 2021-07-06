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
      header: "E-commerce Shopify",
      text: "Tworzenie sklepów internetowych z użyciem Shopify",
      link: "/services/shopify",
      buttonText: "Więcej"
    },
    {
      image: rwd_mobile,
      imageMobile: rwd_mobile,
      header: "Web development",
      text: "Tworzenie aplikacji web i stron www",
      link: "/services/web-development",
      buttonText: "Więcej"
    },
    {
      image: administration_mobile,
      imageMobile: administration_mobile,
      header: "PLC",
      text: "Programowanie sterowników przemysłowych",
      link: "/services/PLC",
      buttonText: "Więcej"
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