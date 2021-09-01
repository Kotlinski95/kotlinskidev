
import Nav from '../src/components/nav';
import RouteChangeTracker from '../src/components/routeChangeTracker';
import Cookies from './components/cookiesConsent';
import LoadingScreen from './components/loadingScreen/index.jsx';
import Cursor from './components/cursor/index.jsx';
import {
  Switch,
  Route,
  useLocation
} from 'react-router-dom';
import { Language } from './language';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, ThemeType } from './theme/index';
import { GlobalStyles } from './theme/global';
import { selectedTheme } from './reducers/state';
import { useSelector } from 'react-redux';
import ReactPixel from 'react-facebook-pixel';
import React, { useEffect, useState, Suspense } from 'react';
import { useDispatch } from 'react-redux';
import { setMobile } from './reducers/state';
import { useReactPWAInstall } from "react-pwa-install";
import myLogo from "./assets/icons/logo192.png";
import TransitionModal from './components/transitionModal';
import Loader from './components/loader'
import ScrollToTop from './components/scrollToTop';

import MyProfilePage from './pages/myprofile/myprofile';
import MyProfileContactPage from './pages/myprofile/profileContact';
import MyProfileEducationPage from './pages/myprofile/profileEducation';
import MyProfileHobbyPage from './pages/myprofile/profileHobby';
import MyProfileOverviewPage from './pages/myprofile/profileOverview';
import MyProfileSpareTimePage from './pages/myprofile/profileSpareTime';
import MyProfileWorkPage from './pages/myprofile/profileWork';
const HomePage = React.lazy(() => import('../src/pages/home'));
const AboutPage = React.lazy(() => import('./pages/about/about'));
const NotFoundPage = React.lazy(() => import('./pages/not_found'));
const ContactPage = React.lazy(() => import('./pages/contact'));
const StackPage = React.lazy(() => import('./pages/stack/stack'));
const ProjectsPage = React.lazy(() => import('./pages/projects/projects'));
const PortfolioPage = React.lazy(() => import('./pages/projects/portfolio'));
const WebsitePage = React.lazy(() => import('./pages/projects/website'));
const QuizPage = React.lazy(() => import('./pages/projects/quiz'));
const ChessPage = React.lazy(() => import('./pages/projects/chess'));
const EstatePage = React.lazy(() => import('./pages/projects/estate'));
const PrivacyPage = React.lazy(() => import('../src/pages/privacy'));
const CookiesPage = React.lazy(() => import('../src/pages/cookies'));
const PlcCarrierPage = React.lazy(() => import('./pages/about/plc_carrier'));
const FrontEndDevelopmentPage = React.lazy(() => import('./pages/about/front_end_development'));
const CoursesPage = React.lazy(() => import('./pages/about/courses'));
const EducationPage = React.lazy(() => import('./pages/about/education'));
const FrontEndDeveloperPage = React.lazy(() => import('./pages/stack/front_end_developer'));
const AutomationEngineerPage = React.lazy(() => import('./pages/stack/automation_engineer'));
const ServicesPage = React.lazy(() => import('./pages/services/services'));
const PlcProgrammingPage = React.lazy(() => import('./pages/services/plc_programming'));
const WebDevelopmentPage = React.lazy(() => import('./pages/services/web_development'));
const ShopifyDevelopmentPage = React.lazy(() => import('./pages/services/shopify_development'));
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
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(true);
  const [isReady, setIsReady] = useState(false);
  const [openPWApopup, setOpenPWApopup] = useState(false);
  const location = useLocation();
  const dispatch = useDispatch();
  isMobile ? dispatch(setMobile(true)) : dispatch(setMobile(false));
  const { pwaInstall, supported, isInstalled } = useReactPWAInstall();

  React.useEffect(() => {
    if (!location.pathname.includes('myprofile')) {
      document.querySelector("body")!.scrollTo(0, 0);
    }
  }, [location])

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

  const IsHovered = (set) => {
    const menuState = _store.getState().menuState.menuOpen;
    const notificationState = _store.getState().notificationState.notificationOpen;
    (menuState === "false" && notificationState === "false") ? setIsHovered(set) : setIsHovered(false);
  }
  document.addEventListener('DOMContentLoaded', function(event) {
    console.log('DOMContentLoaded Ready:');
  });
  useEffect(() => {
    setIsReady(true);
    return () => {
      setIsReady(false);
    }
  }, [])

  const HandleMouseoverEffects = () => {
    useEffect(() => {
      window.addEventListener('resize', isMobileTest);
      if (_store.getState().animationState.cursor) {
        document.querySelectorAll(".cursor_hover").forEach(el => {
          el.addEventListener("mouseover", () => IsHovered(true));
          el.addEventListener("mouseout", () => IsHovered(false));
        });
      }
      else {
        document.querySelectorAll(".cursor_hover").forEach(el => {
          el.removeEventListener("mouseover", () => setIsHovered(true));
          el.removeEventListener("mouseout", () => setIsHovered(false));
        });
      }

      isMobileTest();
      return () => {
        window.removeEventListener('resize', isMobileTest);
        document.querySelectorAll(".cursor_hover").forEach(el => {
          el.removeEventListener("mouseover", () => setIsHovered(true));
          el.removeEventListener("mouseout", () => setIsHovered(false));
        });
      };
    }, [_store.getState().animationState.cursor]);
  };

  HandleMouseoverEffects();

  const routingProps = {
    HandleMouseoverEffects,
  }

  const isMobileTest = () => {
    const ua = navigator.userAgent;
    const test = /Android|Mobi/i.test(ua)
    setIsMobile(test);
  };

  const handleInstallPWA = () => {
    pwaInstall({
      title: "Install Kotlinskidev Web App",
      logo: myLogo,
      features: (
        <ul>
          <li>Get better experience from App using PWA!</li>
          <li>Get some functionalities in offline mode!</li>
          <li>Stay with me for longer!</li>
          <li>You can take a look at my portfolio just clicking KotlinskiDev icon :) </li>
        </ul>
      ),
      description: "This is a very good app that does a lot of useful stuff. ",
    })
      .then(() => alert("App installed successfully or instructions for install shown"))
      .catch(() => alert("User opted out from installing"));
  };

  const handleClosePWA = () => {
    setOpenPWApopup(false);
  };

  return (
    <ThemeProvider theme={window._theme}>
      <GlobalStyles />
      <div className="App">
          {
            isReady ? (
              <>
                {/* {
                  _store.getState().animationState.cursor ?
                    <Cursor isMobile={isMobile} isHovered={isHovered}/> : null
                } */}
                <RouteChangeTracker />
                <TransitionModal open={openPWApopup} handleClose={handleInstallPWA} handleClosePopup={handleClosePWA} title="KotlinskiDEV PWA Application" text="Install my application to get better experience using PWA" buttonText="Install"/>
                <Nav />
                <Suspense fallback={<Loader />}>
                <div className="main">
                  <ScrollToTop />
                  <Switch location={location} key={location.pathname}>
                    <Route exact path="/">
                      <HomePage {...routingProps} title={language.general.titles.home}/>
                    </Route>
                    <Route exact path="/aboutme">
                      <AboutPage {...routingProps} title={language.general.titles.about}/>
                    </Route>
                    <Route exact path="/contact" >
                      <ContactPage {...routingProps} title={language.general.titles.contact}/>
                    </Route>
                    <Route exact path="/myprofile">
                      <MyProfilePage {...routingProps} title={language.general.titles.myprofile}/>
                    </Route>
                    <Route exact path="/myprofile/contact">
                      <MyProfileContactPage {...routingProps} title={language.general.titles.myprofileContact}/>
                    </Route>
                    <Route exact path="/myprofile/education">
                      <MyProfileEducationPage {...routingProps} title={language.general.titles.myprofileEducation}/>
                    </Route>
                    <Route exact path="/myprofile/hobby">
                      <MyProfileHobbyPage {...routingProps} title={language.general.titles.myprofileHobby}/>
                    </Route>
                    <Route exact path="/myprofile/overview">
                      <MyProfileOverviewPage {...routingProps} title={language.general.titles.myprofileOverview}/>
                    </Route>
                    <Route exact path="/myprofile/spare-time">
                      <MyProfileSpareTimePage {...routingProps} title={language.general.titles.myprofileSpareTime}/>
                    </Route>
                    <Route exact path="/myprofile/work">
                      <MyProfileWorkPage {...routingProps} title={language.general.titles.myprofileWork}/>
                    </Route>
                    <Route exact path="/stack">
                      <StackPage {...routingProps} title={language.general.titles.stack}/>
                    </Route>
                    <Route exact path="/projects">
                      <ProjectsPage {...routingProps} title={language.general.titles.projects}/>
                    </Route>
                    <Route exact path="/projects/portfolio">
                      <PortfolioPage {...routingProps} title={language.general.titles.projectsPortfolio}/>
                    </Route>
                    <Route exact path="/projects/website">
                      <WebsitePage {...routingProps} title={language.general.titles.projectsWebsite}/>
                    </Route>
                    <Route exact path="/projects/star-wars-quiz" >
                      <QuizPage {...routingProps} title={language.general.titles.projectsQuiz}/>
                    </Route>
                    <Route exact path="/projects/coders-chess">
                      <ChessPage {...routingProps} title={language.general.titles.projectsChess}/>
                    </Route>
                    <Route exact path="/projects/real-estate">
                      <EstatePage {...routingProps} title={language.general.titles.projectsEstate}/>
                    </Route>
                    <Route exact path="/privacy">
                      <PrivacyPage {...routingProps} title={language.general.titles.privacy}/>
                    </Route>
                    <Route exact path="/cookies">
                      <CookiesPage {...routingProps} title={language.general.titles.cookies}/>
                    </Route>
                    <Route exact path="/aboutme/plc-carrier">
                      <PlcCarrierPage {...routingProps} title={language.general.titles.plcCarries}/>
                    </Route>
                    <Route exact path="/aboutme/front-end-development">
                      <FrontEndDevelopmentPage {...routingProps} title={language.general.titles.frontEndDevelopment}/>
                    </Route>
                    <Route exact path="/aboutme/courses">
                      <CoursesPage {...routingProps} title={language.general.titles.courses}/>
                    </Route>
                    <Route exact path="/aboutme/education">
                      <EducationPage {...routingProps} title={language.general.titles.education}/>
                    </Route>
                    <Route exact path="/stack/front-end-developer">
                      <FrontEndDeveloperPage {...routingProps} title={language.general.titles.stackFront}/>
                    </Route>
                    <Route exact path="/stack/automation-engineer">
                      <AutomationEngineerPage {...routingProps} title={language.general.titles.stackAutomation}/>
                    </Route>
                    <Route exact path="/services">
                      <ServicesPage {...routingProps} title={language.general.titles.services}/>
                    </Route>
                    <Route exact path="/services/PLC">
                      <PlcProgrammingPage {...routingProps} title={language.general.titles.servicesPlc}/>
                    </Route>
                    <Route exact path="/services/shopify">
                      <ShopifyDevelopmentPage {...routingProps} title={language.general.titles.servicesShopify}/>
                    </Route>
                    <Route exact path="/services/web-development">
                      <WebDevelopmentPage {...routingProps} title={language.general.titles.servicesWeb}/>
                    </Route>
                    <Route>
                      <NotFoundPage {...routingProps} title={language.general.titles.notFound}/>
                    </Route>
                  </Switch>
                </div>
                </Suspense>
              </>
            )
              : (
                <LoadingScreen />
              )

          }
      </div>
      <Cookies />
    </ThemeProvider>
  );
}

export default App;
