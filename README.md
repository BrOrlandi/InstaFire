# :camera::fire: InstaFire


## Setup

Setup your project on [Firebase Console](https://console.firebase.google.com).

Set your config in the file: `src/js/config.js`

Install Firebase CLI:
```
$ npm install -g firebase-tools
```

Login to your Friebase account:

```
$ firebase login
```

Associate the project to your project on Firebase:

```
$ firebase init
```

You will need for **Database**, **Storage** and **Hosting** Firebase features.
Use the default public directory.

## Development

```
$ yarn
$ yarn start
```
Then access `http://localhost:3000/`

## Deploy

```
$ firebase deploy
```