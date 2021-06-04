import HomePage from '../src/pages/home'
import Nav from '../src/components/nav'
import Footer from '../src/components/footer'
import RouteChangeTracker from '../src/components/routeChangeTracker'
import AboutPage from './pages/about/about'
import NotFoundPage from './pages/not_found'
import ContactPage from './pages/contact'
import MyProfilePage from './pages/myprofile/myprofile'
import MyProfileContactPage from './pages/myprofile/profileContact'
import MyProfileEducationPage from './pages/myprofile/profileEducation'
import MyProfileHobbyPage from './pages/myprofile/profileHobby'
import MyProfileOverviewPage from './pages/myprofile/profileOverview'
import MyProfileSpareTimePage from './pages/myprofile/profileSpareTime'
import MyProfileWorkPage from './pages/myprofile/profileWork'
import StackPage from './pages/stack/stack'
import ProjectsPage from './pages/projects/projects'
import PortfolioPage from './pages/projects/portfolio'
import QuizPage from './pages/projects/quiz'
import ChessPage from './pages/projects/chess'
import EstatePage from './pages/projects/estate'
import PrivacyPage from '../src/pages/privacy'
import CookiesPage from '../src/pages/cookies'
import PlcCarrierPage from './pages/about/plc_carrier'
import FrontEndDevelopmentPage from './pages/about/front_end_development'
import CoursesPage from './pages/about/courses'
import EducationPage from './pages/about/education'
import FrontEndDeveloperPage from './pages/stack/front_end_developer'
import AutomationEngineerPage from './pages/stack/automation_engineer'
import ServicesPage from './pages/services/services'
import PlcProgrammingPage from './pages/services/plc_programming'
import WebDevelopmentPage from './pages/services/web_development'
import ShopifyDevelopmentPage from './pages/services/shopify_development'

import {
  Switch,
  Route,
} from 'react-router-dom';
import { Language } from './language'
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, ThemeType } from './theme/index';
import { GlobalStyles } from './theme/global';
import { selectedTheme } from './reducers/state';
import { useSelector } from 'react-redux';
import ReactPixel from 'react-facebook-pixel';
import { Scrollbars } from 'react-custom-scrollbars-2';
import React, { useEffect } from 'react'
import locomotiveScroll from "locomotive-scroll";


declare global {
  var _theme: ThemeType;
}

function App() {
  const advancedMatching: any = { em: 'kotlinski95@gmail.com' }; // optional, more info: https://developers.facebook.com/docs/facebook-pixel/advanced/advanced-matching
  const options = {
    autoConfig: true, // set pixel's autoConfig. More info: https://developers.facebook.com/docs/facebook-pixel/advanced/
    debug: false, // enable logs
  };
  ReactPixel.init('1133312470518945', advancedMatching, options);

  ReactPixel.pageView();
  Language();
  const actualTheme = useSelector(selectedTheme);
  switch (actualTheme) {
    case "Light":
      window._theme = lightTheme;
      break;
    case "Dark":
      window._theme = darkTheme;
      break;
    default:
      window._theme = darkTheme;
      break;
  }

  const scrollRef: any = React.createRef();
  const HandleLocomotiveScroll = () => {
    useEffect(() => {
      const scroll = new locomotiveScroll({
        el: scrollRef.current,
        smooth: true
      });
      return () => {
        scroll.destroy();
      }
    }, []);
  }

  const routingProps = {
    HandleLocomotiveScroll
  }

  return (
    <ThemeProvider theme={window._theme}>
      <GlobalStyles />
      <div className="App" data-scroll-container ref={scrollRef}>
        <RouteChangeTracker />
        <Nav />
        <div className="main" >
          <Switch>
            <Route exact path="/">
              <HomePage {...routingProps} />
            </Route>
            <Route exact path="/aboutme">
              <AboutPage {...routingProps} />
            </Route>
            <Route exact path="/contact">
              <ContactPage {...routingProps} />
            </Route>
            <Route exact path="/myprofile">
              <MyProfilePage {...routingProps} />
            </Route>
            <Route exact path="/myprofile/contact">
              <MyProfileContactPage {...routingProps} />
            </Route>
            <Route exact path="/myprofile/education">
              <MyProfileEducationPage {...routingProps} />
            </Route>
            <Route exact path="/myprofile/hobby">
              <MyProfileHobbyPage {...routingProps} />
            </Route>
            <Route exact path="/myprofile/overview">
              <MyProfileOverviewPage {...routingProps} />
            </Route>
            <Route exact path="/myprofile/spare-time">
              <MyProfileSpareTimePage {...routingProps} />
            </Route>
            <Route exact path="/myprofile/work">
              <MyProfileWorkPage {...routingProps} />
            </Route>
            <Route exact path="/stack">
              <StackPage {...routingProps} />
            </Route>
            <Route exact path="/projects">
              <ProjectsPage {...routingProps} />
            </Route>
            <Route exact path="/projects/portfolio">
              <PortfolioPage {...routingProps} />
            </Route>
            <Route exact path="/projects/star-wars-quiz">
              <QuizPage {...routingProps} />
            </Route>
            <Route exact path="/projects/coders-chess">
              <ChessPage {...routingProps} />
            </Route>
            <Route exact path="/projects/real-estate">
              <EstatePage {...routingProps} />
            </Route>
            <Route exact path="/privacy">
              <PrivacyPage {...routingProps} />
            </Route>
            <Route exact path="/cookies">
              <CookiesPage {...routingProps} />
            </Route>
            <Route exact path="/aboutme/plc-carrier">
              <PlcCarrierPage {...routingProps} />
            </Route>
            <Route exact path="/aboutme/front-end-development">
              <FrontEndDevelopmentPage {...routingProps} />
            </Route>
            <Route exact path="/aboutme/courses">
              <CoursesPage {...routingProps} />
            </Route>
            <Route exact path="/aboutme/education">
              <EducationPage {...routingProps} />
            </Route>
            <Route exact path="/stack/front-end-developer">
              <FrontEndDeveloperPage {...routingProps} />
            </Route>
            <Route exact path="/stack/automation-engineer">
              <AutomationEngineerPage {...routingProps} />
            </Route>
            <Route exact path="/services">
              <ServicesPage {...routingProps} />
            </Route>
            <Route exact path="/services/PLC">
              <PlcProgrammingPage {...routingProps} />
            </Route>
            <Route exact path="/services/shopify">
              <ShopifyDevelopmentPage {...routingProps} />
            </Route>
            <Route exact path="/services/web-development">
              <WebDevelopmentPage {...routingProps} />
            </Route>
            <Route>
              <NotFoundPage {...routingProps} />
            </Route>
          </Switch>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
