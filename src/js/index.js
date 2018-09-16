import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import '../styles/index.styl';

// import { auth } from './rebase';

import App from './App';

ReactDOM.render(<App />, document.getElementById('app'));

// const renderApp = (user) => {
//   ReactDOM.render(<App user={user} />, document.getElementById('app'));
// };

// const handleAuthStateChanged = (user) => {
//   if (user) {
//     console.log('Authenticated with', user.displayName);
//   }

//   renderApp(user);
// };

// auth.onAuthStateChanged(handleAuthStateChanged);
