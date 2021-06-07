import TypedText from '../../components/typedText'
import {setPage} from '../../reducers/state'
import {useDispatch } from 'react-redux'
import Breadcrumbs from '../../components/breadcrumbs'
import AnimatedArrow from '../../components/animatedArrow'
import Footer from '../../components/footer'
import { TextRevealVertical, TextRevealHorizontal } from '../../components/contentReveal'


const EducationPage = (props) => {
  const dispatch = useDispatch();
  dispatch(setPage("aboutme/front-end-development"));
  const { HandleLocomotiveScroll } = props;
  HandleLocomotiveScroll();
  return(
    <div data-scroll-section>
    <div className="main-inner" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%'}} >
      <Breadcrumbs />
      <div className="aboutme-wrapper">
      <TextRevealVertical data-scroll><h1 data-scroll data-scroll-speed="-.5" className="aboutme_title">{language.pages.aboutme.education.header}</h1></TextRevealVertical>
      <TextRevealHorizontal data-scroll><h3 data-scroll data-scroll-speed="-.5" className="aboutme_text">{language.pages.aboutme.education.text}</h3></TextRevealHorizontal>
      <TextRevealHorizontal data-scroll><AnimatedArrow text={language.pages.aboutme.education.back_to_home} justify="flex-start" textSize="28px" top="auto" bottom="0px" link="/aboutme"/></TextRevealHorizontal>
      <TextRevealVertical data-scroll><h2 data-scroll data-scroll-speed="-.5" className="aboutme_title">{language.pages.aboutme.education.agh.header}</h2></TextRevealVertical>
      <TextRevealHorizontal data-scroll><h4 data-scroll data-scroll-speed="-.5" className="aboutme_text">{language.pages.aboutme.education.agh.text}</h4></TextRevealHorizontal>
      <TextRevealHorizontal data-scroll><AnimatedArrow text={language.pages.aboutme.education.agh.link_label} justify="flex-start" textSize="28px" top="auto" bottom="0px" href={language.pages.aboutme.education.agh.link}/></TextRevealHorizontal>
      <TextRevealVertical data-scroll><h2 data-scroll data-scroll-speed="-.5" className="aboutme_title">{language.pages.aboutme.education.zs6.header}</h2></TextRevealVertical>
      <TextRevealHorizontal data-scroll><h4 data-scroll data-scroll-speed="-.5" className="aboutme_text">{language.pages.aboutme.education.zs6.text}</h4></TextRevealHorizontal>
      <TextRevealHorizontal data-scroll><AnimatedArrow text={language.pages.aboutme.education.zs6.link_label} justify="flex-start" textSize="28px" top="auto" bottom="0px" href={language.pages.aboutme.education.zs6.link}/></TextRevealHorizontal>
      </div>
    </div>
    <Footer/>
    </div>
  );
};
export default EducationPage;