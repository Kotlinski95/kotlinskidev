import './index.scss'
import AnimatedArrow from '../../animatedArrow'
import { TextRevealVertical, TextRevealHorizontal } from '../../contentReveal'

const AboutComponent = () => {
  return (
    <div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%', maxWidth: '100vw', position: 'relative' }}>
        <div className="hero-about-wrapper">
          <TextRevealVertical><h2 className="hero-about_hello">{language.pages.home.about.header}</h2></TextRevealVertical>
          <TextRevealHorizontal><h3 className="hero-about_introduce">{language.pages.home.about.text}</h3></TextRevealHorizontal>
          <TextRevealHorizontal><AnimatedArrow text={language.pages.home.about.seemore} justify="flex-start" textSize="28px" top="auto" bottom="0px" link="/aboutme" /></TextRevealHorizontal>
        </div>
      </div>
    </div>
  )
};

export default AboutComponent;
