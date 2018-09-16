import React, { Component } from 'react';

import Photo from './Photo';

const photosSample = [
  {
    key: '0',
    timestamp: 1536899164052,
    userId: '123',
    userName: 'João da Silva',
    userPicture: 'https://picsum.photos/48/48/?random=user0',
    imageSrc: 'https://picsum.photos/500/500/?random=photo0',
    description: 'Foto exemplo do Picsum',
    likes: ['123'],
    comments: [
      {
        userId: '123',
        userPhoto: 'https://picsum.photos/48/48/?random=user0',
        userName: 'João da Silva',
        message: 'Comentário teste 1',
      },
      {
        userId: '1234',
        userPhoto: 'https://picsum.photos/48/48/?random=user1',
        userName: 'Maria da Silva',
        message: 'Comentário teste 2',
      },
    ],
  },
  {
    key: '1',
    timestamp: 1537071013471,
    userId: '1234',
    userName: 'Maria da Silva',
    userPicture: 'https://picsum.photos/48/48/?random=user1',
    imageSrc: 'https://picsum.photos/500/500/?random=photo1',
    description: 'Outra foto exemplo do Picsum',
    likes: [],
    comments: [
      {
        userId: '123',
        userPhoto: 'https://picsum.photos/48/48/?random=user0',
        userName: 'João da Silva',
        message: 'Comentário teste 3',
      },
      {
        userId: '1234',
        userPhoto: 'https://picsum.photos/48/48/?random=user1',
        userName: 'Maria da Silva',
        message: 'Comentário teste 4',
      },
    ],
  },
];

class FeedPage extends Component {
  constructor() {
    super();

    this.state = {
      photos: photosSample,
    };
  }

  render() {
    const { photos } = this.state;
    return (
      <div className="feedPage">
        <div className="feedContainer">
          {photos.map(photo => (<Photo {...photo} />))}
        </div>
      </div>
    );
  }
}

export default FeedPage;
