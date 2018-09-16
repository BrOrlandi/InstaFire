import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Comment, Form } from 'semantic-ui-react';

import CommentItem from './CommentItem';

class CommentList extends Component {
  onSubmitComment = (e) => {
    console.log(e.target.comment.value);
  }

  render() {
    const { comments } = this.props; // TODO icon
    return (
      <Comment.Group>
        {comments.map(comment => (<CommentItem {...comment} />))}
        <Form onSubmit={this.onSubmitComment}>
          <Form.Group>
            <Form.Input placeholder="Comment..." name="comment" />
            <Form.Button content="Comentar" />
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
