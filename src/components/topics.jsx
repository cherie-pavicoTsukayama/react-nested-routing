import React from 'react';
import {
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";
import Topic from './topic';

export default function Topics() {
  let match = useRouteMatch();
  console.log('match:', match);
  return (
    <div className="container">
      <h1 className='text-center col-12'>Topics</h1>
      <div className='row'>
        <div className="col-3">
          <div className='col custom-card'>
            <ul className='p-0 my-4'>
              <li>
                <Link to={`${match.url}/components`}> Components </Link>
              </li>
              <li>
                <Link to={`${match.url}/props-v-state`}> Props VS State </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="d-flex justify-content-center col">
          <div className="col-11 card py-4">
            <Switch>
              <Route path={`${match.path}/:topicId`}>
                <Topic />
              </ Route>
              <Route>
                <h3>Please select a topic.</h3>
              </Route>
            </Switch>
          </div>
        </div>

      </div>

    </div>
  )
}
