import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import NavBar from './NavBar';
import FeedPage from './FeedPage';
import ProfilePage from './ProfilePage';
import AddPhoto from './AddPhoto';
import LoginPage from './LoginPage';

const App = ({ user }) => {
  if (!user) {
    return (<LoginPage />);
  }

  return (
    <Router>
      <Fragment>
        <NavBar />
        <Switch>
          <Route exact path="/" component={FeedPage} />
          <Route exact path="/profile" component={ProfilePage} />
        </Switch>
        <AddPhoto />
      </Fragment>
    </Router>
  );
};

App.propTypes = {
  user: PropTypes.object,
};

export default App;
