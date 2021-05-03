import Home from '../src/pages/home'
import Nav from '../src/components/nav'
import About from '../src/pages//about'
import Contact from '../src/pages//stack'
import Stack from '../src/pages/stack'
import Projects from '../src/pages/projects'
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
              <Home />
            </Route>
            <Route exact path="/aboutme">
              <About />
            </Route>
            <Route exact path="/contact">
              <Contact />
            </Route>
            <Route exact path="/stack">
              <Stack />
            </Route>
            <Route exact path="/projects">
              <Projects />
            </Route>
          </Switch>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
