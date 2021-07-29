import TypedText from '../../components/typedText'
import { setPage } from '../../reducers/state'
import { useDispatch } from 'react-redux'
import Breadcrumbs from '../../components/breadcrumbs'
import AnimatedArrow from '../../components/animatedArrow'
import Footer from '../../components/footer'
import { TextRevealVertical, TextRevealHorizontal } from '../../components/contentReveal'
import PageTransitioning from '../../components/pageTransitioning/index'
import {useEffect} from 'react';

const PlcCarrierPage = (props) => {
  const dispatch = useDispatch();
  dispatch(setPage("aboutme/plc-carrier"));
  const {HandleMouseoverEffects, title } = props;
  HandleMouseoverEffects();

  useEffect(() => {
    document.title = title || "";
}, [title]);

  return (
    <>
      <PageTransitioning />
      <div>
        <div className="main-inner" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%' }} >
          <Breadcrumbs />
          <div className="aboutme-wrapper">
            <TextRevealVertical><h1 className="aboutme_title">{language.pages.aboutme.plc.header}</h1></TextRevealVertical>
            <TextRevealHorizontal><h3 className="aboutme_text">{language.pages.aboutme.plc.text}</h3></TextRevealHorizontal>
            <TextRevealHorizontal><AnimatedArrow text={language.pages.aboutme.plc.back_to_home} justify="flex-start" textSize="28px" top="auto" bottom="0px" link="/aboutme" /></TextRevealHorizontal>
            <TextRevealVertical><h2 className="aboutme_title">{language.pages.aboutme.plc.blumenbecker.header}</h2></TextRevealVertical>
            <TextRevealHorizontal><h4 className="aboutme_text">{language.pages.aboutme.plc.blumenbecker.text}</h4></TextRevealHorizontal>
            <TextRevealHorizontal><AnimatedArrow text={language.pages.aboutme.plc.blumenbecker.link_label} justify="flex-start" textSize="28px" top="auto" bottom="0px" href={language.pages.aboutme.plc.blumenbecker.link} /></TextRevealHorizontal>
            <TextRevealVertical><h2 className="aboutme_title">{language.pages.aboutme.plc.bernecker.header}</h2></TextRevealVertical>
            <TextRevealHorizontal><h4 className="aboutme_text">{language.pages.aboutme.plc.bernecker.text}</h4></TextRevealHorizontal>
            <TextRevealHorizontal><AnimatedArrow text={language.pages.aboutme.plc.bernecker.link_label} justify="flex-start" textSize="28px" top="auto" bottom="0px" href={language.pages.aboutme.plc.bernecker.link} /></TextRevealHorizontal>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};
export default PlcCarrierPage;