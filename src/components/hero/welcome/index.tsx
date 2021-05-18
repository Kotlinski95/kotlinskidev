import { zoomIn } from 'react-animations'
import styled, { keyframes } from 'styled-components';
import { useState, useEffect } from 'react';
import ScrollDown from '../../scrolldown';
import './index.scss';

const bounceAnimation = keyframes`${zoomIn}`;
const BouncyH1 = styled.h1`
  animation: 2s ${bounceAnimation};
`;
const BouncyH2 = styled.h1`
  animation: 2s ${bounceAnimation};
`;

const WelcomeComponent = (props) => {
    const language = props.language;
    const [show, setShow] = useState(false);
    const [showScroll, setShowScroll] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setShow(true)
        }, 2000)
        setTimeout(() => {
            setShowScroll(true)
        }, 4000)
    }, [show])
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%', position: 'relative' }}>
            <div className="welcome-wrapper">
                    <BouncyH1>{language.pages.home.welcome.header}</BouncyH1>
                    {show ? <BouncyH2>{language.pages.home.welcome.title}</BouncyH2> : null}
            </div>
            { showScroll ? <ScrollDown bottom="30px" top="auto" bottomText="-15px" topText="auto" text={language.pages.home.welcome.scroll}/> : null}
        </div>
    );
};

export default WelcomeComponent;