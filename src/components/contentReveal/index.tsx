import styled, { } from 'styled-components';
import './index.scss'
import { InView } from 'react-intersection-observer';

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
`;

export const TextRevealVertical = (props) => {
    return (
        <InView triggerOnce threshold={0.3}>
        {({ inView, ref, entry }) => (
            <TextRevealSpan {...props}
                ref={ref}
                style={{
                    transform: inView ? 'translateY(0)' : 'translateY(60%)',
                    opacity: inView ? 1 : 0,
                }}
            />
        )}
        </InView>
    )
}

export const ComponentRevealShow = (props) => {
    return (
        <InView triggerOnce threshold={0}>
        {({ inView, ref, entry }) => (
            <div className="component-reveal__wrapper" style={{ width: props.width }}>
                <ComponentRevealOpacity {...props}
                    ref={ref}
                    style={{
                        opacity: inView ? 1 : 0,
                    }}
                />
            </div>
        )}
        </InView>
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

const TextRevealHorizontalDiv = styled.div`
    width: 100%;
    max-width: 100%;
    opacity: 0;
    transition: opacity 0.5s 0.75s, transform 1s 0.5s;

`

export const TextRevealHorizontal = (props) => {
    return (
        <InView triggerOnce threshold={0}>
        {({ inView, ref, entry }) => (
            <TextRevealHorizontalDiv {...props}
                ref={ref}
                style={{
                    transform: inView ? 'translateX(0%)' : 'translateX(-50%)',
                    opacity: inView ? 1 : 0,
                }}
            />
        )}
        </InView>
    )
}