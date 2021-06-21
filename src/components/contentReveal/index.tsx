import styled, { } from 'styled-components';
import './index.scss'
import Theme from '../../settings'

const {
    breakpoints
} = Theme;

export const TextRevealSpan = styled.span`
    font-family: inherit;
    display: block;
    overflow-y: hidden;
    max-width: 100%;
    opacity: ${(props: any) => (props.transparent ? 0 : 1)};
    transform: translateY(${(props: any) =>
        typeof props.shift === 'number' ? (props.shift * 100).toString() + '%' : '100%'});
    transition: transform 2s ${(props: any) =>
        typeof props.delay === 'number' ? props.delay.toString() + 's' : '.2s'} cubic-bezier(0.12, 1, 0.2, 1), opacity 2s ${(props: any) =>
            typeof props.delay === 'number' ? (props.delay + 0.2).toString() + 's' : '.1s'} cubic-bezier(0.12, .4, 0.2, 1);
    line-height: inherit;

    &.is-inview {
        transform: translateY(0);
        opacity: 1;
    }
`;

export const TextRevealVertical = (props) => {
    return (
        <div className="text-reveal__wrapper">
            <TextRevealSpan {...props} />
        </div>
    )
}

export const ComponentRevealShow = (props) => {
    return (
        <div className="component-reveal__wrapper" style={{ width: props.width }}>
            <ComponentRevealOpacity {...props} />
        </div>
    )
}

export const ComponentRevealOpacity = styled.div`
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.5s 0.75s, transform 0.3s 0.2s;
    transition-delay: ${(props: any) => props.delay};
    filter:  ${(props: any) => props.filter};
    &.is-inview {
        opacity: 1;
    }
`

export const TextRevealHorizontal = styled.div`
    width: 100%;
    max-width: 100%;
    transform: translateX(-10%);
    opacity: 0;
    transition: opacity 0.5s 0.75s, transform 0.3s 0.2s;
    &.is-inview {
        opacity: 1;
        transform: translateX(0%);
    }
`

export const RevealImage = styled.div`
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 100%;
    max-height: 100%;
    transform: translateX(-100%);
    overflow: hidden;
    transition: all 2s;
    &.is-inview{
        transform: translateX(0);
    }
`;