import './index.scss'
import AnimatedArrow from '../../animatedArrow'
import { TextRevealVertical, TextRevealHorizontal } from '../../contentReveal'

const AboutComponent = () => {
  return (
    <div data-scroll-section>
      <div className="hero-about-wrapper" data-scroll>
        <h1 data-scroll className="hero-about_hello">{language.pages.home.about.header}</h1>
        <h3 data-scroll className="hero-about_introduce">{language.pages.home.about.text}</h3>
        <AnimatedArrow text={language.pages.home.about.seemore} justify="flex-start" textSize="28px" top="auto" bottom="0px" link="/aboutme" />
      </div>
    </div>
  )
};

export default AboutComponent;
