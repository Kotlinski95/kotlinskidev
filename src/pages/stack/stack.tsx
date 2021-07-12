import { setPage } from '../../reducers/state'
import { useDispatch } from 'react-redux'
import {useEffect} from 'react'
import Breadcrumbs from '../../components/breadcrumbs'
import Footer from '../../components/footer'
import PageTransitioning from '../../components/pageTransitioning/index'
import FaceLeft from '../../assets/stack/faceLeft.png'
import FaceRight from '../../assets/stack/faceRight.png'
import { Link } from 'react-router-dom';
import Button from '../../components/button'

const StackPage = (props) => {
  const dispatch = useDispatch();
  dispatch(setPage("Stack"));
  const { HandleLocomotiveScroll, HandleMouseoverEffects, title } = props;
  HandleLocomotiveScroll();
  HandleMouseoverEffects();
  useEffect(() => {
    document.title = title || "";
}, [title]);
  return (
    <>
      <PageTransitioning />
      <div data-scroll-section>
        <div className="main-inner" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%' }}>
          <Breadcrumbs />
          <div className="stack-main__text-left">
            <h2>{language.pages.stack.automation}</h2>
            <p>{language.pages.stack.automation_text}</p>
            <Button text={language.pages.stack.stack} link="/stack/automation-engineer" />
          </div>
          <div className="stack-main__text-right">
            <h2><span>&lt;</span> {language.pages.stack.web} <span>&gt;</span></h2>
            <p>{language.pages.stack.web_text}</p>
            <Button text={language.pages.stack.stack} link="/stack/front-end-developer" />
          </div>
          <div className="stack-main__wrapper">
            <div className="stack-main__left">
              <img src={FaceLeft} alt="FaceLeft" />
            </div>
            <div className="stack-main__right">
              <img src={FaceRight} alt="FaceRight" />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};
export default StackPage;