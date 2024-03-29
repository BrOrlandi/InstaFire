import React, { Component } from 'react';
import {
  Button,
  Menu,
  Icon,
  Image,
} from 'semantic-ui-react';

import firebase from './firebase';

import defaultUserImage from '../assets/default-user-image.png';

class NavBar extends Component {
  onClickLogout = () => {
    firebase.auth().signOut();
  }

  render() {
    const { displayName, photoURL } = firebase.auth().currentUser;

    return (
      <Menu inverted size="large" className="navbar" stackable>
        <Menu.Item header>
          <Icon name="camera retro" size="big" />
            InstaFire
        </Menu.Item>

        <Menu.Menu position="right">
          <Menu.Item>
            <Image src={photoURL || defaultUserImage} avatar />
            <span>{displayName}</span>
          </Menu.Item>
          <Menu.Item>
            <Button inverted onClick={this.onClickLogout}>Sair</Button>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    );
  }
}

export default NavBar;
