import './index.scss'
import ReactPageScroller from "react-page-scroller";
import {useState} from 'react';
import WelcomeComponent from './welcome/index';
import CategoriesComponent from './categories/index';
import AboutComponent from './about/index'

const HeroDesktop = () => {
    const [currentPage, setCurrectPage] = useState(0);
    const handlePageChange = number => {
        setCurrectPage(number);
      };
      return (
        <div className="hero-desktop">
            <ReactPageScroller
                containerHeight="calc(100vh - 187px)"
                containerWidth="100vw"
                animationTimer={2000}
                pageOnChange={handlePageChange}
                customPageNumber={currentPage}>
            <WelcomeComponent />
            <AboutComponent/>
            <CategoriesComponent />
            </ReactPageScroller>
        </div>
      );
};

const HeroMobile = () => {
      return (
        <div className="hero-mobile">
            <WelcomeComponent />
            <CategoriesComponent />
        </div>
      );
};

export {HeroDesktop, HeroMobile};
