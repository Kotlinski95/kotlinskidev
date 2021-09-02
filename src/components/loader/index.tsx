import './index.scss'
import styled, { css, keyframes } from 'styled-components';
import { nanoid } from 'nanoid'

const wave = keyframes`
  50%,
  75% {
    transform: scale(2.5);
  }

  80%,
  100% {
    opacity: 0;
  }
`

const AnimatedDotsContainer = styled.div`
    display: flex;
`

interface AnimatedDotProps {
    delay: any;
    color: any;
}

const AnimatedDot: any = styled.div<AnimatedDotProps>`
    position: relative;
    width: 30px;
    height: 30px;
    margin: 10px;
    border-radius: 50%;
    ${props =>
        props.color &&
        css`
        background-color: ${props.color};
    `}

    &::before {
      position: absolute;
      content: "";
      width: 100%;
      height: 100%;
      background: inherit;
      border-radius: inherit;
      animation: ${wave} 2s ease-out infinite;
      ${props =>
        props.delay &&
        css`
            animation-delay: ${props.delay};
        `}
    }
`

const dots = [
    {
        color: "#7ef9ff",
        delay: "0s"
    },
    {
        color: "#89cff0",
        delay: ".2s"
    },
    {
        color: "#4682b4",
        delay: ".4s"
    },
    {
        color: "#0f52ba",
        delay: ".6s"
    },
    {
        color: "#000080",
        delay: ".8s"
    }
]



const Loader = () => {
    return (
        <div className="loader_wrapper">
            <div className="holder loader">
                <div className="preloader"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
            </div>
            {/* <AnimatedDotsContainer>
                    {dots.map((dot, index) => (
                        <AnimatedDot key={nanoid(10)} color={dot.color} delay={dot.delay}>
                        </AnimatedDot>
                    ))}
            </AnimatedDotsContainer> */}
        </div>


    )
}

export default Loader;