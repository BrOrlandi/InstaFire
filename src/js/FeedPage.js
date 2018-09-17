import React, { Component } from 'react';

import Photo from './Photo';

const photosSample = [
  {
    key: '0',
    timestamp: 1536899164052,
    userId: '123',
    userName: 'João da Silva',
    userPicture: 'https://picsum.photos/48/?image=453',
    imageSrc: 'https://picsum.photos/500/?image=15',
    description: 'Foto exemplo do Picsum',
    likes: ['123'],
    comments: [
      {
        key: 'c1',
        userId: '123',
        userPhoto: 'https://picsum.photos/48/?image=453',
        userName: 'João da Silva',
        message: 'Comentário teste 1',
      },
      {
        key: 'c2',
        userId: '1234',
        userPhoto: 'https://picsum.photos/48/?image=449',
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
    userPicture: 'https://picsum.photos/48/?image=449',
    imageSrc: 'https://picsum.photos/500/?image=12',
    description: 'Outra foto exemplo do Picsum',
    likes: [],
    comments: [
      {
        key: 'c3',
        userId: '123',
        userPhoto: 'https://picsum.photos/48/?image=453',
        userName: 'João da Silva',
        message: 'Comentário teste 3',
      },
      {
        key: 'c4',
        userId: '1234',
        userPhoto: 'https://picsum.photos/48/?image=449',
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
      <div className="feed-page">
        <div className="feed-page__feed">
          {photos.map(photo => (<Photo {...photo} />))}
        </div>
      </div>
    );
  }
}

export default FeedPage;
