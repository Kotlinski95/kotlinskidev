import TypedText from '../../components/typedText'
import { setPage } from '../../reducers/state'
import { useDispatch } from 'react-redux'
import Breadcrumbs from '../../components/breadcrumbs'
import AnimatedArrow from '../../components/animatedArrow'
import Footer from '../../components/footer'

const PlcCarrierPage = (props) => {
  const dispatch = useDispatch();
  dispatch(setPage("aboutme/plc-carrier"));
  const { HandleLocomotiveScroll } = props;
  HandleLocomotiveScroll();
  return (
    <div data-scroll-section>
      <div className="main-inner" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%' }} >
        <Breadcrumbs />
        <div className="aboutme-wrapper">
          <h1 data-scroll data-scroll-speed="-.5" className="aboutme_title">{language.pages.aboutme.plc.header}</h1>
          <h3 data-scroll data-scroll-speed="-.5" className="aboutme_text">{language.pages.aboutme.plc.text}</h3>
          <AnimatedArrow text={language.pages.aboutme.plc.back_to_home} justify="flex-start" textSize="28px" top="auto" bottom="0px" link="/aboutme" />
          <h2 data-scroll data-scroll-speed="-.5" className="aboutme_title">{language.pages.aboutme.plc.blumenbecker.header}</h2>
          <h4 data-scroll data-scroll-speed="-.5" className="aboutme_text">{language.pages.aboutme.plc.blumenbecker.text}</h4>
          <AnimatedArrow text={language.pages.aboutme.plc.blumenbecker.link_label} justify="flex-start" textSize="28px" top="auto" bottom="0px" href={language.pages.aboutme.plc.blumenbecker.link} />
          <h2 data-scroll data-scroll-speed="-.5" className="aboutme_title">{language.pages.aboutme.plc.bernecker.header}</h2>
          <h4 data-scroll data-scroll-speed="-.5" className="aboutme_text">{language.pages.aboutme.plc.bernecker.text}</h4>
          <AnimatedArrow text={language.pages.aboutme.plc.bernecker.link_label} justify="flex-start" textSize="28px" top="auto" bottom="0px" href={language.pages.aboutme.plc.bernecker.link} />
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default PlcCarrierPage;