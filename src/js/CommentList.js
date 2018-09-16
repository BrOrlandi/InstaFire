import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Comment } from 'semantic-ui-react';

import CommentItem from './CommentItem';

class CommentList extends Component {
  render() {
    const { comments } = this.props;
    return (
      <Comment.Group>
        {comments.map(comment => (<CommentItem {...comment} />))}
      </Comment.Group>
    );
  }
}

CommentList.propTypes = {
  comments: PropTypes.array,
};

export default CommentList;
