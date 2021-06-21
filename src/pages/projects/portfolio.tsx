import TypedText from '../../components/typedText'
import { setPage } from '../../reducers/state'
import { useDispatch } from 'react-redux'
import Breadcrumbs from '../../components/breadcrumbs'
import Footer from '../../components/footer'
import PageTransitioning from '../../components/pageTransitioning/index'

import {
  ProjectsInfoContainer,
  ProjectImageContainer,
  HeadingDesc
} from "../../styled-components";



const PortfolioPage = (props) => {
  const dispatch = useDispatch();
  dispatch(setPage("projects/portfolio"));
  const { HandleLocomotiveScroll, HandleMouseoverEffects } = props;
  HandleLocomotiveScroll();
  HandleMouseoverEffects();


  
  return (
    <>
      <PageTransitioning />
      <div data-scroll-section>
        <div className="main-inner" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%' }}>
          <Breadcrumbs />
          <h2 className="projects-hello">{language.pages.projects.p1_portfolio.header}</h2>
          <ProjectsInfoContainer>
            {/* <HeadingDesc small>{shortDescription}</HeadingDesc>
            <HeadingDesc small>{date}</HeadingDesc> */}
          </ProjectsInfoContainer>
          <ProjectImageContainer>
            {/* <ImageWrapper projectmain>
              <RevealImage data-scroll>
                <Image src={mobileThumb} srcSet={`${mobileThumb} 300w, ${desktopThumb} 768w`} alt={alt} />
              </RevealImage>
            </ImageWrapper>
            <ProjectsInfoContainer projectIcons>
              <BaseLink target="_BLANK" href={github} rel="noreferrer" className="cursor_hover" project="true">
                <Github />
              </BaseLink>
              <BaseLink target="_BLANK" href={live} rel="noreferrer" className="cursor_hover" project="true">
                <Eye />
              </BaseLink>
            </ProjectsInfoContainer> */}
          </ProjectImageContainer>
        </div>
        <Footer />
      </div>
    </>
  );
};
export default PortfolioPage;