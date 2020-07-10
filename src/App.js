import React from 'react';
import {
  BrowserRouter as Router,
  // Switch,
  // Route,
  Link,
  // useRouteMatch,
  // useParams
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div className="container d-flex justify-content-center">
        <nav className="my-4">
          <ul className="row">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">About</Link>
            </li>
            <li>
              <Link to="/">Users</Link>
            </li>
          </ul>
        </nav>
        {/* <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch> */}
      </div>

    </Router>
  )
}
