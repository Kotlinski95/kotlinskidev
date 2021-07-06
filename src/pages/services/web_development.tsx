import TypedText from '../../components/typedText'
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
      header: "SPA / Apliakcje i sklepy internetowe",
      text: "Tworzenie całej warstwy klienta aplikacji internetowej lub wybranych komponentów w oparciu o framework ReactJS, HTML5,CSS3, ES6/TypeScript"
    },
    {
      image: rwd,
      imageMobile: rwd_mobile,
      header: "Dostosowanie do różnych przeglądarek i urządzeń",
      text: "Dostosowanie strony internetowej do wybranych przeglądarek i urządzeń mobilnych z uwzględnieniem różnych rozdzielczości (tzw. Responsive Web Design)."
    },
    {
      image: spa,
      imageMobile: spa_mobile,
      header: "Kodowanie PSD do HTML/CSS/JS",
      text: "Pocięcie i zakodowanie do HTML5, CSS3 i JavaScript dostarczonego projektu graficznego strony internetowej, apliakcji web i innych."
    },
    {
      image: cleancode,
      imageMobile: cleancode_mobile,
      header: "Czysty kod",
      text: "Czytelność kodu nadal traktowana jest jako coś mało istotnego, jednak nieczytelny kod znacznie wydłua czas potrzebny do napisania czegokolwiek i może prowadzić do nieprzewidywanych błędów w aplikacjach."
    },
    {
      image: administration,
      imageMobile: administration_mobile,
      header: "Administracja stron internetowych",
      text: "Wdrożenie i utrzymanie strony/aplikacji internetowej w tym okresowe raporty z testów automatycznych i manualnych wybranych funkcjonalności."
    },
    {
      image: javascript,
      imageMobile: javascript_mobile,
      header: "JavaScript / TypeScript",
      text: "Jako web developer pracuję z językiem JavaScript/TypeScript, aby rozszerzyć zakres oferowanych usług mogę podjąć się dowonlego projektu korzystającego z tych technologii. "
    },
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
export default WebDevelopmentPage;