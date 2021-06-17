import { useState, useEffect } from 'react';
import ScrollDown from '../../scrolldown';
import './index.scss';
import { TextRevealVertical} from '../../contentReveal'

const WelcomeComponent = (props) => {
    const [show, setShow] = useState(false);
    const [showScroll, setShowScroll] = useState(false);
    const { language } = props;
    useEffect(() => {
        setTimeout(() => {
            setShow(true)
        }, 2000)
        setTimeout(() => {
            setShowScroll(true)
        }, 3000)
    }, [show])
    return (
        <div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%', position: 'relative' }}>
                <div className="welcome-wrapper" data-scroll>
                    <div className="introduce-text">
                    <TextRevealVertical delay={.2} data-scroll><h1>{language.pages.home.welcome.header}</h1></TextRevealVertical>
                    <TextRevealVertical delay={1.2} data-scroll><h2>{language.pages.home.welcome.title}</h2></TextRevealVertical>
                    </div>
                </div>
                {showScroll ? <ScrollDown bottom="35px" top="auto" bottomText="-10px" topText="auto" text={language.pages.home.welcome.scroll} /> : null}
            </div>
        </div>
    );
};

export default WelcomeComponent;