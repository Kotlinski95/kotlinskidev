import TypedText from '../../components/typedText'
import { setPage } from '../../reducers/state'
import { useDispatch } from 'react-redux'
import Breadcrumbs from '../../components/breadcrumbs'
import AnimatedArrow from '../../components/animatedArrow'
import Footer from '../../components/footer'
import { TextRevealVertical, TextRevealHorizontal } from '../../components/contentReveal'
import PageTransitioning from '../../components/pageTransitioning/index'

const PlcCarrierPage = (props) => {
  const dispatch = useDispatch();
  dispatch(setPage("aboutme/plc-carrier"));
  const { HandleLocomotiveScroll, HandleMouseoverEffects } = props;
  HandleLocomotiveScroll();
  HandleMouseoverEffects();

  return (
    <>
      <PageTransitioning />
      <div data-scroll-section>
        <div className="main-inner" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%' }} >
          <Breadcrumbs />
          <div className="aboutme-wrapper">
            <TextRevealVertical data-scroll><h1 data-scroll data-scroll-speed="-.5" className="aboutme_title">{language.pages.aboutme.plc.header}</h1></TextRevealVertical>
            <TextRevealHorizontal data-scroll><h3 data-scroll data-scroll-speed="-.5" className="aboutme_text">{language.pages.aboutme.plc.text}</h3></TextRevealHorizontal>
            <TextRevealHorizontal data-scroll><AnimatedArrow text={language.pages.aboutme.plc.back_to_home} justify="flex-start" textSize="28px" top="auto" bottom="0px" link="/aboutme" /></TextRevealHorizontal>
            <TextRevealVertical data-scroll><h2 data-scroll data-scroll-speed="-.5" className="aboutme_title">{language.pages.aboutme.plc.blumenbecker.header}</h2></TextRevealVertical>
            <TextRevealHorizontal data-scroll><h4 data-scroll data-scroll-speed="-.5" className="aboutme_text">{language.pages.aboutme.plc.blumenbecker.text}</h4></TextRevealHorizontal>
            <TextRevealHorizontal data-scroll><AnimatedArrow text={language.pages.aboutme.plc.blumenbecker.link_label} justify="flex-start" textSize="28px" top="auto" bottom="0px" href={language.pages.aboutme.plc.blumenbecker.link} /></TextRevealHorizontal>
            <TextRevealVertical data-scroll><h2 data-scroll data-scroll-speed="-.5" className="aboutme_title">{language.pages.aboutme.plc.bernecker.header}</h2></TextRevealVertical>
            <TextRevealHorizontal data-scroll><h4 data-scroll data-scroll-speed="-.5" className="aboutme_text">{language.pages.aboutme.plc.bernecker.text}</h4></TextRevealHorizontal>
            <TextRevealHorizontal data-scroll><AnimatedArrow text={language.pages.aboutme.plc.bernecker.link_label} justify="flex-start" textSize="28px" top="auto" bottom="0px" href={language.pages.aboutme.plc.bernecker.link} /></TextRevealHorizontal>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};
export default PlcCarrierPage;