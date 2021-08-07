import styled, { css } from 'styled-components';
import {Theme}  from '../settings';

const {
    breakpoints
} = Theme;
interface MainContainerProps{
    home: any;
}
export const MainContainer: any = styled.div<MainContainerProps>`
    background-color: transparent;
    padding-top: ${(props) => (props.home ? "0" : "50px")};
`;
interface SectionContainerProps{
    project: any;
    aboutme: any;
}
export const SectionContainer: any = styled.section<SectionContainerProps>`
    padding: ${(props) => (props.project ? "4vh 0" : "4vh 15px")};
    max-width: ${(props) => (props.project ? "1920px" : "1800px")};
    margin: 0 auto;

    ${props =>
        props.aboutme &&
        css`
        max-width: 1200px;

        @media ${breakpoints.md} {
            text-align: center;
        }

    `}

    @media ${breakpoints.xs} {
        padding: ${(props) => (props.project ? "4vh 0" : "4vh 40px")};
    }

    &#footer {
        padding-top: 0;
    }
`

export const SectionContainerInner: any = styled(SectionContainer)`
    padding: 0 15px;
    max-width: 600px;

    @media ${breakpoints.sm} {
        max-width: 1000px;
        max-width: clamp(600px, 80vw, 1000px);
    }
`
interface SectionContainerFluidProps{
    nextProject: any;
}
export const SectionContainerFluid: any = styled.section<SectionContainerFluidProps>`
    padding: 0 15px;

    ${props =>
        props.nextProject &&
        css`
        @media ${breakpoints.sm} {
            text-align: center;
        }
    `}

    @media ${breakpoints.md} {
        padding: 0;
        width: 100%;
    }
`