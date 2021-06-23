import { setPage } from '../../reducers/state'
import { useDispatch } from 'react-redux'
import { useEffect } from "react";
import { useLocation } from "react-router";
import Breadcrumbs from '../../components/breadcrumbs'
import Footer from '../../components/footer'
import PageTransitioning from '../../components/pageTransitioning/index'

import {
  SectionContainer,
  SectionContainerFluid,
  SectionContainerInner,
  ProjectsInfoContainer,
  ProjectImageContainer,
  HeadingDesc,
  Heading2,
  ImageWrapper,
  RevealImage,
  Image,
  BaseLink
} from "../../styled-components";

import {TextRevealVertical} from '../../components/contentReveal'

import {
  Eye,
  Github
} from '@styled-icons/bootstrap';

import { projects } from "../../settings";

const PortfolioPage = (props) => {

  const { HandleMouseoverEffects, HandleLocomotiveScroll, title } = props;
  const location = useLocation();

  const project = projects.find(({ path }) => path === location.pathname);

  const {
    name,
    shortDescription,
    photos: {
      alt,
      thumb: {
        desktop: desktopThumb,
        mobile: mobileThumb
      },
      overview: {
        desktop: desktopOverview,
        mobile: mobileOverview
      },
      rwd: {
        desktop: desktopRwd,
        mobile: mobileRwd
      }
    },
    links: {
      live,
      github
    },
    date,
    text,
    stack
  } = project;

  useEffect(() => {
    document.title = title || "";
  }, [title]);

  const dispatch = useDispatch();
  dispatch(setPage("projects/portfolio"));
  HandleLocomotiveScroll();
  HandleMouseoverEffects();



  return (
    <>
      <PageTransitioning />
      <div data-scroll-section>
        <div className="main-inner" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%' }}>
          <Breadcrumbs />
          <SectionContainer project>
          <SectionContainerFluid>
                        <Heading2 project={true}>
                            <TextRevealVertical data-scroll>
                                {name}
                            </TextRevealVertical>
                        </Heading2>
                    </SectionContainerFluid>
          <SectionContainerInner>
            <ProjectsInfoContainer>
              <HeadingDesc small>{shortDescription}</HeadingDesc>
              <HeadingDesc small>{date}</HeadingDesc>
            </ProjectsInfoContainer>
            <ProjectImageContainer>
              <ImageWrapper projectmain>
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
              </ProjectsInfoContainer>
            </ProjectImageContainer>
          </SectionContainerInner>
          </SectionContainer>
        </div>
        <Footer />
      </div>
    </>
  );
};
export default PortfolioPage;