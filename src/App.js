import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link,
  NavLink
  // useRouteMatch,
  // useParams
} from "react-router-dom";
import Home from './components/home';
import About from './components/about';
import Topics from './components/topics';

export default function App() {
  return (
    <Router>
      <div className="container d-flex flex-wrap justify-content-center">
        <nav className="my-4 col-12 align-self-center">
          <ul className="row p-0 d-flex justify-content-center">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/topics" activeClassName="hurray">
                Topics
              </NavLink >
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route><Route path="/topics">
            <Topics />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}
