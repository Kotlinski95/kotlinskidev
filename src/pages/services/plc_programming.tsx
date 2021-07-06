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
      header: "SPA / Apliakcje i sklepy internetowe",
      text: "Tworzenie całej warstwy klienta aplikacji internetowej lub wybranych komponentów w oparciu o framework ReactJS, HTML5,CSS3, ES6/TypeScript",
      link: "/services/PLC",
      buttonText: "Więcej"
    },
    {
      image: industry,
      imageMobile: industry_mobile,
      header: "Dostosowanie do różnych przeglądarek i urządzeń",
      text: "Dostosowanie strony internetowej do wybranych przeglądarek i urządzeń mobilnych z uwzględnieniem różnych rozdzielczości (tzw. Responsive Web Design).",
      link: "/services/PLC",
      buttonText: "Więcej"
    },
    {
      image: smart_home,
      imageMobile: smart_home_mobile,
      header: "Kodowanie PSD do HTML/CSS/JS",
      text: "Pocięcie i zakodowanie do HTML5, CSS3 i JavaScript dostarczonego projektu graficznego strony internetowej, apliakcji web i innych.",
      link: "/services/PLC",
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
export default PlcProgrammingPage;