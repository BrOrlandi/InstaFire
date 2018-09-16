import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';

class AddPhotoButton extends Component {
  onClickNewPhoto = () => {

  }

  render() {
    return (
      <Button
        primary
        icon="camera"
        circular
        className="addPhotoButton"
        size="massive"
        onClick={this.onClickNewPhoto}
        floated="right"
      />
    );
  }
}

export default AddPhotoButton;
