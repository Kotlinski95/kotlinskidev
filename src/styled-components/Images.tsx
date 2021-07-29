import { AnyARecord } from 'dns';
import styled, { css } from 'styled-components';
import { Theme } from '../settings';
import { InView } from 'react-intersection-observer';
const {
    breakpoints
} = Theme;

interface ImageWrapperProps {
    projectoverview: any;
    projectrwd: any;
    projectscontent: any;
    projectmain: any;
}
export const ImageWrapper: any = styled.div<ImageWrapperProps>`
    background-color: transparent;
    overflow: hidden;
    margin: 7px 0;

    ${props =>
        props.projectoverview &&
        css`
            max-height: 1200px;
            margin-top: 30px;
        `}

        ${props =>
        props.projectrwd &&
        css`
            max-height: 100%;
            margin: 30px auto 25px;
        `}

    @media ${breakpoints.md} {
        ${props =>
        props.projectscontent &&
        css`
            transition: transform 1.2s cubic-bezier(0.14, 0.99, 0.43, 1.01);
            height: 80vw;
        `}

        ${props =>
        props.projectmain &&
        css`
            height: 72vw;
            max-height: 920px;
        `}

        ${props =>
        props.projectoverview &&
        css`
            height: 59vw;
            max-height: 1200px;
            margin-top: 80px;
        `}

        ${props =>
        props.projectrwd &&
        css`
            min-height: 52vw;
            height: 100%;
            max-height: 100%;
            width: 80%;
            margin: 50px auto 0;
        `}
    }
    
    @media ${breakpoints.lg} {
        ${props =>
        props.projectscontent &&
        css`
            height: 43vw;
            max-height: 850px;
        `}
    }
`;

export const RevealImageDiv: any = styled.div`
    background-color: transparent;
    transform: translateX(-100%);
    overflow: hidden;
    opacity: 0;
    transition: transform 1s .2s cubic-bezier(.87,.03,.12,1);
`;

export const RevealImage = (props) => {
    return (
        <InView triggerOnce threshold={0}>
        {({ inView, ref, entry }) => (
            <RevealImageDiv {...props}
                ref={ref}
                style={{
                    transform: inView ? 'translateX(0%)' : 'translateX(-100%)',
                    opacity: inView ? '1' : '0',
                }}
            />
        )}
        </InView>
    )
}

export const RevealDiv: any = styled.div`
    background-color: transparent;
    transform: translateX(-100%);
    overflow: hidden;
    transition: transform 1s .2s cubic-bezier(.87,.03,.12,1);
    &.is-inview {
        transform: translateX(0);

        div {
            transform: translateX(0) scale(1);
        }
    }
`;
interface ImageProps {
    projectscontent: any;
}
const ImageStyled: any = styled.img<ImageProps>`
    width: 100%;
    transform: translateX(100%) scale(1.4);
    transform-origin: left;
    transition: transform 1s .2s cubic-bezier(.87,.03,.12,1);

    @media ${breakpoints.lg} {
        ${props =>
        props.projectscontent &&
        css`
            height: 100%;
            object-fit: contain;
    `}
    }
`

export const Image = (props) => {
    return (
        <InView triggerOnce threshold={0}>
        {({ inView, ref, entry }) => (
            <ImageStyled {...props}
                ref={ref}
                style={{
                    transform: inView ? 'translateX(0%)' : 'translateX(-100%)',
                }}
            />
        )}
        </InView>
    )
}