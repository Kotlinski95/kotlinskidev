import { setPage } from '../../reducers/state';
import { useDispatch } from 'react-redux';
import Breadcrumbs from '../../components/breadcrumbs';
import AnimatedArrow from '../../components/animatedArrow';
import Footer from '../../components/footer';
import { TextRevealVertical, TextRevealHorizontal } from '../../components/contentReveal';
import PageTransitioning from '../../components/pageTransitioning/index';
import {useEffect} from 'react';
import CustomLink from '../../components/customLink';

const AboutPage = (props) => {
  const dispatch = useDispatch();
  dispatch(setPage("aboutme"));
  const {HandleMouseoverEffects, title } = props;
  HandleMouseoverEffects();

  useEffect(() => {
    document.title = title || "";
  }, [title]);

  return (
    <>
      <PageTransitioning />
      <div>
        <div className="main-inner" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}  >
          <Breadcrumbs />
          <div className="aboutme-wrapper" >
            <TextRevealVertical> <h1 className="aboutme_title">{language.pages.aboutme.main.header}</h1> </TextRevealVertical>
            <TextRevealHorizontal> <h3 className="aboutme_text">{language.pages.aboutme.main.text}</h3> </TextRevealHorizontal>
            <TextRevealHorizontal> <AnimatedArrow text={language.pages.aboutme.main.see_myprofile} justify="flex-start" textSize="28px" top="auto" bottom="0px" link="/myprofile" /> </TextRevealHorizontal>
            <TextRevealVertical> <h2 className="aboutme_title">{language.pages.aboutme.main.education_header}</h2> </TextRevealVertical>
            <TextRevealHorizontal> <h3 className="aboutme_text">{language.pages.aboutme.main.education_text}</h3> </TextRevealHorizontal>
            <TextRevealHorizontal> <AnimatedArrow text={language.pages.aboutme.main.see_education} justify="flex-start" textSize="28px" top="auto" bottom="0px" link="/aboutme/education" /> </TextRevealHorizontal>
            <TextRevealHorizontal> <h3 className="aboutme_text">{language.pages.aboutme.main.education_course}<a href="https://easy-code.io/" target="_blank">{language.pages.aboutme.main.see_easycode}</a> {language.pages.aboutme.main.education_continue}</h3> </TextRevealHorizontal>
            <TextRevealHorizontal> <AnimatedArrow text={language.pages.aboutme.main.see_courses} justify="flex-start" textSize="28px" top="auto" bottom="0px" link="/aboutme/courses" /> </TextRevealHorizontal>
            <TextRevealVertical> <h2 className="aboutme_title">{language.pages.aboutme.main.experience_header}</h2> </TextRevealVertical>
            <TextRevealHorizontal> <h3 className="aboutme_text">{language.pages.aboutme.main.experience_text}</h3> </TextRevealHorizontal>
            <TextRevealHorizontal> <AnimatedArrow text={language.pages.aboutme.main.see_experience_web} justify="flex-start" textSize="28px" top="auto" bottom="0px" link="/aboutme/front-end-development" /> </TextRevealHorizontal>
            <TextRevealHorizontal> <AnimatedArrow text={language.pages.aboutme.main.see_experience_plc} justify="flex-start" textSize="28px" top="auto" bottom="0px" link="/aboutme/plc-carrier" /> </TextRevealHorizontal>
            <TextRevealVertical> <h2 className="aboutme_title">{language.pages.aboutme.main.contact}</h2> </TextRevealVertical>
            <TextRevealHorizontal> <h3 className="aboutme_text">{language.pages.aboutme.main.contact_text}</h3> </TextRevealHorizontal>
            <TextRevealHorizontal> <AnimatedArrow text={language.pages.aboutme.main.see_contact} justify="flex-start" textSize="28px" top="auto" bottom="0px" link="/contact" /> </TextRevealHorizontal>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};
export default AboutPage;