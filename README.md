# Real Time Chat

> A chat application that will update in real time when you make a post.

## Installation

OS X & Linux:

```sh
npm install
npm run dev
```

## The Plan

1. Create a form that will take in a title + body.
2. Post will push to update state.
3. Hard code some chat messages in the state.
4. Loop over those messages with the ability to give them a star or a delete
5. Each message will be attached to a user and time stamped.
6. Each message will need a star counter
7. A user will only be able to star a message once.

_Hosting this in firebase seems good_

## Development setup

```
You need to make your own firebase.js file inside of the src/ folder and link it to your own firebase backend.
```

Super easy to do

- go to the console
- click for the web
- copy the var firebaseConfig
- inside of your own firebase.js file import firebase from 'firebase/app'; import 'firebase/firestore';
- then paste your var
- Copy and Paste The Code Below
- firebase.initializeApp(firebaseConfig);
- out export const firestore = firebase.firestore();
- export default firebase;
- CONGRATS you are now hooked up to your cloude db go make facebook ya smart kid :)
