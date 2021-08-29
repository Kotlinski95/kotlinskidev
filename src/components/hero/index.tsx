import './index.scss'
import React, { Suspense} from 'react'
import WelcomeComponent from './welcome/index';
import Loader from '../loader';
import HorizontalSection from '../horizontalSection'
const CategoriesComponent = React.lazy(() => import('./categories/index'));
const AboutComponent = React.lazy(() => import('./about/index'));
const ContactComponent = React.lazy(() => import('./contact/index'));
const StackFrontEnd = React.lazy(() => import('../stackFrontEnd'));
const Projects = React.lazy(() => import('../projects'));


const Hero = (props) => {
    const language = props.language;
      return (
        <div style={{ maxWidth: '100vw'}}>
          <WelcomeComponent language={language} />
          <Suspense fallback={<Loader/>}>
            <AboutComponent/>
          </Suspense>
          <Suspense fallback={<Loader/>}>
            <StackFrontEnd />
          </Suspense>
          <Suspense fallback={<Loader/>}>
            <Projects />
          </Suspense>
          <Suspense fallback={<Loader/>}>
            <CategoriesComponent />
          </Suspense>
          <Suspense fallback={<Loader/>}>
            <ContactComponent />
          </Suspense>
          <HorizontalSection />

        </div>
      );
};

export {Hero};
