import React, { Component } from 'react';
import { Button, Menu, Icon } from 'semantic-ui-react';

import firebase from './firebase';

class NavBar extends Component {
  onClickLogout = () => {
    firebase.auth().signOut();
  }

  render() {
    return (
      <Menu inverted size="large" className="navbar" stackable>
        <Menu.Item header>
          <Icon name="camera retro" size="big" />
            InstaFire
        </Menu.Item>

        <Menu.Menu position="right">
          <Menu.Item>
            <Button inverted onClick={this.onClickLogout}>Sair</Button>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    );
  }
}

export default NavBar;
