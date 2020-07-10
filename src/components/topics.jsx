import React from 'react';
import {
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";

export default function Topics() {
  let match = useRouteMatch();
  console.log('match:', match);
  return (
    <div>
      <h1 className='text-center col-12'>Topics</h1>
      <ul>
        <li>
          <Link to={`${match.url}/components`}> Components </Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}> Props VS State </Link>
        </li>
      </ul>
      <Switch>
        <Route path={`${match.path}/:topicId`}>
          <Topic />
        </ Route>
        <Route>
          <h3>Please select a topic.</h3>
        </Route>
      </Switch>
    </div>
  )
}