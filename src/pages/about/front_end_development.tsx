import TypedText from '../../components/typedText'
import { setPage } from '../../reducers/state'
import { useDispatch } from 'react-redux'
import Breadcrumbs from '../../components/breadcrumbs'
import AnimatedArrow from '../../components/animatedArrow'
import Footer from '../../components/footer'
import { TextRevealVertical, TextRevealHorizontal } from '../../components/contentReveal'
import PageTransitioning from '../../components/pageTransitioning/index'
import {useEffect} from 'react';

const FrontEndDevelopmentPage = (props) => {
  const dispatch = useDispatch();
  dispatch(setPage("aboutme/front-end-development"));
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
            <TextRevealVertical><h1 className="aboutme_title">{language.pages.aboutme.front.header}</h1></TextRevealVertical>
            <TextRevealHorizontal><h3 className="aboutme_text">{language.pages.aboutme.front.text}</h3></TextRevealHorizontal>
            <TextRevealHorizontal><AnimatedArrow text={language.pages.aboutme.front.back_to_home} justify="flex-start" textSize="28px" top="auto" bottom="0px" link="/aboutme" /></TextRevealHorizontal>
            <TextRevealVertical><h2 className="aboutme_title">{language.pages.aboutme.front.sobre.header}</h2></TextRevealVertical>
            <TextRevealHorizontal><h4 className="aboutme_text">{language.pages.aboutme.front.sobre.text}</h4></TextRevealHorizontal>
            <TextRevealHorizontal><AnimatedArrow text={language.pages.aboutme.front.sobre.link_label} justify="flex-start" textSize="28px" top="auto" bottom="0px" href={language.pages.aboutme.front.sobre.link} /></TextRevealHorizontal>
            <TextRevealVertical><h2 className="aboutme_title">{language.pages.aboutme.front.easy_code.header}</h2></TextRevealVertical>
            <TextRevealHorizontal><h4 className="aboutme_text">{language.pages.aboutme.front.easy_code.text}</h4></TextRevealHorizontal>
            <TextRevealHorizontal><h5 className="aboutme_text">{language.pages.aboutme.front.easy_code.text_ace}</h5></TextRevealHorizontal>
            <TextRevealHorizontal><AnimatedArrow text={language.pages.aboutme.front.easy_code.link_label} justify="flex-start" textSize="28px" top="auto" bottom="0px" href={language.pages.aboutme.front.easy_code.link} /></TextRevealHorizontal>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};
export default FrontEndDevelopmentPage;