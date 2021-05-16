import './index.scss'
import AnimatedArrow from '../../animatedArrow'
const AboutComponent = () => {
    return (
      <div className="hero-about-wrapper">
        <h1 className="hero-about_hello">Cześć</h1>
        <h3 className="hero-about_introduce">Nazywam się Adrian Kotlinski, mieszkam w Katowicach. Swoją przygodę z FrontEndem rozpocząłem pod koniec 2020 roku. Od tamtej pory na naukę poświęcam każdą wolną chwilę i sprawia mi ona ogromną przyjemność. Ciągle dążę do poszerzania swoich kompetencji poprzez poznawanie najnowszych rozwiązań i technologii.</h3>
        <AnimatedArrow text="Explore more" justify="flex-start" textSize="28px" top="auto" bottom="-100px" link="/aboutme"/>
      </div>
    )
  };

export default AboutComponent;
