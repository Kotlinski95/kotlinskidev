import TypedText from '../../components/typedText'
import { setPage } from '../../reducers/state'
import { useDispatch } from 'react-redux'
import Breadcrumbs from '../../components/breadcrumbs'
import AnimatedArrow from '../../components/animatedArrow'
import Footer from '../../components/footer'


const CoursesPage = (props) => {
  const dispatch = useDispatch();
  dispatch(setPage("aboutme/courses"));
  const { HandleLocomotiveScroll } = props;
  HandleLocomotiveScroll();
  return (
    <div data-scroll-section>
      <div className="main-inner" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%' }} >
        <Breadcrumbs />
        <div className="aboutme-wrapper">
          <h1 data-scroll data-scroll-speed="-.5" className="aboutme_title">{language.pages.aboutme.courses.header}</h1>
          <h3 data-scroll data-scroll-speed="-.5" className="aboutme_text">{language.pages.aboutme.courses.text}</h3>
          <AnimatedArrow text={language.pages.aboutme.courses.back_to_home} justify="flex-start" textSize="28px" top="auto" bottom="0px" link="/aboutme" />
          <h2 data-scroll data-scroll-speed="-.5" className="aboutme_title">{language.pages.aboutme.courses.coders_camp.header}</h2>
          <h4 data-scroll data-scroll-speed="-.5" className="aboutme_text">{language.pages.aboutme.courses.coders_camp.text}</h4>
          <AnimatedArrow text={language.pages.aboutme.courses.coders_camp.link_label} justify="flex-start" textSize="28px" top="auto" bottom="0px" href={language.pages.aboutme.courses.coders_camp.link} />
          <h2 data-scroll data-scroll-speed="-.5" className="aboutme_title">{language.pages.aboutme.courses.easy_code.header}</h2>
          <h4 data-scroll data-scroll-speed="-.5" className="aboutme_text">{language.pages.aboutme.courses.easy_code.text}</h4>
          <AnimatedArrow text={language.pages.aboutme.courses.easy_code.link_label} justify="flex-start" textSize="28px" top="auto" bottom="0px" href={language.pages.aboutme.courses.easy_code.link} />
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default CoursesPage;