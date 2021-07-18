import { AnyARecord } from 'dns';
import styled, { css } from 'styled-components';
import {Theme} from '../settings';
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

export const RevealImage: any = styled.div`
    background-color: transparent;
    transform: translateX(-100%);
    overflow: hidden;
    transition: transform 1s .2s cubic-bezier(.87,.03,.12,1);
    &.is-inview {
        transform: translateX(0);

        img {
            transform: translateX(0) scale(1);
        }
    }
`;

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
export const Image: any = styled.img<ImageProps>`
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