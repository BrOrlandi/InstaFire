import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Header,
  Image,
  Icon,
  Segment,
} from 'semantic-ui-react';

import CommentList from './CommentList';

class Photo extends Component {
  static propTypes = {
    userPicture: PropTypes.string,
    userName: PropTypes.string,
    imageSrc: PropTypes.string,
    description: PropTypes.string,
    timestamp: PropTypes.number,
    photoKey: PropTypes.string,
  };

  onClickHeart = () => {
    console.log('heart click');
  };

  render() {
    const {
      photoKey,
      userPicture,
      userName,
      imageSrc,
      description,
      timestamp,
    } = this.props;

    const likes = [];
    const liked = likes.indexOf('123') > -1;

    const dateString = (new Date(timestamp)).toLocaleString();

    return (
      <Segment className="photo">
        <Header as="h4" className="photo__header">
          <Image src={userPicture} avatar />
          <span className="photo__header">
            <span>{userName}</span>
          </span>
          <span className="photo__date">{dateString}</span>
        </Header>
        <Image src={imageSrc} fluid />
        <div className="photo__footer">
          <div className="photo__likes">
            {!liked && <Icon name="heart outline" size="big" onClick={this.onClickHeart} />}
            {liked && <Icon name="heart" size="big" color="red" onClick={this.onClickHeart} />}
            {likes.length}
          </div>
          <h3 className="photo__description">{description}</h3>
          {/* <CommentList photoKey={photoKey} /> */}
        </div>
      </Segment>
    );
  }
}

export default Photo;
