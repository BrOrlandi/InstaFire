import React, { Fragment } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import NavBar from './NavBar';
import FeedPage from './FeedPage';
import ProfilePage from './ProfilePage';
import AddPhotoButton from './AddPhotoButton';

const App = () => (
  <Router>
    <Fragment>
      <NavBar />
      <Switch>
        <Route exact path="/" component={FeedPage} />
        <Route exact path="/profile" component={ProfilePage} />
      </Switch>
      <AddPhotoButton />
    </Fragment>
  </Router>
);

export default App;
