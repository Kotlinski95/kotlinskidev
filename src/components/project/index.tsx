import './index.scss'
import { useLocation } from "react-router";

import {
    SectionContainer,
    SectionContainerFluid,
    SectionContainerInner,
    ProjectsInfoContainer,
    ProjectImageContainer,
    ProjectList,
    ProjectItem,
    HeadingDesc,
    Heading2,
    Heading3,
    ImageWrapper,
    RevealImage,
    Image,
    BaseLink,
    MainLink,
    Paragraph
} from "../../styled-components";

import { TextRevealVertical, TextRevealHorizontal } from '../../components/contentReveal'

import {
    Eye,
    Github
} from '@styled-icons/bootstrap';

import ProjectsComponent from "../../settings/projects";

const Project: any = () => {
    const projects = ProjectsComponent();
    const location = useLocation();
    const project: any = projects.find(({ path }) => path === location.pathname);
    const currentSite = (projects.indexOf(project)) + 1;
    const nextSite = currentSite <= projects.length - 1 ? currentSite : 0;

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

    return (
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
                <ProjectList>
                    {stack.map((stack, index) => {
                        return (
                            <ProjectItem project="true" key={index}>
                                {stack}
                            </ProjectItem>
                        )
                    })}
                </ProjectList>
                {text.map((text, index) => {
                    return (
                        <TextRevealHorizontal data-scroll key={index}>
                            <Paragraph project="true" key={index}>
                                {text}
                            </Paragraph>
                        </TextRevealHorizontal>
                    )
                })}
            </SectionContainerInner>
            <SectionContainerFluid>
                <ImageWrapper projectoverview>
                    <RevealImage data-scroll>
                        <Image className="cursor_hover" src={mobileOverview} srcSet={`${mobileOverview} 300w, ${desktopOverview} 768w`} alt={alt} />
                    </RevealImage>
                </ImageWrapper>
                <ImageWrapper projectrwd>
                    <RevealImage data-scroll>
                        <Image className="cursor_hover" src={mobileRwd} srcSet={`${mobileRwd} 300w, ${desktopRwd} 768w`} alt={alt} />
                    </RevealImage>
                </ImageWrapper >
            </SectionContainerFluid>
            <SectionContainerFluid nextProject="true">
                <Heading3 project>
                    <TextRevealHorizontal data-scroll>
                        Następny projekt
                    </TextRevealHorizontal>
                </Heading3>
                <MainLink className="cursor_hover" to={projects[nextSite].path} project="true" main="true">
                    <TextRevealHorizontal data-scroll>
                        {projects[nextSite].name}
                    </TextRevealHorizontal>
                </MainLink>
            </SectionContainerFluid>
        </SectionContainer>
    )
}

export default Project;