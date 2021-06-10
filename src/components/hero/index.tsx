import './index.scss'
import WelcomeComponent from './welcome/index';
import CategoriesComponent from './categories/index';
import AboutComponent from './about/index';
import ContactComponent from './contact/index';
import StackFrontEnd from '../stackFrontEnd';
import Projects from '../projects';

const Hero = (props) => {
    const language = props.language;
      return (
        <div>
             <WelcomeComponent language={language} />
            <AboutComponent/>
            <StackFrontEnd/>
            <Projects/>
            <CategoriesComponent />
            <ContactComponent />

        </div>
      );
};

export {Hero};
