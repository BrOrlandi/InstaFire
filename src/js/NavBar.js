import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Button, Menu, Icon } from 'semantic-ui-react';

class NavBar extends Component {
  static propTypes = {
    history: PropTypes.object,
    location: PropTypes.object,
  };

  handleClickNavigate = path => () => {
    this.props.history.push(path);
  }

  render() {
    const { location } = this.props;

    const isFeedPage = '/' === location.pathname;
    return (
      <Menu inverted size="large" className="navbar" stackable>
        <Menu.Item header>
          <Icon name="camera retro" size="big" />
            InstaFire
        </Menu.Item>

        <Menu.Menu position="right">
          <Menu.Item active={isFeedPage} onClick={this.handleClickNavigate('/')}>
            <Icon name="picture" size="large" />
            Feed
          </Menu.Item>
          <Menu.Item active={!isFeedPage} onClick={this.handleClickNavigate('/profile')}>
            <Icon name="user" size="large" />
            Perfil
          </Menu.Item>

          <Menu.Item>
            <Button inverted>Sair</Button>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    );
  }
}

export default withRouter(NavBar);
