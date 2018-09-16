import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Comment, Form } from 'semantic-ui-react';

import CommentItem from './CommentItem';

class CommentList extends Component {
  onSubmitComment = (e) => {
    const commentText = e.target.comment.value;
    if (!commentText) {
      return;
    }

    console.log(commentText);
  }

  render() {
    const { comments } = this.props;
    return (
      <Comment.Group>
        {comments.map(comment => (<CommentItem {...comment} />))}
        <Form onSubmit={this.onSubmitComment}>
          <Form.Group>
            <Form.Input placeholder="Comment..." name="comment" className="comment__input" />
            <Form.Button icon="comment outline" className="comment__button" />
          </Form.Group>
        </Form>
      </Comment.Group>
    );
  }
}

CommentList.propTypes = {
  comments: PropTypes.array,
};

export default CommentList;
