import React from 'react';
import PropTypes from 'prop-types';
import { Comment } from 'semantic-ui-react';

const CommentItem = ({
  userPhoto,
  userName,
  message,
}) => (
  <Comment>
    <Comment.Avatar src={userPhoto} className="comment__avatar" />
    <Comment.Content>
      <Comment.Author>{userName}</Comment.Author>
      <Comment.Text>{message}</Comment.Text>
    </Comment.Content>
  </Comment>
);

CommentItem.propTypes = {
  userPhoto: PropTypes.string,
  userName: PropTypes.string,
  message: PropTypes.string,
};

export default CommentItem;
