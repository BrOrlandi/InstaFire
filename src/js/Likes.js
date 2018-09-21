import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'semantic-ui-react';
import firebase, { rebase } from './firebase';

class Likes extends Component {
  state = {
    likes: [],
  };

  componentDidMount() {
    const { photoKey } = this.props;
    rebase.syncState(`/photos/${photoKey}/likes`, {
      defaultValue: [],
      context: this,
      asArray: true,
      state: 'likes',
    });
  }

  onClickHeart = () => {
    const { likes } = this.state;
    const userId = firebase.auth().currentUser.uid;

    const index = likes.indexOf(userId);
    const liked = index > -1;

    if (!liked) {
      const newLikes = likes.concat(userId);
      this.setState({
        likes: newLikes,
      });
      return;
    }

    const unliked = likes.filter(like => like !== userId);

    this.setState({
      likes: unliked,
    });
  };

  render() {
    const { likes } = this.state;
    const userId = firebase.auth().currentUser.uid;
    const liked = likes.indexOf(userId) > -1;

    return (
      <div className="photo__likes">
        {!liked && <Icon name="heart outline" size="big" onClick={this.onClickHeart} />}
        {liked && <Icon name="heart" size="big" color="red" onClick={this.onClickHeart} />}
        {likes.length}
      </div>
    );
  }
}

Likes.propTypes = {
  photoKey: PropTypes.string,
};

export default Likes;
