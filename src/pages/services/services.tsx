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

const ServicesPage = (props) => {
  const dispatch = useDispatch();
  dispatch(setPage("Contact"));
  const { HandleLocomotiveScroll, HandleMouseoverEffects } = props;
  HandleLocomotiveScroll();
  HandleMouseoverEffects();

// import web_development from '../../assets/landing_page/web_development.png'

  const data = [
    {
      image: programming,
      header: "SPA / Apliakcje i sklepy internetowe",
      text: "Tworzenie całej warstwy klienta aplikacji internetowej lub wybranych komponentów w oparciu o framework ReactJS, HTML5,CSS3, ES6/TypeScript"
    },
    {
      image: rwd,
      header: "Dostosowanie do różnych przeglądarek i urządzeń",
      text: "Dostosowanie strony internetowej do wybranych przeglądarek i urządzeń mobilnych z uwzględnieniem różnych rozdzielczości (tzw. Responsive Web Design)."
    },
    {
      image: spa,
      header: "Kodowanie PSD do HTML/CSS/JS",
      text: "Pocięcie i zakodowanie do HTML5, CSS3 i JavaScript dostarczonego projektu graficznego strony internetowej, apliakcji web i innych."
    },
    {
      image: cleancode,
      header: "Czysty kod",
      text: "Czytelność kodu nadal traktowana jest jako coś mało istotnego, jednak nieczytelny kod znacznie wydłua czas potrzebny do napisania czegokolwiek i może prowadzić do nieprzewidywanych błędów w aplikacjach."
    },
    {
      image: administration,
      header: "Administracja stron internetowych",
      text: "Wdrożenie i utrzymanie strony/aplikacji internetowej w tym okresowe raporty z testów automatycznych i manualnych wybranych funkcjonalności."
    },
    {
      image: javascript,
      header: "JavaScript / TypeScript",
      text: "Jako web developer pracuję z językiem JavaScript/TypeScript, aby rozszerzyć zakres oferowanych usług mogę podjąć się dowonlego projektu korzystającego z tych technologii. "
    },
  ]
  return (
    <>
      <PageTransitioning />
      <div data-scroll-section>
        <div className="main-inner" style={{position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%' }}>
          <Breadcrumbs />
          <ServiceCarousel data={data}/>
        </div>
        <Footer />
      </div>
    </>
  );
};
export default ServicesPage;