import './index.scss'
import AnimatedArrow from '../../animatedArrow'
const AboutComponent = () => {
    return (
      <div className="hero-about-wrapper">
        <h1 className="hero-about_hello">{language.pages.home.about.header}</h1>
        <h3 className="hero-about_introduce">{language.pages.home.about.text}</h3>
        <AnimatedArrow text={language.pages.home.about.seemore} justify="flex-start" textSize="28px" top="auto" bottom="0px" link="/aboutme"/>
      </div>
    )
  };

export default AboutComponent;
