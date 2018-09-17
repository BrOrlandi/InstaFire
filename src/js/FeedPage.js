import React, { Component } from 'react';
import { rebase } from './firebase';
import Photo from './Photo';

// const photosSample = [
//   {
//     key: '0',
//     timestamp: 1536899164052,
//     userId: '123',
//     userName: 'João da Silva',
//     userPicture: 'https://picsum.photos/48/?image=453',
//     imageSrc: 'https://picsum.photos/500/?image=15',
//     description: 'Foto exemplo do Picsum',
//   },
//   {
//     key: '1',
//     timestamp: 1537071013471,
//     userId: '1234',
//     userName: 'Maria da Silva',
//     userPicture: 'https://picsum.photos/48/?image=449',
//     imageSrc: 'https://picsum.photos/500/?image=12',
//     description: 'Outra foto exemplo do Picsum',
//   },
// ];

class FeedPage extends Component {
  state = {
    photos: [],
  }

  componentDidMount() {
    rebase.bindToState('/photos', {
      context: this,
      asArray: true,
      state: 'photos',
      queries: {
        orderByChild: 'timestamp',
        limitToLast: 50,
      },
    });
  }

  render() {
    const { photos } = this.state;
    const emptyPhotos = 0 === photos.length;
    const reversePhotos = photos.reverse();
    return (
      <div className="feed-page">
        <div className="feed-page__feed">
          {emptyPhotos && <div className="no-photos">Não há fotos ainda :(</div>}
          {reversePhotos.map(photo => (<Photo {...photo} photoKey={photo.key} />))}
        </div>
      </div>
    );
  }
}

export default FeedPage;
