import { setPage } from '../../reducers/state'
import { useDispatch } from 'react-redux'
import Breadcrumbs from '../../components/breadcrumbs'
import AnimatedArrow from '../../components/animatedArrow'
import Footer from '../../components/footer'

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
          <h1 data-scroll data-scroll-speed="-.5" className="aboutme_title">{language.pages.aboutme.main.header}</h1>
          <h3 data-scroll data-scroll-speed="-.5" className="aboutme_text">{language.pages.aboutme.main.text}</h3>
          <AnimatedArrow data-scroll data-scroll-speed="-.5" text={language.pages.aboutme.main.see_myprofile} justify="flex-start" textSize="28px" top="auto" bottom="0px" link="/myprofile" />
          <h2 data-scroll data-scroll-speed="-.5" className="aboutme_title">{language.pages.aboutme.main.education_header}</h2>
          <h3 data-scroll data-scroll-speed="-.5" className="aboutme_text">{language.pages.aboutme.main.education_text}</h3>
          <AnimatedArrow data-scroll data-scroll-speed="-.5" text={language.pages.aboutme.main.see_education} justify="flex-start" textSize="28px" top="auto" bottom="0px" link="/aboutme/education" />
          <h3 data-scroll data-scroll-speed="-.5" className="aboutme_text">{language.pages.aboutme.main.education_course}<a href="https://easy-code.io/" target="_blank">{language.pages.aboutme.main.see_easycode}</a> {language.pages.aboutme.main.education_continue}</h3>
          <AnimatedArrow data-scroll data-scroll-speed="-.5" text={language.pages.aboutme.main.see_courses} justify="flex-start" textSize="28px" top="auto" bottom="0px" link="/aboutme/courses" />
          <h2 data-scroll data-scroll-speed="-.5" className="aboutme_title">{language.pages.aboutme.main.experience_header}</h2>
          <h3 data-scroll data-scroll-speed="-.5" className="aboutme_text">{language.pages.aboutme.main.experience_text}</h3>
          <AnimatedArrow data-scroll data-scroll-speed="-.5" text={language.pages.aboutme.main.see_experience_web} justify="flex-start" textSize="28px" top="auto" bottom="0px" link="/aboutme/front-end-development" />
          <AnimatedArrow data-scroll data-scroll-speed="-.5" text={language.pages.aboutme.main.see_experience_plc} justify="flex-start" textSize="28px" top="auto" bottom="0px" link="/aboutme/plc-carrier" />
          <h2 data-scroll data-scroll-speed="-.5" className="aboutme_title">{language.pages.aboutme.main.contact}</h2>
          <h3 data-scroll data-scroll-speed="-.5" className="aboutme_text">{language.pages.aboutme.main.contact_text}</h3>
          <AnimatedArrow data-scroll data-scroll-speed="-.5" text={language.pages.aboutme.main.see_contact} justify="flex-start" textSize="28px" top="auto" bottom="0px" link="/contact" />
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default AboutPage;