import HomePage from '../src/pages/home'
import Nav from '../src/components/nav'
import Footer from '../src/components/footer'
import AboutPage from './pages/about/about'
import ContactPage from './pages/contact'
import StackPage from './pages/stack/stack'
import ProjectsPage from '../src/pages/projects'
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

declare global {
  var _theme: ThemeType;
}

function App() {
  Language();
  const actualTheme = useSelector(selectedTheme);
  console.log("ACTUAL THEME: ", actualTheme);
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
  return (
    <ThemeProvider theme={window._theme}>
      <GlobalStyles />
      <div className="App">
        <Nav />
        <div className="main">
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route exact path="/aboutme">
              <AboutPage />
            </Route>
            <Route exact path="/contact">
              <ContactPage />
            </Route>
            <Route exact path="/stack">
              <StackPage />
            </Route>
            <Route exact path="/projects">
              <ProjectsPage />
            </Route>
            <Route exact path="/aboutme/plc-carrier">
              <PlcCarrierPage />
            </Route>
            <Route exact path="/aboutme/front-end-development">
              <FrontEndDevelopmentPage />
            </Route>
            <Route exact path="/aboutme/courses">
              <CoursesPage />
            </Route>
            <Route exact path="/aboutme/education">
              <EducationPage />
            </Route>
            <Route exact path="/stack/front-end-developer">
              <FrontEndDeveloperPage />
            </Route>
            <Route exact path="/stack/automation-engineer">
              <AutomationEngineerPage />
            </Route>
            <Route exact path="/services">
              <ServicesPage />
            </Route>
            <Route exact path="/services/PLC">
              <PlcProgrammingPage />
            </Route>
            <Route exact path="/services/shopify">
              <ShopifyDevelopmentPage />
            </Route>
            <Route exact path="/services/web-development">
              <WebDevelopmentPage />
            </Route>
          </Switch>
        </div>
        <Footer/>
      </div>
    </ThemeProvider>
  );
}

export default App;
