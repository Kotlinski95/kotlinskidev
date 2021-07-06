import TypedText from '../../components/typedText'
import { setPage } from '../../reducers/state'
import { useDispatch } from 'react-redux'
import Breadcrumbs from '../../components/breadcrumbs'
import Footer from '../../components/footer'
import PageTransitioning from '../../components/pageTransitioning/index'
import ServiceCarousel from '../../components/serviceCarousel'

import shopify from '../../assets/landing_page/shopify.jpg'
import shopify_tablet from '../../assets/landing_page/shopify_tablet.jpg'
import shopify_rwd from '../../assets/landing_page/shopify_rwd.jpg'

import shopify_mobile from '../../assets/landing_page/shopify_mobile.jpg'
import shopify_tablet_mobile from '../../assets/landing_page/shopify_tablet_mobile.jpg'
import shopify_rwd_mobile from '../../assets/landing_page/shopify_rwd_mobile.jpg'

const ShopifyDevelopmentPage = (props) => {
  const dispatch = useDispatch();
  dispatch(setPage("Contact"));
  const { HandleLocomotiveScroll, HandleMouseoverEffects } = props;
  HandleLocomotiveScroll();
  HandleMouseoverEffects();
  const data = [
    {
      image: shopify,
      imageMobile: shopify_mobile,
      header: "SPA / Apliakcje i sklepy internetowe",
      text: "Tworzenie całej warstwy klienta aplikacji internetowej lub wybranych komponentów w oparciu o framework ReactJS, HTML5,CSS3, ES6/TypeScript",
      link: "/services/shopify",
      buttonText: "Więcej"
    },
    {
      image: shopify_tablet,
      imageMobile: shopify_tablet_mobile,
      header: "Dostosowanie do różnych przeglądarek i urządzeń",
      text: "Dostosowanie strony internetowej do wybranych przeglądarek i urządzeń mobilnych z uwzględnieniem różnych rozdzielczości (tzw. Responsive Web Design).",
      link: "/services/shopify",
      buttonText: "Więcej"
    },
    {
      image: shopify_rwd,
      imageMobile: shopify_rwd_mobile,
      header: "Kodowanie PSD do HTML/CSS/JS",
      text: "Pocięcie i zakodowanie do HTML5, CSS3 i JavaScript dostarczonego projektu graficznego strony internetowej, apliakcji web i innych.",
      link: "/services/shopify",
      buttonText: "Więcej"
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
export default ShopifyDevelopmentPage;