import { useState, useEffect } from 'react';
import ScrollDown from '../../scrolldown';
import './index.scss';
import SvgHeroBackgroundLeft from '../../svgHeroBackgroundLeft'
import SvgHeroBackgroundRight from '../../svgHeroBackgroundRight'
import SvgHeroBackground from '../../svgHero'

const WelcomeComponent = (props) => {
    const [show, setShow] = useState(false);
    const [showScroll, setShowScroll] = useState("none");
    const { language } = props;
    useEffect(() => {
        setTimeout(() => {
            setShow(true)
        }, 2000)
        setTimeout(() => {
            setShowScroll("initial")
        }, 3000)
    }, [show])
    return (
        <div>
            <SvgHeroBackground/>
            <SvgHeroBackgroundLeft/>
            <SvgHeroBackgroundRight/>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%', position: 'relative' }}>
                <div className="welcome-wrapper">
                    <div className="introduce-text cursor_hover">
                    </div>
                </div>
                <ScrollDown bottom="80px" top="auto" bottomText="30px" topText="auto" display={showScroll} text={language.pages.home.welcome.scroll} />
            </div>
        </div>
    );
};

export default WelcomeComponent;