import { setPage } from '../../reducers/state'
import { useDispatch } from 'react-redux'
import Breadcrumbs from '../../components/breadcrumbs'
import AnimatedArrow from '../../components/animatedArrow'
import Footer from '../../components/footer'
import {TextRevealVertical, TextRevealHorizontal} from '../../components/contentReveal'

const AboutPage = (props) => {
  const dispatch = useDispatch();
  dispatch(setPage("aboutme"));
  const { HandleLocomotiveScroll } = props;
  HandleLocomotiveScroll();

  return (
    <div data-scroll-section>
      <div className="main-inner" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}  >
        <Breadcrumbs />
        <div className="aboutme-wrapper" >
        <TextRevealVertical data-scroll> <h1 className="aboutme_title">{language.pages.aboutme.main.header}</h1> </TextRevealVertical>
        <TextRevealHorizontal data-scroll> <h3 className="aboutme_text">{language.pages.aboutme.main.text}</h3> </TextRevealHorizontal>
        <TextRevealHorizontal data-scroll> <AnimatedArrow text={language.pages.aboutme.main.see_myprofile} justify="flex-start" textSize="28px" top="auto" bottom="0px" link="/myprofile" /> </TextRevealHorizontal>
        <TextRevealVertical data-scroll> <h2 className="aboutme_title">{language.pages.aboutme.main.education_header}</h2> </TextRevealVertical>
        <TextRevealHorizontal data-scroll> <h3 className="aboutme_text">{language.pages.aboutme.main.education_text}</h3> </TextRevealHorizontal>
        <TextRevealHorizontal data-scroll> <AnimatedArrow text={language.pages.aboutme.main.see_education} justify="flex-start" textSize="28px" top="auto" bottom="0px" link="/aboutme/education" /> </TextRevealHorizontal>
        <TextRevealHorizontal data-scroll> <h3 className="aboutme_text">{language.pages.aboutme.main.education_course}<a href="https://easy-code.io/" target="_blank">{language.pages.aboutme.main.see_easycode}</a> {language.pages.aboutme.main.education_continue}</h3> </TextRevealHorizontal>
        <TextRevealHorizontal data-scroll> <AnimatedArrow text={language.pages.aboutme.main.see_courses} justify="flex-start" textSize="28px" top="auto" bottom="0px" link="/aboutme/courses" /> </TextRevealHorizontal>
        <TextRevealVertical data-scroll> <h2 className="aboutme_title">{language.pages.aboutme.main.experience_header}</h2> </TextRevealVertical>
        <TextRevealHorizontal data-scroll> <h3 className="aboutme_text">{language.pages.aboutme.main.experience_text}</h3> </TextRevealHorizontal>
        <TextRevealHorizontal data-scroll> <AnimatedArrow text={language.pages.aboutme.main.see_experience_web} justify="flex-start" textSize="28px" top="auto" bottom="0px" link="/aboutme/front-end-development" /> </TextRevealHorizontal>
        <TextRevealHorizontal data-scroll> <AnimatedArrow text={language.pages.aboutme.main.see_experience_plc} justify="flex-start" textSize="28px" top="auto" bottom="0px" link="/aboutme/plc-carrier" /> </TextRevealHorizontal>
        <TextRevealVertical data-scroll> <h2 className="aboutme_title">{language.pages.aboutme.main.contact}</h2> </TextRevealVertical>
        <TextRevealHorizontal data-scroll> <h3 className="aboutme_text">{language.pages.aboutme.main.contact_text}</h3> </TextRevealHorizontal>
        <TextRevealHorizontal data-scroll> <AnimatedArrow text={language.pages.aboutme.main.see_contact} justify="flex-start" textSize="28px" top="auto" bottom="0px" link="/contact" /> </TextRevealHorizontal>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default AboutPage;