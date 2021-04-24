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

function App() {
  return (
    <div className="App">
       <Nav></Nav>
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
  );
}

export default App;
