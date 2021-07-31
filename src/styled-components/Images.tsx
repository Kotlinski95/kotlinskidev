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
            -webkit-transition: -webkit-transform 1.2s cubic-bezier(0.14, 0.99, 0.43, 1.01);
            transition: -webkit-transform 1.2s cubic-bezier(0.14, 0.99, 0.43, 1.01);
            -o-transition: transform 1.2s cubic-bezier(0.14, 0.99, 0.43, 1.01);
            transition: transform 1.2s cubic-bezier(0.14, 0.99, 0.43, 1.01);
            transition: transform 1.2s cubic-bezier(0.14, 0.99, 0.43, 1.01), -webkit-transform 1.2s cubic-bezier(0.14, 0.99, 0.43, 1.01);
            height: 80vw;}
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
    -webkit-transform: translateX(-100%);
        -ms-transform: translateX(-100%);
            transform: translateX(-100%);
    overflow: hidden;
    /* opacity: 0; */
    -webkit-transition: -webkit-transform 1s .2s cubic-bezier(.87,.03,.12,1);
    transition: -webkit-transform 1s .2s cubic-bezier(.87,.03,.12,1);
    -o-transition: transform 1s .2s cubic-bezier(.87,.03,.12,1);
    transition: transform 1s .2s cubic-bezier(.87,.03,.12,1);
    transition: transform 1s .2s cubic-bezier(.87,.03,.12,1), -webkit-transform 1s .2s cubic-bezier(.87,.03,.12,1);
    -webkit-transform:translate3d(0,0,0);
    transform:translate3d(0,0,0); 
`;

export const RevealImage = (props) => {
    return (
        <InView triggerOnce threshold={0}>
            {({ inView, ref, entry }) => (
                <RevealImageDiv {...props}
                    ref={ref}
                    style={{
                        transform: inView ? 'translateX(0%)' : 'translateX(-100%)',
                        // opacity: inView ? '1' : '0',
                    }}
                />
            )}
        </InView>
    )
}

export const RevealDiv: any = styled.div`
    background-color: transparent;
    -webkit-transform: translateX(-100%);
        -ms-transform: translateX(-100%);
            transform: translateX(-100%);
    overflow: hidden;
    -webkit-transition: -webkit-transform 1s .2s cubic-bezier(.87,.03,.12,1);
    transition: -webkit-transform 1s .2s cubic-bezier(.87,.03,.12,1);
    -o-transition: transform 1s .2s cubic-bezier(.87,.03,.12,1);
    transition: transform 1s .2s cubic-bezier(.87,.03,.12,1);
    transition: transform 1s .2s cubic-bezier(.87,.03,.12,1), -webkit-transform 1s .2s cubic-bezier(.87,.03,.12,1);
`;
interface ImageProps {
    projectscontent: any;
}
const ImageStyled: any = styled.img<ImageProps>`
   width: 100%;
    -webkit-transform: translateX(100%) scale(1.4);
        -ms-transform: translateX(100%) scale(1.4);
            transform: translateX(100%) scale(1.4);
    -webkit-transform-origin: left;
        -ms-transform-origin: left;
            transform-origin: left;
    -webkit-transition: -webkit-transform 1s .2s cubic-bezier(.87,.03,.12,1);
    transition: -webkit-transform 1s .2s cubic-bezier(.87,.03,.12,1);
    -o-transition: transform 1s .2s cubic-bezier(.87,.03,.12,1);
    transition: transform 1s .2s cubic-bezier(.87,.03,.12,1);
    transition: transform 1s .2s cubic-bezier(.87,.03,.12,1), -webkit-transform 1s .2s cubic-bezier(.87,.03,.12,1);

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